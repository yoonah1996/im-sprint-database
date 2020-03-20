const db = require("../db");

const messages = {
  get: function() {
    // const queryString = `SELECT * FROM messages WHERE username=${username} OR roomname=${roomname}`;
    const queryString = `SELECT * FROM messages`;
    return db.chatDatabase(queryString);
  }, // a function which produces all the messages
  post: function({ username, message, roomname }) {
    const user_id = users.get(username)
      ? users.get(username)
      : users.post(username);

    const queryColumns = "(message, user_id, roomname)";
    const queryValues = `(${user_id}, ${message}, ${roomname})`;
    const queryString = `INSERT INTO messages ${queryColumns} VALUES ${queryValues}`;

    db.chatDatabase(queryString);
  }
  // a function which can be used to insert a message into the database
};

const users = {
  // Ditto as above.
  get: function(userName) {
    const queryString = `SELECT id FROM users WHERE user_id=${userName}`;
    return db.chatDatabase(queryString)[0].id;
  },
  post: function(userName) {
    const queryString = `INSERT INTO users (username) VALUES (${userName})`;
    db.chatDatabase(queryString);
    return this.get(userName);
  }
};

module.exports = {
  messages,
  users
};
