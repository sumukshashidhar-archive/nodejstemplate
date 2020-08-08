const bcrypt = require("bcrypt")

const saltRounds = parseInt(process.env.saltRounds);
module.exports = {


    hashPassword: async function(plaintext_password) {
        const bcryptPromise = new Promise(function (res, rej) {
            bcrypt.hash(plaintext_password, saltRounds, function(err, hashedPassword) {
                if(err) {
                    console.error(err);
                }
                else {
                    console.debug("Hashed a password: ", hashedPassword)
                    res(hashedPassword)
                }
            })
        });

        return await bcryptPromise;
    },

    comparePassword: async function(hashedPassword, plaintext_password) {
        const bcryptPromise = new Promise(function(res, rej) {
            bcrypt.compare(plaintext_password, hashedPassword, function(err, result) {
                if(err) {
                    console.error(err);
                }
                else {
                    console.debug("Compared a hashed password.")
                    res(result)
                }
            })
        });

        return await bcryptPromise;
    }
}