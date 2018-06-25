/**
 * Created by.
 */
'use strict';
let express = require("express"),
    path = require("path"),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    app = express(),
    config = require('./config/dev'),
    healthController = require('./src/controller/healthController');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-type,Accept,X-Access-Token,X-Key');
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/healthReport', healthController.generateReport);
app.set('views', path.join(__dirname, '../build'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../build")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.render('index');
    next();
});


app.set('port', config.port || 3000);
app.listen(app.get('port'), function () {
    console.log("Started listening on port", app.get('port'));
});