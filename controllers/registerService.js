const user  = require("./../models/user")
const hashing = require("./bcryptService")
const conflict = require("./conflictCheckService")
module.exports = {
    makeUser: async function(email, password, role) {
        const madeUserPromise = new Promise(async (resolve, reject) => {
            const isExisting = await conflict.checkUser(email);
            if(isExisting) {
                const hashedPassword = await hashing.hashPassword(password);
                const newUser = new user({
                    email:email,
                    password:hashedPassword,
                    role:role
                })
                newUser.save(function(err, obj) {
                    if(err) {
                        console.error(err)
                        reject(err);
                    }
                    else {
                        console.debug(obj)
                        resolve(obj)
                    }
                })
            }

            else {
                resolve(false)
            }
        })
        return await madeUserPromise
    }
}