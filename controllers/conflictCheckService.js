const user = require("./../models/user")

module.exports = {

    checkUser: async function(email) {
        return new Promise((resolve, reject) => {
            user.findOne({email:email}, async function(err, obj) {
                if(err) {
                    console.error(err)
                    reject(err)
                }
                else {
                    if(obj) {
                        console.log(obj)
                        resolve(false);
                    }
                    else {
                        console.log(obj)
                        resolve(true);
                    }
                }
            })
        })
    }
}