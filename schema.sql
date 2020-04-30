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
  theme varchar(60) DEFAULT 'original',
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

CREATE TABLE rsvp (
   id int PRIMARY KEY AUTO_INCREMENT,
   phone varchar(10),
   room_id int
);

CREATE TABLE bans (
   id int PRIMARY KEY AUTO_INCREMENT,
   user_id int,
   room_id int
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
INSERT INTO rooms (name, host_id, host_lat, host_long, city, region, radius, details, date, start, end) VALUES ('Pokemon Party', 1, 30.695366, -88.039894, 'Mobile', 'Alabama', 500, 'Gotta catch\'em all! ', '2020-07-24', '11:00:00', '14:00:00');
INSERT INTO rooms (name, host_id, host_lat, host_long, city, region, radius, details, date, start, end) VALUES ('League Party', 2, 30.471165, -91.147385, 'Baton Rouge', 'Louisiana', 50, 'Ask Gordon?', '2020-06-12', '02:00:00', '05:00:00');

-- dummy data for location restrictions

INSERT INTO rooms (name, host_id, host_lat, host_long, radius, details, city, region, date, start, end) VALUES ('Solidarity With NYC', 3, 40.730610, -73.935242, 1350, 'Toast to NYC with your favorite drink', 'New York City', 'New York', '2020-04-27', '16:00:00', '12:00:00');
INSERT INTO rooms (name, host_id, host_lat, host_long, radius, details, city, region, date, start, end) VALUES ('Kenner Only', 4, 29.9941, -90.2417, 1, 'Virtual Crawfish Boil', 'Kenner', 'Louisiana', '2020-04-27', '08:15:00', '12:00:00');
INSERT INTO rooms (name, host_id, host_lat, host_long, radius, details, city, region, date, start, end) VALUES ('Jazz-Festing at Home', 4, 29.9511, -90.0715, 30, 'Share your favorite JazzFest memories', 'New Orleans', 'Louisiana', '2020-04-25', '08:15:00', '12:00:00');
INSERT INTO rooms (name, host_id, host_lat, host_long, radius, details, city, region, date, start, end) VALUES ('Jazz-Festing at Home', 4, 29.9511, -90.0715, 30, 'Share your favorite JazzFest memories', 'New Orleans', 'Louisiana', '2020-04-27', '08:00:00', '12:00:00');
