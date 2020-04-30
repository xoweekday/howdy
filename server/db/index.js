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
  if (!err) {
    console.log('Connected to database howdy!');
  }
  return err;
});

const query = util.promisify(connection.query).bind(connection);

// get all rooms from database
const getRooms = () => {
  const mysqlQuery = 'SELECT rooms.*, users.name AS hostname FROM rooms, users WHERE rooms.host_id = users.id';
  return query(mysqlQuery);
};

// get all messages from database
const getMessages = () => {
  const mysqlQuery = 'SELECT * FROM messages';
  return query(mysqlQuery);
};

// get all messages from database
const getUser = (req) => {
  const { google_id } = req.query;
  const mysqlQuery = `SELECT * FROM users WHERE google_id=${google_id}`;
  return query(mysqlQuery);
};

// create a party
const addParty = (req) => {
  const {
    name, theme, password, host_id, longitude, latitude, radius, details, date, start, end, city, region, calendar_link,
  } = req.body;
  const mysqlQuery = `INSERT INTO rooms (name, theme, password, host_id, host_long, host_lat, radius, details, date, start, end, city, region) VALUES ('${name}', '${theme}', '${password}', ${host_id}, '${longitude}', '${latitude}', ${radius}, '${details}', '${date}', '${start}', '${end}', '${city}', '${region}', '${calendar_link}')`;
  return query(mysqlQuery);
};

// create a user
const addUser = (req) => {
  const {
    google_id, image_url, name, latitude, longitude, city, region,
  } = req.body;
  const mysqlSelectQuery = `SELECT id FROM users WHERE google_id = '${google_id}'`
  const mysqlInsertQuery = `INSERT INTO users (google_id, image_url, name, latitude, longitude, city, region) VALUES ('${google_id}', '${image_url}', '${name}', ${latitude}, ${longitude}, '${city}', '${region}')`;
  return query(mysqlSelectQuery)
    .then((result) => {
      if (result.length) {
        return Promise.resolve({insertId: result[0].id});
      }
      return query(mysqlInsertQuery);
    });
};

const addBan = (req) => {
  const { user_id, room_id } = req.body;
  const mysqlQuery = `INSERT INTO bans (user_id, room_id) VALUES (${user_id}, ${room_id})`;
  return query(mysqlQuery);
}

const getBan = (req) => {
  const { userId, roomId } = req.params;
  const mysqlQuery = `SELECT * FROM bans WHERE user_id = ${userId} AND room_id = ${roomId}`;
  return query(mysqlQuery);
}

module.exports = {
  getRooms,
  getMessages,
  getUser,
  addParty,
  addUser,
  addBan,
  getBan,
};
