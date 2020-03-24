var mysql = require("mysql");

const chatDatabase = (queryString, queryArgs = null) => {
  return new Promise((resolve, reject) => {
    const defaultProfile = {
      user: "root",
      password: password,
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

// process.env로 시작하는 모든 변수들은 환경 변수(environmental variables)입니다.
// 환경 변수는 터미널에서 다음 명령을 이용하여 설정할 수 있습니다.
// export DATABASE_SPRINT_PASSWORD=your_password_here
const password = process.env.DATABASE_SPRINT_PASSWORD;

// const host = "localhost";

// 데이터베이스 연결을 만들고, 연결 객체를 export 하세요.
// 연결에 필요한 몇가지 정보가 있습니다. 먼저 user는 root, 패스워드는 위 password 변수를 사용하세요.
// 그리고 실제로 연결할 데이터베이스의 위치(host)는 host 변수를 사용하세요.
// 데이터베이스 이름(database)은 "chat"로 지정하세요.
module.exports = { chatDatabase };
