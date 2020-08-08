module.exports  = {
    issuer: "Template",
    signOptions: {
        issuer:  "Template",
        expiresIn:  "24h",
        algorithm:  "RS512"
    },
    verifyOptions: {
        issuer:  "Template",
        expiresIn:  "24h",
        algorithm:  ["RS512"]
       }
}