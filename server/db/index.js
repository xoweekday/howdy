const mysql = require('mysql');
const util = require('util');

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

const query = util.promisify(connection.query).bind(connection);

const getRooms = (req, res) => {
  const mysqlQuery = `SELECT * FROM rooms`;
  return query(mysqlQuery);
};

module.exports.getItems = getItems;
module.exports = {
  getItems,
  getRooms,
};