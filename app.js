var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');
var db=require('./config/connection');
var adminRouter = require('./routes/admin');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var all_usersRouter= require('./routes/all_users');
var contact_us_Router= require('./routes/contact_us');
var user_product = require('./routes/user_product');
var create_products = require('./routes/create_products');
var list_products= require('./routes/list_products');

var fileupload= require('express-fileupload');

var app = express();


app.set('view engine', 'hbs'); // This should come after app.engine setup

app.engine('hbs',hbs.engine({extname:'hbs',
  defaultLayout:'layout',
  layoutsDir:__dirname+'/views/layout/',
  partialsDir:__dirname+'/views/partials'

}));
app.set('views', path.join(__dirname, 'views'));



// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileupload());
// Route handlers
db.connect((err)=>{
  if (err)  console.log(err);
});

app.use('/', usersRouter);
app.use('/admin', adminRouter);
app.use('/admin/products', productRouter);
app.use('/admin/allusers',all_usersRouter);
app.use('/contact',contact_us_Router);
app.use('/products',user_product);
app.use('/admin/createproducts',create_products);
app.use('/admin/listproducts',list_products)


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
