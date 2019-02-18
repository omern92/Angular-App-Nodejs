var express     = require('express');
var path        = require('path');
var bodyParser  = require('body-parser');
var cors        = require('cors');
// const { PORT, SECRET_STRING, ORIGIN } = require('./env_var');

var session = require('express-session')({
  secret: process.env.SECRET_STRING,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1800000
  }
});

var app = express();
app.use(session);

var corsOptions = {
  origin: "*",
  credentials: true
}

app.use(cors(corsOptions)); 

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var api = require('./routes/api');

app.use('/api',api);
app.use('*',api);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started at ' +process.env.PORT );
});
