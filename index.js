const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.text());
app.post('/', (req, res) => {

  let fields = ['To', 'From', 'Date', 'Subject', 'Message-ID'];
  let limits = ['Rec', 'Reply-To', 'To', 'Feedback', ' ------msg_bord'];
  var outstring = '{';

  fields.forEach(function(item, index, array) {
    var start = item + ': ';
    var value = req.body.split(start);
    value = value[1].split(limits[index]);
    outstring = outstring + 'QUOTES' + item + 'QUOTES: QUOTES' + value[0] + 'QUOTES, ';
  });

  outstring = outstring + '}';
  outstring = outstring.replace(', }','}');
  outstring = outstring.replace(/"/gi,'\\"');
  outstring = outstring.replace(/QUOTES/gi,'\"');
  res.status(200).send(outstring);
});

app.listen(8080, () => console.log('Started server at http://localhost:8080'));
