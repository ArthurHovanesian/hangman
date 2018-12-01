var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'example.org',
  user     : 'bob',
  password : 'secret'
});

const insert = (name, difficulty, score) {
  const query = `INSERT INTO ${difficulty} VALUES ('${name}', ${score})`;

}

module.exports.insert = insert;
