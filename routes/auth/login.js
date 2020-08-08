const loginController = require("../../controllers/loginService")

module.exports = function(app) {

    app.get('/login', function(req, res) {
        res.render('auth/login')
    })


    app.post('/login', async function(req, res) {
        console.log(req.body)
        // send to the login service, then get back the result. based on the result, render next page or something else
        let response = await loginController.login(req.body.email, req.body.password)
        if(response["status"] === 200) {
            //this means that all validation was successful
            // have to figure out the JWT after this
            console.info("User: ", response["user"].email, " has logged in")
        }
        else if(response["status"] === 403) {
            //user exists, but wrong password
        }
        else if(response["status"] === 404) {
            // user not found
        }
        else {
            res.redirect('/internalError')
        }
    })
}