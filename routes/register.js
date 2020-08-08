module.exports = function(app) {

    app.get('/register', function(req, res) {
        res.render('register')
    })


    app.post('/register', function(req, res) {
        console.log(req.body)
    })
}