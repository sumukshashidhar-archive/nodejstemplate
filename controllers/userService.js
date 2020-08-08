var user = require("./models/user")
module.exports = {
    find: function(email) {
        user.findOne({email: email}, function(err, obj) {
            if(err) {
                logger.error(err)
            }
            else {
                logger.info(obj)
            }
        })
    }
}