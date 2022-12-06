const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamps = require('./routes/bootcamps');

// NB: Load env variables
dotenv.config({ path: './config/config.env' });

const app = express()

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);


const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log(`Server listening on port ${port}, running in ${process.env.NODE_ENV} mode`)
});