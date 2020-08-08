// Imports
var express = require("express"); 
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
const winston = require('winston');


// Getting ENV vars
require('dotenv').config()



// Initializations
var app = express();
app.use(express.static("styles"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


//creating the logger
const logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.json()
	),
	transports: [
	  new winston.transports.Console(),
	  new winston.transports.File({ filename: 'combined.log'})
	], 
	level:"info"
  });


//routes file
require('./routes')(app);
require('./routes/login')(app); //login
require('./routes/register')(app);

app.listen(process.env.PORT||8080, process.env.IP || "0.0.0.0", function (req, res) {
	logger.info("Server Started.")
})

mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true})
    .then(() => logger.info('MongoDB Connected...'))
  .catch(err => logger.error(err));
