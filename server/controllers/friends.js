var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
var friendController = {};

module.exports = (function() {
   	return {
    		show: function(req, res) {
      		  Friend.find({}, function(err, results) {
         			  if(err) {
          			    console.log(err);
         			  } else {
          			    res.json(results);
         			  }
     			  })
    		},

    		add: function(req, res) {
    			  var friend = new Friend({name: req.body.name, age: req.body.age});
    			  friend.save(function(err) {
    		    	  if(err) {
    			          console.log('Something went wrong.');
                    res.redirect('/');
    			      } else { 
    			          console.log('Successfully added a friend: Name: '+req.body.name+', Age: '+req.body.age+'!');
                    res.redirect('/');
    			      }
  			    })
    		},

    		delete: function(req, res) {
    			  Friend.remove({_id: req.params.id}, function (err, friends){
    		    	  res.redirect('/');
   		  	  })
    		}
   	}
})();


