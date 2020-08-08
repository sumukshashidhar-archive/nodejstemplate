module.exports = function(app) {

	app.get('/', function(req, res) {
		console.log("Hit the homepage"); 
		res.json({
			"status":200, 
			"message":"OK"
		})
	}), 
	app.get('/api/v1', function(req, res) {
		res.json({
			"status":200, 
			"message":"API ONLINE"
		})
	})
}