var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    measure: {
        type: Number,
        required: true,
        type: mongoose.Types.ObjectId,
        ref: 'Mesaure'
    },
    ins: {
        type: Number,
        default: 0
    },
    outs: {
        type: Number,
        default: 0
    },
    last_in: {
        type: Date,
        default: null
    },
    last_out: {
        type: Date,
        default: null
    },
    last_in_price: {
        type: Number,
        default: null
    },
    last_out_price: {
        type: Number,
        default: null
    },
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
    deleted_at: {
        type: Date,
        default: null
    }
});

var Product = new mongoose.model('Product', ProductSchema);

module.exports = Product;