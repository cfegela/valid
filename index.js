const express = require('express');
const app = express();
const readline = require('readline');
const fs = require('fs');

app.use(express.text());

app.get('/', (req, res) => {
  console.log('200 GET OK');
  res.status(200).send('200 GET OK');
});

app.post('/', (req, res) => {

  fs.writeFile('postdata.txt', req.body, function (err) {
    if (err) return console.log(err);
  });

  const readInterface = readline.createInterface({
    input: fs.createReadStream('postdata.txt'),
  });

  readInterface.on('line', function(line) {
    if ((line.startsWith('To:'))
    ) {
      to = line;
      console.log(to);
    }
  });

  console.log(to);
  res.status(200).send('200 POST OK');
});

app.listen(8080, () => console.log('Started server at http://localhost:8080'));
