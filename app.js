var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const mongoose = require('mongoose');
require('./models/bida');
require('./models/date');
require('./models/image');
require('./models/so');

var indexRouter = require('./routes/index');
var bidarouter = require('./routes/bida');
var daterouter  = require("./routes/date");
var imagerouter = require('./routes/image');
var soxorouter = require('./routes/so');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// render html
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//connect data
mongoose.connect('mongodb+srv://admin:312337@cluster0.6imd0f4.mongodb.net/MyFPT?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));
// cho nó đường link sử dụng
app.use('/', indexRouter);
app.use('/bida', bidarouter);
app.use('/date', daterouter)
app.use('/image', imagerouter);
app.use('/so', soxorouter);
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
  res.render('error.html');
});

module.exports = app;
