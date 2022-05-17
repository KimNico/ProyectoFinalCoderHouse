let mongoose =require("mongoose");

let carritoSchema = mongoose.Schema({
    carrito:{
        type: Array,
        required:true
    }

})

exports.Cart = mongoose.model('Cart', carritoSchema);