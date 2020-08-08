const cryp = require("./bcryptService")
const user = require("./../models/user")
module.exports = {

    login: async function(email, password) {
        // first check if both have been passed
        if(email && password) {
            // then run a mongo query for those users
            user.findOne({email:email}, async function(err, obj) {
                if(err) {
                    console.error(err)
                }
                else {
                    // once the object has been found, check to make sure it actually exists
                    // and is not null
                    if (obj) {
                        // wait for the response from comparePassword, which compares the hashes
                        let response = await cryp.comparePassword(obj["password"], password);
                        if(response) {
                            return {"response":200, "user":{"email":obj["email"], "role":obj["role"]}}
                        }
                        else {
                            return {"response": 403}
                        }
                    }
                    else {
                        return {"response":404}
                    }
                }
            })
        }
        return {"response":500}
    }
}