let mongoose = require("mongoose")
let Schema = mongoose.Schema

let productSchema =  new Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

exports.Product = mongoose.model('Product', productSchema) 