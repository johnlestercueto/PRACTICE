const express = require('express');
const app = express();

const authRoutes = require('./src/routes/authRoute');


//middleware
app.use(express.json());


//routes
app.use('/api/auth', authRoutes);


module.exports = app;


