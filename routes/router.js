const exp = require('express')
const router = exp.Router();
const controladorProductos = require('../src/controller/producto.controller')
const controladorVendedor = require('../src/controller/vendedor.controller')

router.get('/vendedores',controladorVendedor.registrar)
router.get('/productos',controladorVendedor.consultar)

//router.get('/productos',controladorProductos.consultar);


module.exports = router