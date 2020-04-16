const mysql = require('mysql');
const util = require('util');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
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

// get all rooms from database
const getRooms = (req, res) => {
  const mysqlQuery = `SELECT * FROM rooms`;
  return query(mysqlQuery);
};

// get all messages from database
const getMessages = (req, res) => {
  const mysqlQuery = `SELECT * FROM messages`;
  return query(mysqlQuery);
};

// create a party
const addParty = (req, res) => {
  const { name, host_id, location, radius, details, date, start, end } = req.body; // or req.body
  const mysqlQuery = `INSERT INTO rooms (name, host_id, location, radius, details, date, start, end) VALUES ('${name}', ${host_id}, '${location}', ${radius}, '${details}', '${date}', '${start}', '${end}')`
  return query(mysqlQuery);
}

module.exports = {
  getRooms,
  getMessages,
  addParty,
};