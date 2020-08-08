module.exports = {
    verification: function(token) {
        jwt.verify(token, publicKEY, options, function(err, decodedToken) {
            if(err){
                logger.error(err)
            }
            else {
                logger.info(decodedToken)
            }
        })
    }
}