const express = require('express');

var app = express();
var path = require('path');
var calc = require('./calculator.js')


//var gameEngine = require('./gameEngine.js')

app.set('port', process.env.PORT || 5000)
    .use(express.static("public"))
    .set('views', path.join(__dirname,"views"))
    .set("view engine", 'ejs')
    .get('/calculator', calc.calculator)
    .listen(app.get('port'), function() {
     console.log("Listening on port: " + app.get('port'));
});

