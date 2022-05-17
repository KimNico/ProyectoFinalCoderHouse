let express = require('express')
let carritoController = require('../components/carrito')

let router = express.Router();

router.get('/:id/productos',carritoController.getProducts)
router.post('/',carritoController.createCart)
router.post('/:id/productos',carritoController.addProduct)
router.delete('/:id',carritoController.deleteCart)
router.delete('/:id/productos/:id_prod',carritoController.deleteProductCart)

module.exports = router;