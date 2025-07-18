const express = require('express');
const app = express();

//middleware
const logger = require('./src/middlewares/logger')
const cors = require('cors')

app.use(express.json());
app.use(logger);
app.use(cors());

//routes
app.use('/api/auth', require('./src/routes/authRoute'));


module.exports = app;


