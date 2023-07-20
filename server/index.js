const express = require("express");
const session = require("express-session");
const config = require("config");
const routes = require("./routes");
const bodyParser = require("body-parser");
const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const { getByUsernamePassword, getById } = require("./controller/User");
const isAuthenticated = require("./middlewares/isAuthenticated");

const app = express();

//Middlewares

//Allow CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
  next();
});

app.use(
  session({
    secret: "something",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 86400000,
    },
  })
);

// Passport auth

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  getById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(function (username, password, done) {
    getByUsernamePassword(username, password, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: "Incorrect username or password.",
        });
      }
      return done(null, user);
    });
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

try {
  app.get("/user", function (req, res) {
    if (req.isAuthenticated()) {
      res.send(JSON.stringify(req.user));
    } else {
      res.sendStatus(401);
    }
  });

  function sendIndexFile(req, res) {
    res.sendFile("./public/index.html", { root: __dirname });
  }

  // app.get("/login", sendIndexFile)

  app.post("/API/login", function (req, res, next) {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.sendStatus(401);
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.sendStatus(200);
      });
    })(req, res, next);
  });

  app.get("/API/logout", (req, res, next) => {
    req.logout();
    res.sendStatus(200);
  });

  app.use(
    "/API",
    // comment line below to allow unauthenticated users
    // isAuthenticated,
    routes
  );

  app.get("/*", sendIndexFile);

  //PORT
  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`Listening on port ${port}`));
} catch (error) {
  console.error(error);
}
