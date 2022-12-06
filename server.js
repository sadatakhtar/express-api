const express = require('express')
const dotenv = require('dotenv')

// NB: Load env variables
dotenv.config({ path: './config/config.env' })

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}, running in ${process.env.NODE_ENV} mode`)
})