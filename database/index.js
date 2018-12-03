var mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'passcode'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to database "passcode"');
  }
});

const insert = (name, difficulty, score, callback) => {
  const query = `INSERT INTO ${difficulty} (name, score) VALUES ('${name}', ${score})`;
  connection.query(query, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

const retrieve = (difficulty, callback) => {
  const query = `SELECT * FROM ${difficulty} ORDER BY score DESC LIMIT 10`;
  connection.query(query, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

module.exports = {
  insert,
  retrieve
}
