const Product = require('../models/Product');

const index = (req, res, next) => {
    let limit = req.query.limit || 10;
    let offset = req.query.page || 0;
    let condition = { active: true };

    limit = Number(limit);
    offset = Number(offset);

    Product.find(condition)
        .skip(offset)
        .limit(limit)
        .exec((err, products) => {
            if (err) {
                return res.status(500)
                    .json({
                        err
                    });
            };

            Product.count(condition, (err, count) => {
                if (err) {
                    return res.status(500)
                        .json({
                            err
                        });
                };

                res.status(200).json({
                    message: "found",
                    data: {
                        count,
                        products
                    }
                });
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
        measure: body.measure,
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

    Product.findById(id, (err, product) => {
        if (err) {
            return res.status(500)
                .json({
                    err
                });
        }

        if (!product) {
            return res.status(404)
                .json({
                    message: 'Resource not found'
                });
        }

        res.json({
            message: 'Resource found',
            data: {
                product
            }
        });
    });
}

const update = (req, res, next) => {
    let id = req.params.id;
    let body = req.body;
    let args = {
        name: body.name,
        price: body.price,
        color: body.color,
        description: body.description,
        measure: body.measure,
        updated_at: Date.now()
    };

    Product.findByIdAndUpdate(id, args, { new: true, runValidators: true }, (err, product) => {
        if (err) {
            return res.status(500)
                .json({
                    err
                });
        }

        if (!product) {
            return res.status(404)
                .json({
                    message: 'Resource not found'
                });
        }

        return res.json({
            message: 'Updated',
            data: {
                product
            }
        });
    });
}

const destroy = (req, res, next) => {
    let id = req.params.id;

    Product.findByIdAndUpdate(id, { active: false }, { new: true }, (err, product) => {
        if (err) {
            return res.status(500)
                .json({
                    err
                });
        }

        if (!product) {
            return res.status(404)
                .json({
                    message: 'Resource not found'
                });
        }

        res.json({
            message: 'Deleted',
            data: {
                product
            }
        })
    });
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}