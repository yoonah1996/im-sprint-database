// const db = require("../db/ormIndex");
var Sequelize = require("sequelize");
var db = new Sequelize("chat", "root", "PASSWORD", {
  host: "localhost",
  dialect: "mysql"
});

var User = db.define(
  "users",
  {
    username: Sequelize.STRING
  },
  { timestamps: false }
);
// const User = db.User;
var Message = db.define(
  "messages",
  {
    user_id: Sequelize.INTEGER,
    message: Sequelize.STRING,
    roomname: Sequelize.STRING
  },
  { timestamps: false }
);

User.hasMany(Message, {
  foreignKey: "user_id"
});
// Message.belongsTo(User, {
//   targetKey: "id"
// });

db.sync({ alter: true });

const ormUsers = {
  post: function(username) {
    return User.create({ username: username })
      .then(function(data) {
        return data.dataValues.id;
      })
      .catch(function(err) {
        return err;
      });
  },
  get: function(username) {
    return User.findAll({ where: { username: username } })
      .then(function(data) {
        return data[0].id;
      })
      .catch(() => {
        return undefined;
      });
  }
};

const ormMessages = {
  get: function() {
    return Message.findAll()
      .then(function(data) {
        return data;
      })
      .catch(function(err) {
        return err;
      });
  },
  post: async function({ username, message, roomname }) {
    let show = await ormUsers.get(username);
    if (!show) {
      show = await ormUsers.post(username);
    }
    return Message.create({
      user_id: show,
      message: message,
      roomname: roomname
    })
      .then(function(data) {
        return data;
      })
      .catch(function(err) {
        return err;
      });
  }
};

module.exports = { ormUsers, ormMessages };