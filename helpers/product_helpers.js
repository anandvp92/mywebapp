const db = require('../config/connection');

module.exports = {
    addProduct: (product, callback) => {
        console.log("Adding product:", product);

        const database = db.get();
        database.collection('product').insertOne(product)
            .then((result) => {
                console.log("Insert Result:", result);
                callback("Producted Added");
            })
            .catch((err) => {
                console.error("Insert Error:", err);
                callback("Something went wrong");
            });
    }
}
