const mongoose = require('mongoose')

const initDbConnection = async () => {
    await mongoose.connect(process.env.MONGO_URL, {
            bufferCommands: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Mongodb connected successfully'))
        .catch(err => console.log(err))
}

module.exports = {
    initDbConnection
}