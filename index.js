const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.text());
app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200);
});

app.listen(8080, () => console.log('Started server at http://localhost:8080'));
