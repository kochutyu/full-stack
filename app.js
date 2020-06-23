const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const config = require('./config/keys')

const app = express()

mongoose.connect(config.mongo_URL)
    .then((result) => {
        console.log('Mongo DB connected!');
    }).catch((err) => {
        console.log(err);
    });

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)


module.exports = app