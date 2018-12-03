const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());

const chooseWord = (data) => {
  const words = data.split('\n');
  const randInd = Math.floor(Math.random() * words.length);
  return words[randInd];
};

app.get('/api/choose_word/:difficulty', (req, res) => {
  const { difficulty } = req.params;
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
});

app.post('/database/highscores', (req, res) => {
  const { name, difficulty, score } = req.body.params;
  db.insert(name, difficulty, score, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      db.retrieve(difficulty, (error, results) => {
        if (error) {
          res.status(500).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
