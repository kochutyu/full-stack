const express = require('express');
const authRouters = require('./routers/auth');
const app = express();

app.use('/api/auth', authRouters);

module.exports = app;