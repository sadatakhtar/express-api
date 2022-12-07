const express = require("express");
const dotenv = require("dotenv");
const colors = require('colors')
const logger = require("./middleware/logger");
const connectDB = require('./config/db')
const bodyParser = require('body-parser')



// NB: Load env variables
dotenv.config({ path: "./config/config.env" });

// Connect to DB
connectDB();

// Route files
const bootcamps = require("./routes/bootcamps");

const app = express();

// bodyparser
app.use(express.json())

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);
app.use(logger);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Server listening on port ${port}, running in ${process.env.NODE_ENV} mode`.italic.yellow.bold
  );

});

// // Handle unhandled promise rejections
// process.on('UnhandledRejection', (err, promise) => {
//     console.log(`Error: ${err.message}`)
//     server.close(() => {
//         process.exit(1)
//     })
// })
