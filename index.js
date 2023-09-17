const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello, it`s aws test')
})

app.listen(port, () => {
    console.log(`Aws test app listening on port ${port}`)
})