var mysql = require("mysql");

const chatDatabase = async (queryString, queryArgs = null) => {
  const getQueryResults = () => {
    return new Promise((resolve, reject) => {
      dbConnection.query(queryString, queryArgs, (err, rows) => {
        if (err) throw err;
        if (rows === undefined)
          reject(new Error("Error : rows is not defined"));
        resolve(rows);
      });
    });
  };

  const defaultProfile = {
    user: "root",
    password: "PASSWORD",
    database: "chat"
  };

  const dbConnection = mysql.createConnection(defaultProfile);

  await dbConnection.connect(err => {
    if (err) throw err;
    /* eslint-disable-next-line no-console */
    console.log(
      "============================\nConnected!\n============================"
    );
  });

  const queryResults = await getQueryResults();
  await dbConnection.end();
  return await queryResults;
};

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = { chatDatabase };
