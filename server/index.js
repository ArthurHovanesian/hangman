const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const port = 3000;
const app = express();

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());

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
  const name = req.body.params.name;
  const difficulty = req.body.params.difficulty;
  const score = req.body.params.score;
  db.insert(name, difficulty, score, (err, success) => {
    if (err) {
      res.status(500).send(err);
    } else {
      db.retrieve(difficulty, (err, results) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(results)
        }
      });
    }
  });
})

chooseWord = (data) => {
  const words = data.split('\n');
  const randInd = Math.floor(Math.random() * words.length);
  return words[randInd];
}

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
