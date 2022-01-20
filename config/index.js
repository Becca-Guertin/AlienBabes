const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '*******',
    database: 'sunpop_db',
}).promise();

module.exports = connection;