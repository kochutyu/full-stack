const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderScheme = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    order: {
        type: Number,
        required: true
    },
    list: [{
        name: {
            type: String
        },
        quantity: {
            type: Number
        },
        cost: {
            type: Number
        }
    }],
    user: {
        ref: 'users',
        type: Scheme.Types.ObjectId
    }
})

module.exports = mongoose.model('orders', orderScheme)