//create web server
//1. create server
//2. create router
//3. set router
//4. start server

//1. create server
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var path = require('path');
var bodyParser = require('body-parser');
var comment = require('./comment');

//2. create router
var router = require('./router/main')(app, comment);

//3. set router
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile); //html template engine

//4. start server
server.listen(3000, function(){
    console.log('Express server has started on port 3000');
});

//5. set static file
app.use(express.static('public'));

//6. use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//7. use session
var session = require('express-session');
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}));