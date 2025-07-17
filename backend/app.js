const express = require('express');
const app = express();

//middleware
const logger = require('./src/middlewares/logger')

app.use(logger);
app.use(express.json());


//routes
app.use('/api/auth', require('./src/routes/authRoute'));


module.exports = app;


