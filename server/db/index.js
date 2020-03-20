var mysql = require('mysql');

class chatDatabase {
    constructor() {
        this.profile = { user: "root", password: "", database: "chat" };
        this.dbConnection = this.getConnection();
        this.startConnection = this.dbConnection.connect();
        this.endConnection = this.dbConnection.end();
    }

    getConnection() {
        mysql.createConnection(this.profile);
    }

    queryConnection(queryString) {
        this.startConnection();
        this.dbConnection.query(queryString);
        this.endConnection();
    }
    // dbConnection.connect();
    // dbConnection.end();
}

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = chatDatabase;
