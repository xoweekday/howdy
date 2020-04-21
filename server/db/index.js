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

// get all messages from database
const getUser = (req, res) => {
  const {google_id} = req.body;
  const mysqlQuery = `SELECT * FROM users WHERE google_id=${google_id}`;
  return query(mysqlQuery);
};

// create a party
const addParty = (req, res) => {
  const { name, host_id, longitude, latitude, radius, details, date, start, end } = req.body; // or req.body
  const mysqlQuery = `INSERT INTO rooms (name, host_id, host_long, host_lat, radius, details, date, start, end) VALUES ('${name}', ${host_id}, '${longitude}', '${latitude}', ${radius}, '${details}', '${date}', '${start}', '${end}')`
  return query(mysqlQuery);
}

// create a user
const addUser = (req, res) => {
  const { google_id, image_url, name, latitude, longitude } = req.body;
  const mysqlQuery = `INSERT INTO users (google_id, image_url, name, latitude, longitude) VALUES ('${google_id}', '${image_url}', '${name}', ${latitude}, ${longitude})`;
  return query(mysqlQuery);
}

module.exports = {
  getRooms,
  getMessages,
  getUser,
  addParty,
  addUser
};