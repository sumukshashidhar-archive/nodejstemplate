module.exports = function(app) {

    app.get('/login', function(req, res) {
        res.render('login')
    })


    app.post('/login', function(req, res) {
        console.log(req.body)
    })
}