var express = require('express');
var path = require('path');
var exphbs  = require('express-handlebars');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/api/starships', function (req, res) {
  var data = require('./swapi.json');
  res.json(data);
});

app.listen(3000, function () {
  console.log('Anaplan app listening on port 3000!');
});
