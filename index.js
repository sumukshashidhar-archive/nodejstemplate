// Imports
var express = require("express"); 
var mongoose = require("mongoose")

// importing constants
var ENV = require("./config/ENV_VARS.js")



// Initializations
var app = express();


//routes file
require('./routes')(app);


app.listen(ENV.PORT||8080, ENV.IP || "0.0.0.0", function (req, res) {
	console.log("Server Started.");
})



app.get('/', function(req, res) {
	console.log("Hit the homepage"); 
	res.json({
		"status":200, 
		"message":"OK"
	})
})