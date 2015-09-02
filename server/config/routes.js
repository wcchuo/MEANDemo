var friends = require('../controllers/friends.js');

module.exports = function(app) {

	app.get('/friends', function (req, res) {
	    friends.show(req, res);
	})

	app.post('/add_friend', function (req, res) {
		friends.add(req, res);
	})

	app.get('/:id/delete', function (req, res){
		friends.delete(req, res);
	})

};



