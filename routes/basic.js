module.exports = function(app) {

	app.get('/', async function(req, res) {
		console.log("Hit the homepage"); 
		res.json({
			"status":200, 
			"message":"OK"
		})
	})
}