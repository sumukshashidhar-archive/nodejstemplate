module.exports = function(app) {

	app.get('/api/v1', function(req, res) {
		res.json({
			"status":200, 
			"message":"API ONLINE"
		})
	})
}