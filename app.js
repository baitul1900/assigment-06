const express = require('express');
const app = express();
const router = require('./src/routers/api');

app.use('/api' , router);







module.exports = app; 