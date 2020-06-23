const mongoose = require('mongoose')
const Schema = mongoose.Schema

const positionScheme = new Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    category: {
        ref: 'categories',
        type: Scheme.Types.ObjectId
    },
    name: {
        ref: 'users',
        type: Scheme.Types.ObjectId
    }
})

module.exports = mongoose.model('positions', positionScheme)