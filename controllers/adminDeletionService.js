const user = require("./../models/user")

module.exports = {

    dropUsers: async function() {
        return new Promise((res, rej) => {
            user.deleteMany({}, async function(err, obj) {
                if(err) {
                    console.error(err)
                    rej(err)
                }
                else {
                    console.info("Dropped all users successfully")
                    res(true)
                }
            })
        })
    }
}