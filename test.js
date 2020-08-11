const cont = require("./controllers/bcryptService")


async function func1() {
    console.log(await cont.hashPassword("String 1"))
    console.log("Done")
}


func1()