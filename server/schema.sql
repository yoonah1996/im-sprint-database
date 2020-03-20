DROP DATABASE chat;
CREATE DATABASE chat;
USE chat;
CREATE TABLE `users` (
  `id` int(6) PRIMARY KEY AUTO_INCREMENT,
  `user_id` varchar(128)
);

CREATE TABLE `rooms` (
  `id` int(6) PRIMARY KEY AUTO_INCREMENT,
  `roomname` varchar(128)
);

CREATE TABLE `messages` (
  `id` int(6) PRIMARY KEY,
  `message` varchar(255),
  `user_id` int(6),
  `roomname` int(6)
);

ALTER TABLE `messages` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `messages` ADD FOREIGN KEY (`roomname`) REFERENCES `rooms` (`id`);
/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/