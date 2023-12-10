const mySql = require('mysql2/promise');

const dotenv = require('dotenv');

dotenv.config();
const connection = mySql.createPool({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DATABASE
});

module.exports = connection;