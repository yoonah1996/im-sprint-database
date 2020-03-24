DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;
CREATE TABLE `users` (
  `id` int(6) PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(128)
);

CREATE TABLE `messages` (
  `id` int(6) PRIMARY KEY AUTO_INCREMENT,
  `message` varchar(255),
  `user_id` int(6),
  `roomname` varchar(128)
);

ALTER TABLE `messages` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
