const Producto = require('../models/producto.model.js');

exports.createProductoRecord = async (ProductoInfo) => {
    try {
        return  new Producto(ProductoInfo).save();
    } catch (error) {
        return error;
    }
}

exports.findProducto = async (filter,projection)=>{
    try {
        if(!projection) return await Producto.findOne (filter);     
        else return await Producto.findOne (filter, projection);
    } catch (error) {
        return error;
    }
}
