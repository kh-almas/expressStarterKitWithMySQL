// require
const mysql = require("mysql2/promise");
require("dotenv").config();

// pool
// const pool = mysql.createPool({
//   host: process.env.HOST || "localhost",
//   user: process.env.USER || "root",
//   database: process.env.DATABASE || "erp",
// });
const pool = mysql.createPool({
  host: "",
  user: "",
  password: "",
  database: "",
  dateStrings: true,
});

// connection
const getDatabaseConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("database connection established");
    return connection;
  } catch (err) {
    console.error(`database connection error, ${err}`);

    throw err;
  }
};

// export
module.exports = getDatabaseConnection;
