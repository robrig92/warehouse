const Product = require('../models/Product');
const moment = require('moment');

const index = (req, res, next) => {
    Product.find({ active: true }, (err, products) => {
        if (err) {
            return res.status(500)
                .json({
                    err
                });
        };

        res.status(200).json({
            message: "found",
            data: {
                products
            }
        });
    });
}

const store = (req, res, next) => {
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
        if (err) {
            return res.status(500).json({
                err
            });
        }

        res.status(201).json({
            message: "created",
            data: {
                product
            }
        });
    });
}

const show = (req, res, next) => {
    let id = req.params.id;

    Product.findById
}

module.exports = {
    index,
    store
}