const user = require("./../models/user")

module.exports = {

    checkUser: async function(email) {
        const checkUserPromise = new Promise(function(res, rej) {
            user.findOne({email:email}, async function(err, obj) {
                if(err) {
                    console.error(err)
                }
                else {
                    if(obj) {
                        console.log(obj)
                        res(false);
                    }
                    else {
                        console.log(obj)
                        res(true);
                    }
                }
            })
        })
        let returnValue = await checkUserPromise;
        return returnValue;

    }
}