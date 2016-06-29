const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const db = require('./db/connection.js');
const session = require('express-session');
const passport = require('passport');
const FitbitPassport = require('./authentication/FitbitPassport');
const MovesPassport = require('./authentication/MovesPassport');
const flash = require('connect-flash');
const app = express();
const port = process.env.PORT || 3000;
const config = require('./config');
const redisClient = require('./db/redisConnection.js');

const sessionOpts = {
  secret: config.session.secret,
  resave: false, 
  saveUninitialized: true, 
};

app.use(express.static(path.join(__dirname, '../client')));
app.use(cookieParser(config.session.secret));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(sessionOpts));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use('/', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, () => console.log('Server is listening on port ', port, '\nRefresh the browser '));

