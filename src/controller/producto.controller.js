const modelosProducto = require('../models/producto.model')

exports.consultar = async(req,res)=>{
    let listaProducto = await modeloProducto.find({});
    if(listaProducto){
        //res.json(listaProducto);
        res.render('pages/index', {listaProducto})
    }else{
        res.json({"error":"hubo un error"})
    }
}

exports.addProduct = async(req,res)=>{
    try{
        const productoIsRegistered = await dbProducto.findProducto({isbn:isbn});
        if(productoIsRegistered){
            return res.status(400).json({error:"El producto ya existe"});
        }
        const producto = await dbProducto.createProductoRecord(req.body);
        return res.status(200).json(mensaje:'Producto registrado con exito');
    }catch(error){
        console.log(error);
        return res.render('500', {error:error});
    }
}
