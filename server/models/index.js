const db = require("../db");

const orm = require("./users");

const messages = {
  get: async function() {
    // const queryString = `SELECT * FROM messages WHERE username=${username} OR roomname=${roomname}`;
    const queryString = `SELECT * FROM messages`;
    return await db.chatDatabase(queryString);
  }, // a function which produces all the messages
  post: async function({ username, message, roomname }) {
    let user_id = await users.get(username);
    if (typeof user_id !== "number") {
      user_id = await users.post(username);
    }

    const queryColumns = "(message, user_id, roomname)";
    const queryValues = `(${JSON.stringify(
      message
    )}, ${user_id}, ${JSON.stringify(roomname)})`;
    const queryString = `INSERT INTO messages ${queryColumns} VALUES ${queryValues}`;

    const queryResult = await db.chatDatabase(queryString);
    return queryResult.inserID;
  }
  // a function which can be used to insert a message into the database
};

const users = {
  // Ditto as above.
  get: async function(username) {
    const queryString = `SELECT id FROM users WHERE username='${username}'`;
    const rawResult = await db.chatDatabase(queryString);

    if (rawResult[0] === undefined) return "User is not in DB";

    const userID = rawResult[0].id;

    return userID;
  },
  post: async function(username) {
    if (typeof (await this.get(username)) !== "number") {
      const queryArgs = { username: username };
      const queryString = `INSERT INTO users SET ?`;
      await db.chatDatabase(queryString, queryArgs);
    }
    const userID = await this.get(username);
    return userID;
  }
};



module.exports = {
  orm
};
