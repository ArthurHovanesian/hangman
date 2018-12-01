const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const port = 3000;
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'passcode'
});

connection.connect();

//change this to path.join???
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());

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

app.get('/api/choose_word/:difficulty', (req, res) => {
  const difficulty = req.params.difficulty;
  let wordLevel;
  if (difficulty === 'easy') {
    wordLevel = Math.floor(Math.random() * 3) + 1;
  } else if (difficulty === 'medium') {
    wordLevel = Math.floor(Math.random() * 3) + 4;
  } else if (difficulty === 'hard') {
    wordLevel = Math.floor(Math.random() * 4) + 7;
  }
  axios.get(`http://app.linkedin-reach.io/words?difficulty=${wordLevel}`)
    .then(success => res.status(200).send(chooseWord(success.data)))
    .catch(err => res.status(500).send(err));
})

app.post('/database/highscores', (req, res) => {
  console.log(req.body.params)
  const name = req.body.params.name;
  const difficulty = req.body.params.difficulty;
  const score = req.body.params.score;
  insert(name, difficulty, score, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      retrieve(difficulty, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(results)
        }
      });
    }
  });
})

//move to separate file utilities
chooseWord = (data) => {
  const words = data.split('\n');
  const randInd = Math.floor(Math.random() * words.length);
  return words[randInd];
}

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
