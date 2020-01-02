var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// string-format
const format = require('string-format');
format.extend(String.prototype, {});

// cors
let cors = require('cors');


// swagger require
const swaggerUi = require('swagger-ui-express');
var swaggerJSDoc = require('swagger-jsdoc');
let configSwagger = require('./config/swagger');

// session redis require
const session = require('express-session');
let configSession = require('./config/session');

//express
var app = express();


//cors
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(configSession.secret));
app.use(express.static(path.join(__dirname, 'public')));

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(configSwagger.swaggerOptions);

// session
app.use(session(configSession.options));

// ---------- router begin -----------

//router require
let indexRouter = require('./routes/index');
let userRouter = require('./routes/user');
let bookRouter = require('./routes/book');
let orderRouter = require('./routes/order');

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/book', bookRouter);
app.use('/order',orderRouter);

// serve swagger
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// router swagger
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//---------- router end -----------



module.exports = app;
