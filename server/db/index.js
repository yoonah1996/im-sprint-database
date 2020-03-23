var mysql = require("mysql");

const chatDatabase = (queryString, customProfile = null) => {
    const defaultProfile = {
        user: "root",
        password: "PASSWORD",
        database: "chat"
    };

    const dbConnection = mysql.createConnection(
        customProfile ? customProfile : defaultProfile
    );

    dbConnection.connect();
    var queryResults;
    dbConnection.query(queryString, (err, rows) => {
        if (err) throw err;

        queryResults = rows;
    });
    dbConnection.end();

    return queryResults;
};

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = { chatDatabase };
