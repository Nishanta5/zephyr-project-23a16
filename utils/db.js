const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "medical_management_system",
});

db.connect((err) => {
    if (err) throw err;
    console.log("MySQL connected");
});

module.exports = db;
