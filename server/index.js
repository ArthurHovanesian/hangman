const express = require('express');
const port = 3000;

const app = express();

//change this to path.join???
app.use(express.static(__dirname + '/../public'));

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
