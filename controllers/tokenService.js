const jwt = require("jsonwebtoken")

// key imports
const publicKEY = fs.readFileSync("./../keys/public.key", "utf-8")
const privateKEY = fs.readFileSync("./../keys/private.key", "utf-8")

// options
const jENV = require("./../config/tokenOptions")

module.exports = {
    verification: function(token) {
        jwt.verify(token, publicKEY, jENV.verifyOptions, function(err, decodedToken) {
            if(err){
                console.error(err)
            }
            else {
                console.debug(decodedToken)
            }
        })
    },

    signing: function(email) {
        return jwt.sign({email:email}, privateKEY, jENV.signOptions);
    }
}