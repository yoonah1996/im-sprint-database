const models = require("../models");

const messages = {
  get: async function(req, res) {
    const messageList = await models.messages.get();
    res.status(200).send(messageList);
  }, // a function which handles a get request for all messages
  post: async function(req, res) {
    const postID = await models.messages.post(req.body);
    res.status(200).json(postID); //json???
  } // a function which handles posting a message to the database
};

const users = {
  get: async function(req, res) {
    const userID = await models.users.get(req.body.username);
    res.status(200).json(userID);
  }, // a function which handles a get request for all users
  post: async function(req, res) {
    const userID = await models.users.post(req.body.username);
    res.status(200).json(userID);
  } // a function which handles posting a user to the database
};

module.exports = {
  messages,
  users
};
