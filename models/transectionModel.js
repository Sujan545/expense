const mongoose = require('mongoose')
const transectionSchema = new mongoose.Schema({
    userid:{
type:String,
required:false
    },
    amount: {
        type: Number,
        required: [true, 'amount is required']
    },
    type: {
        type: String,
        required: [false, "type is required"]
    },
    category: {
        type: String,
        required: [false, "catgory is equire"]
    },
    reference: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'desc is required']
    },
    date: {
        type: String,
        required: [false, 'date is required']
    }
}, { timestamps: true })
const transectionModel = mongoose.model('transections', transectionSchema)
module.exports = transectionModel