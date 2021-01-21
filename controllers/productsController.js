const { replaceOne } = require("../models/productsModel");
const productsModel = require("../models/productsModel")
module.exports = {
    getAll: async function(req, res, next) {
        try{
            const productos = await productsModel.find({});
            res.json(productos);
        }catch(e){
          next(e);
        }    
    
    },
    getById: async function(req, res, next) {
        
        try{
            const producto = await productsModel.findById(req. params. id);
            res.json(producto);
        }catch(e){
          next(e);
        }   
    },
    create: async function(req, res, next) {
        try{
            const producto = new productsModel({
                name:req.body.name,
                sku:req.body.sku,
                description:req.body.description,
                price:req.body.price,
            })
            const prod = await producto.save()
            res.json(prod);
        }catch(e){
          next(e);
        }     
    },
    update:function(req, res, next) {
        console.log(req.params.id)
        console.log(req.body)
        res.json(req.body);
    },
    delete: function(req, res, next) {
        console.log(req.params.id)
        const producto = {
            id:1,
            name:"moto g"
          }
        res.json(producto);
    }
}