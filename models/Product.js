var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: Number,
    price: Number,
    color: String,
    description: String,
    measure_id: Number,
    ins: {
        type: Number,
        default: 0
    },
    outs: {
        type: Number,
        default: 0
    },
    last_in: Date,
    last_out: Date,
    last_in_price: Number,
    last_out_price: Number,
    active: {
        type: Boolean,
        default: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    deleted_at: Date
});

var Product = new mongoose.model('Product', ProductSchema);

module.exports = Product;