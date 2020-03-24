const models = require("../models");

const messages = {
  get: async function(req, res) {
    const messageList = await models.orm.ormMessages.get();
    // console.log(messageList);
    res.status(200).send(messageList);
  }, // a function which handles a get request for all messages
  post: async function(req, res) {
    const postID = await models.orm.ormMessages.post(req.body);
    res.status(200).json(postID);
  } // a function which handles posting a message to the database
};

const users = {
  get: async function(req, res) {
    // console.log(models);
    const userID = await models.orm.ormUsers.get(req.body.username);
    res.status(200).json(userID);
  }, // a function which handles a get request for all users
  post: async function(req, res) {
    const userID = await models.orm.ormUsers.post(req.body.username);
    res.status(200).json(userID);
  } // a function which handles posting a user to the database
};

module.exports = {
  messages,
  users
};
