const express = require('express');
const bodyparser = require('body-parser');
const readline = require('readline');
const fs = require('fs');
const app = express();

app.use(bodyparser.text());
app.post('/', (req, res) => {

  fs.writeFile('postdata.txt', req.body, function (err) {
    if (err) return console.log(err);
  });

  const readInterface = readline.createInterface({
    input: fs.createReadStream('postdata.txt'),
  });

  readInterface.on('line', function(line) {
    if ((line.startsWith('To')) || \ 
        (line.startsWith('From')) || \
        (line.startsWith('Subject')) \
    ) {
      console.log(line);
    }
  });

  res.sendStatus(200);
});

app.listen(8080, () => console.log('Started server at http://localhost:8080'));
