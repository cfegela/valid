const express = require('express');
const bodyparser = require('body-parser');
const readline = require('readline');
const fs = require('fs');
const app = express();

app.use(bodyparser.text());
app.post('/', (req, res) => {

  // write the data from post
  fs.writeFile('postdata.txt', req.body, function (err) {
    if (err) return console.log(err);
  });

  // read in the file
  const readInterface = readline.createInterface({
    input: fs.createReadStream('postdata.txt'),
  });

  // loop over the file and get the fields
  readInterface.on('line', function(line) {
    console.log(line);
  });

  // ship it
  res.send(200);
});

app.listen(8080, () => console.log('Started server at http://localhost:8080'));
