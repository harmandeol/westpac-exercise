var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/data', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(__dirname + '/js/data.json');
});
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));



app.listen(process.env.PORT||3000, function () {
  console.log('Listening on port ' + (process.env.PORT||3000));
});

