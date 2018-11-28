const express = require('express');
const axios = require('axios');
const port = 3000;

const app = express();

//change this to path.join???
app.use(express.static(__dirname + '/../public'));

app.get('/api/choose_word', (req, res) => {
  axios.get(`http://app.linkedin-reach.io/words`)
    .then(success => res.status(200).send(chooseWord(success.data)))
    .catch(err => res.status(500).send(err));
})

chooseWord = (data) => {
  const words = data.split('\n');
  const randInd = Math.floor(Math.random() * words.length);
  return words[randInd];
}

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
