require("dotenv").config(); 
const express = require('express')
const app = express()

const { initDbConnection } = require('./mongodb.js')

initDbConnection()

app.get('/', (req, res) => {
    res.send('Hello, it`s aws test')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Aws test app listening on port ${port}`)
})