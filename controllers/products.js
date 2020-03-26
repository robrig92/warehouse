const Product = require('../models/Product');
const moment = require('moment');

module.exports = {
    index: (req, res, next) => {
        Product.find({active: true}, (err, products) => {
            if (err) return console.log(err);
            res.status(200).send({
                message: "found",
                data: {
                    products: products
                }
            });
        });
    },
    
    store: (req, res, next) => {
        console.log(req.body);
        const body = req.body;
        const product = new Product({
            name: body.name,
            quantity: body.quantity,
            price: body.price,
            color: body.color,
            description: body.description,
            measure_id: body.measure_id,
            created_by: body.created_by,
        });
        
        product.save((err, product) => {
            if (err) return console.error(err);
            
            res.status(201).send({
                message: "created",
                data: {
                    product: product
                }
            });
        });

    }
}