const db = require("../db/ormIndex");

const User = db.User;

const ormUsers = {
    get : async function(username){
        return User.sync()
        .then(function() {
            return User.findAll({ where: {username: `${username}`} });
          })
        .then(function(){
            db.close();
        })
        .catch(function(err) {
            db.close();
            return err;
          });
    },
    post : async function(username){
        User.sync(username)
        .then(function() {
            return User.create({username: `${username}`});
          })
          .then(function(){
            db.close();
        })
        .catch(function(err) {
            db.close();
            return err;
          });
    }
}

module.exports = ormUsers;