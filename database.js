const mysql = require("mysql");
const sqlite = require("sqlite3");

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "EPMS",
//   multipleStatements: true,
// });
const connectToDB = ()=> new sqlite.Database("db/EPMS.sqlite3");


module.exports.connectToDB = connectToDB;
