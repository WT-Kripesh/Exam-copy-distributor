const { connectToDB } = require("../database");
// const { pool } = require("../database");
const md5 = require("md5");

module.exports.getById = function (id, cb) {
  const db = connectToDB();
  const query = `select * from admin where id=?`;
  db.get(query, id, (err, row) => {
    console.log("Getting User");
    if (err) {
      console.error("Database Error");
      cb(err);
    }
    cb(null, row);
    db.close((err) => {
      console.log("Closing database Connection");
      if (err) console.error(err);
    });
  });
  // pool.getConnection(function (err, connection) {
  //   if (err) cb(err);
  //   console.log("Database connected for dbaccess");

  //   connection.query(query, (err, result) => {
  //     if (err) {
  //       console.error("Database Error");
  //       cb(err);
  //     } else {
  //       cb(null, result[0]);
  //     }
  //   });
  //   connection.release();
  // });
};

module.exports.getByUsernamePassword = function (username, password, cb) {
  const query = `select * from admin where username=? and password=?`;
  const db = connectToDB();

  db.get(query, username, md5(password), (err, row) => {
    console.log("Getting User");
    if (err) {
      console.error("Database Error");
      cb(err);
    }
    cb(null, row);
    db.close((err) => {
      console.log("Closing database Connection");
      if (err) console.error(err);
    });
  });

  // pool.getConnection(function (err, connection) {
  //   if (err) cb(err);
  //   console.log("Database connected for dbaccess");

  //   connection.query(query, (err, result) => {
  //     if (err) {
  //       console.error("Database Error");
  //       cb(err);
  //     } else {
  //       cb(null, result[0]);
  //     }
  //   });
  //   connection.release();
  // });
};
