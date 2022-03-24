const  mongoose = require("mongoose")

const Configdb = async() => {
    try {
        await mongoose.connect(process.env.mongodb-uri)
        console.log('Mongodb is connected succesfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = Configdb