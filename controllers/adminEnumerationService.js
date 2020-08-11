const user = require("./../models/user")

module.exports = {

    enumUsers: async function() {
        return new Promise((res, rej) => {
            user.find({}, async function(err, obj) {
                if(err) {
                    console.error(err)
                    rej(err)
                }
                else {
                    console.info("Got all users successfully")
                    res({"status":200, "obj":obj})
                }
            })
        })
    }
}