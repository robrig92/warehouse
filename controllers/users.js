
module.exports = {
    index: (req, res) => {
        res.send('Hello from users index');
    },

    store: (req, res) => {
        res.send('Something has been mock stored!');
    }
};