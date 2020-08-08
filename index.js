// Imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");



// Getting ENV vars
require('dotenv').config()



// Initializations
const app = express();
app.use(express.static("styles"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


//routes file
require('./routes/basic')(app);
require('./routes/login')(app); // login
require('./routes/register')(app); // register
require('./routes/api/v1/test')(app); //testing api route

app.listen(process.env.PORT||8080, process.env.IP || "0.0.0.0", function (req, res) {
	console.info("Server Started")
})

mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true})
    .then(() => console.info("MongoDB Connected"))
  .catch(err => console.error(err));
