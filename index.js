// Imports
var express = require("express"); 
var mongoose = require("mongoose")
var bodyParser = require("body-parser")

//env vars
require('dotenv').config()



// Initializations
var app = express();
app.use(express.static("styles"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

//routes file
require('./routes')(app);


app.listen(process.env.PORT||8080, process.env.IP || "0.0.0.0", function (req, res) {
	console.log("Server Started.");
})

mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true}) //Changed this line to link to a database file instead of having everything in one file to provide quick and easy access for further work
    .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/', function(req, res) {
	console.log("Hit the homepage"); 
	res.json({
		"status":200, 
		"message":"OK"
	})
})