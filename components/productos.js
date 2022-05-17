let {Producto, Product}  = require('../models/productos')
let prod = []

class Productos{
    constructor(id, name, image, description,price){

    }
    async getProductos(req,res,next){
        try {
            Product.find({},function(err,prods){
                let prodMap ={};
                prods.array.forEach(function(prod){
                    prodMap[prod._id]=prod;
                });
                res.send(prodMap)
            })
        } catch (error) {
            console.log(error)
        }

    }
    async agregarProducto(req,res,next){
        try {
            let prod = new Producto({
                name: req.body.name,
                image: req.body.image,
                description: req.body.description,
                price: req.body.price,
            })
            prod.save()
        } catch (error) {
            console.log(error)
        }

    }
    async actualziarProducto(req,res,next){
      try {
        Product.updateOne({ _id: req.body.id }, { $set: { title: req.body.title, imageURL: req.body.imageURL, price: req.body.price, description: req.body.description } })
           .then(result=>{
            res.redirect('/products/' + req.body.id);
           }) 
    
      } catch (error) {
          console.log(error)
      }
    }
    async eliminarProducto(req,res,next){
        try {
           let eliminarProd = prod.findIndex(p=>p.id == req.body.id)
           prod.splice(eliminarProd,1)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Productos()