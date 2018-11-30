const express = require('express');
const axios = require('axios');
const port = 3000;

const app = express();

//change this to path.join???
app.use(express.static(__dirname + '/../public'));

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

//move to separate file utilities
chooseWord = (data) => {
  const words = data.split('\n');
  const randInd = Math.floor(Math.random() * words.length);
  return words[randInd];
}

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
