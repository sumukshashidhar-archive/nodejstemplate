const bcrypt = require("bcrypt")

const saltRounds = parseInt(process.env.saltRounds);
module.exports = {

    hashPassword: async function(plaintext_password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(plaintext_password, saltRounds, function(err, hashedPassword) {
                if(err) {
                    console.error(err);
                    reject(err);
                }
                else {
                    console.debug("Hashed a password: ", hashedPassword)
                    resolve(hashedPassword);
                }
            })
        })
    },

    comparePassword: async function(hashedPassword, plaintext_password) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(plaintext_password, hashedPassword, function(err, result) {
                if(err) {
                    console.error(err);
                    reject(err);
                }
                else {
                    console.debug("Compared a hashed password.")
                    resolve(result);
                }
            })
        })
    }
}