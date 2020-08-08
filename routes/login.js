module.exports = function(app) {

    app.get('/login', function(req, res) {
        res.render('login')
    })


    app.post('/login', function(req, res) {
        console.log(req.body)
        // send to the login service, then get back the result. based on the result, render next page or something else
        
    })
}