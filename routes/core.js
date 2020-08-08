module.exports = function(app) {

	app.get('/', async function(req, res) {
		console.debug("Hit the homepage");
		res.render('land')
	})

	app.get('/internalError', async function(req, res) {
		console.error("Hit the internal error page")
		res.render('internal-error')
	})
}