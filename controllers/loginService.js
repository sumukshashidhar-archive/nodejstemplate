const cryp = require("./bcryptService")
const user = require("./../models/user")
module.exports = {

    login: async function(email, password) {
        return new Promise((resolve, reject) => {
            if(email && password) {
                // then run a mongo query for those users
                user.findOne({email:email}, async function(err, obj) {
                    if(err) {
                        console.error(err)
                        reject(err)
                    }
                    else {
                        // once the object has been found, check to make sure it actually exists
                        // and is not null
                        if (obj) {
                            // wait for the response from comparePassword, which compares the hashes
                            let response = await cryp.comparePassword(obj["password"], password);
                            if(response) {
                                resolve({"status":200, "user":{"email":obj["email"], "role":obj["role"]}})
                            }
                            else {
                                resolve({"status": 403})
                            }
                        }
                        else {
                            resolve({"status":404})
                        }
                    }
                })
            }
            else {
                resolve({"status":500})
            }
        })
    }
}