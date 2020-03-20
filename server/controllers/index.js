const models = require("../models");

const messages = {
  get: function(req, res) {
    const result = models.messages.get();
    res.status(200).send(result);
  }, // a function which handles a get request for all messages
  post: function(req, res) {
    models.messages.post(req.body);
    res.status(200).send();
  } // a function which handles posting a message to the database
};

const users = {
  get: function(req, res) {
    const result = models.users.get(req.body.username);
    res.status(200).send(result);
  }, // a function which handles a get request for all users
  post: function(req, res) {
    models.users.post(req.body.username);
    res.status(200).send();
  } // a function which handles posting a user to the database
};

module.exports = {
  messages,
  users
};
