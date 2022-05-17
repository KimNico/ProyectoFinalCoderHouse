let {Carrito} = require("../models/carrito")
let {Product} = require("../models/productos")


class Carrito{

    async getAll(res,req,next){
        Product.find({},function(err,prods){
            let prodMap ={};
            prods.array.forEach(function(prod){
                prodMap[prod._id]=prod;
            });
            res.send(prodMap)
        })
    }

    async createCart(res,req,next){

    }
    async deleteCart(res,req,next){

    }
    async getProducts(res,req,next){

    }
    async addProduct(res,req,next){
        let prod = await Product.findById(req.body.id)
        if(prod){
            const cart = this.cart;
            const exist = cart.items
        }
    }
    async deleteProductCart(res,req,next){

    }

}







module.exports = new Carrito()