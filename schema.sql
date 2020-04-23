/**
 * Execute this file from the command line by typing:
 *   mysql -u root < schema.sql
 */

DROP DATABASE IF EXISTS howdy;
CREATE DATABASE howdy;

USE howdy;

CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  google_id varchar(255) UNIQUE,
  image_url varchar(255),
  name varchar(255),
  latitude decimal(10, 8),
  longitude decimal(11, 8),
  city varchar(255),
  region varchar(255)
);

CREATE TABLE messages (
  id int PRIMARY KEY AUTO_INCREMENT,
  user_id int,
  message varchar(255),
  created_at timestamp,
  room_id int
);

CREATE TABLE rooms (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(60),
  host_id int,
  host_long decimal(11, 8),
  host_lat decimal(10, 8),
  radius int,
  details varchar(255),
  date date,
  start time,
  end time,
  city varchar(255),
  region varchar(255)
);
 
CREATE TABLE characters (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(255)
 );

-- ALTER TABLE rooms FOREIGN KEY (user_id) REFERENCES users (id);
-- ALTER TABLE rooms FOREIGN KEY (id) REFERENCES messages (room_id);
-- ALTER TABLE rooms FOREIGN KEY (host_id) REFERENCES users (id);
-- ALTER TABLE messages FOREIGN KEY (user_id) REFERENCES users (id);
-- ALTER TABLE users FOREIGN KEY (location) REFERENCES rooms (host_location);
-- ALTER TABLE users FOREIGN KEY (character_id) REFERENCES characters (id);

INSERT INTO messages (message) VALUES ('hi');
INSERT INTO messages (message) VALUES ('this is an example message');
INSERT INTO users (google_id, image_url, name, latitude, longitude) VALUES (123456789, 'https://vignette.wikia.nocookie.net/kyoukainokanata/images/2/20/Mirai_Kuriyama.png/revision/latest?cb=20131009053737&path-prefix=es', 'Mirai Kuriyama', 29.961919, -90.057390);
INSERT INTO users (google_id, image_url, name, latitude, longitude) VALUES (987654321, 'https://avatars0.githubusercontent.com/u/57510574?s=460&u=04ca64a9c9ddaa924a8ee2168b2c714d29cb02b9&v=4', 'Jess', 29.961919, -90.057390);
INSERT INTO rooms (name, host_id, host_lat, host_long, city, region, radius, details, date, start, end) VALUES ('Pokemon Party', 1, 30.695366, -88.039894, 'Mobile', 'Alabama', 500, 'This is a detail of Pokemon Party', '2020-07-20', '00:00:00', '23:59:59');
INSERT INTO rooms (name, host_id, host_lat, host_long, city, region, radius, details, date, start, end) VALUES ('League Party', 2, 30.471165, -91.147385, 'Baton Rouge', 'Louisiana', 50, 'This is a detail of League Party', '2020-06-20', '00:00:00', '23:59:59');

-- dummy data for location restrictions

INSERT INTO users (name, latitude, longitude) VALUES ('Chris', 40.730610, -73.935242);
INSERT INTO rooms (name, host_id, host_lat, host_long, radius, city, region) VALUES ('Everyone Join!', 3, 40.730610, -73.935242, 1350, 'New York City', 'New York');
INSERT INTO users (name, latitude, longitude) VALUES ('James', 30.009631, -90.158193);
INSERT INTO rooms (name, host_id, host_lat, host_long, radius, city, region) VALUES ('Kenner Only', 4, 29.9941, -90.2417, 1, 'Kenner', 'Louisiana');
INSERT INTO users (name, latitude, longitude) VALUES ('Heather', 29.959757, -90.063974);
