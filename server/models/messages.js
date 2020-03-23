const db = require("../db/ormIndex");

const Message = db.Message;

const ormMessages = {
    get: async function () {
        Message.sync()
            .then(function () {
                return Message.findAll();
            })
            .then(function () {
                db.close();
            })
            .catch(function (err) {
                db.close();
                return err;
            });
    },
    post: async function ({ username, message, roomname }) {
        Message.sync()
            .then(function () {
                return Message.create({ username: username, message : message, roomname : roomname });
            })
            .then(function () {
                db.close();
            })
            .catch(function (err) {
                db.close();
                return err;
            });
    }
}
module.exports = { ormMessages };