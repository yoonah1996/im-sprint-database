var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

var User = db.define('users', {
    username: Sequelize.STRING
});

var Message = db.define('messages', {
    user_id: Sequelize.INTEGER,
    message: Sequelize.STRING,
    roomname: Sequelize.STRING
});

User.hasMany(Message, {
    foreignKey: 'user_id'
});
// Message.belongsTo(User, {
// });

db.sync({ alter: true })


module.exports = { db };