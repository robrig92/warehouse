const Product = require('../models/Product');

module.exports = {
    index: (req, res) => {
        res.send('hola desde index');
    },

    store: (req, res) => {
        let cocaCola = new Product({
            name: 'Coca-cola',
            price: 8.50,
            quantity: 10,
        });

        cocaCola.save((err, cocaCola) => {
            if (err) return console.error(err);
            console.log(`Stored ${cocaCola}`);
            res.send('Stored');
        });
    }
}