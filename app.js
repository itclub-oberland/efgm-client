var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var cors = require('cors');

var indexRouter = require('./routes/authentication');

var app = express();

app.use(session({
  secret: 'wep-api-efgm-secret-2342346756',
  resave: true,
  saveUninitialized: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());


const appPath = path.join(__dirname, 'public', 'client', 'dist', 'angular');

app.use(express.static(appPath));

app.all('/*', (req, res, next) => req.url.indexOf('authentication') > -1
                                      ? next()
                                      : res.sendFile('index.html', { root: appPath }));

app.use('/authentication', indexRouter);

app.use((req, res, next) => next(createError(404)));

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});

module.exports = app;
