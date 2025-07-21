const express = require('express');
const app = express();

//middleware

const cors = require('cors')
const morgan = require('morgan');
app.use(express.json());

app.use(cors());
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));

//routes
app.use('/api/auth', require('./src/routes/authRoute'));
app.use('/api/product', require('./src/routes/productRoute'))


module.exports = app;


