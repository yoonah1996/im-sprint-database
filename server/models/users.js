// const db = require("../db/ormIndex");
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var User = db.define('users', {
  username: Sequelize.STRING
});
// const User = db.User;
var Message = db.define('messages', {
  user_id: Sequelize.INTEGER,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Message, {
  foreignKey: 'user_id'
});
Message.belongsTo(User, {
  targetKey: 'id'
});

db.sync({ alter: true })

const ormUsers = {
  get: function (username) {
    return User.findAll({ where: { username: username } })
      .then(function (data) {
        if(!data[0]){
          return this.post(username);
        }
        return data[0].id;
      })
      .catch(function (err) {
        return err;
      });
  },
  post: function (username) {
    return User.create({ username: username })
      .then(function (data) {
        return data[0].id;
      })
      .catch(function (err) {
        return err;
      });
  }
}

const ormMessages = {
  get: function () {
    return Message.findAll()
      .then(function (data) {
        // console.log(data)
        return data;
      })
      .catch(function (err) {
        return err;
      });
  },
  post: async function ({ username, message, roomname }) {
    console.log(username);
    let show = await ormUsers.get(username);
    // if(show === undefined){

    // }
    console.log(show);
    return Message.create({ username: username, message: message, roomname: roomname })
      .then(function (data) {
        return data;
      })
      .catch(function (err) {
        return err;
      });
  }
}

module.exports = { ormUsers, ormMessages };