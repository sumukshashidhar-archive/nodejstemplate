const registration = require("./../../controllers/registerService")

module.exports = function(app) {

    app.get('/register', function(req, res) {
        res.render('auth/register')
    })


    app.post('/register', async function(req, res) {
        const response = await registration.makeUser(req.body.email, req.body.password, req.body.role);
        if(response){
            res.render('success/registration')
            console.info("Created the user")
        }
        else{
            res.render('failure/registration', {message:"User already exists"})
        }
        console.log(req.body)
    })
}