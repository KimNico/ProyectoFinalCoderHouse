let express = require('express')
let prodController = require('../components/productos')

let router = express.Router()

router.get('/:id', prodController.getProductos);
router.post('/',prodController.agregarProducto);
router.put('/:id',prodController.actualziarProducto);
router.delete('/id',prodController.eliminarProducto)

module.exports = router;