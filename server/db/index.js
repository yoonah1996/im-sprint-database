var mysql = require("mysql");

const chatDatabase = (queryString, queryArgs = null) => {
  return new Promise((resolve, reject) => {
    const defaultProfile = {
      user: "root",
      password: "",
      database: "chat"
    };

    const dbConnection = mysql.createConnection(defaultProfile);

    dbConnection.connect(err => {
      if (err) reject(new Error("Error : unable to connect to DB"));
      /* eslint-disable-next-line no-console */
      console.log(
        "============================\nConnected!\n============================"
      );
    });

    dbConnection.query(queryString, queryArgs, (err, rows) => {
      if (err) throw err;
      if (rows === undefined) reject(new Error("Error : rows is not defined"));
      resolve(rows);
    });

    dbConnection.end();
  });
};

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = { chatDatabase };
