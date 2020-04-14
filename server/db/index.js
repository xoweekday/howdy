const mysql = require('mysql');

const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASS = '';
const DB_NAME = 'howdy';

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

connection.connect((err) => {
  if (err) {
      console.log('Error');
      return;
  } else {
      console.log('Connected to database howdy!');
  }
});

const getItems = (callback) => {
  // TODO: Your code here!
};

module.exports.getItems = getItems;
module.exports.connection = connection;