var user = require("./models/user")
module.exports = {
    find: function(email) {

        /** 
        * Finds a user based on the supplied email id.
        * @param {String} email - Email Address / Username of the user
        * @return {JSON} JSON Object of the given user.
        */
        

        user.findOne({email: email}, function(err, obj) {
            if(err) {
                logger.error(err)
            }
            else {
                logger.info(obj)
            }
        })
    }, 
    registration: function(email, hashedPassword, role) {
        
        var newUser = new User({
            email: email, 
            password: password, 
            role: role
        })

        newUser.save(function(err, obj) {
            if(err) {
                logger.error(err)
            }
            else {
                logger.info(obj)
                return obj
            }
        })
    }
}