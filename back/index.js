const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log("Connected DB");
// });

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
