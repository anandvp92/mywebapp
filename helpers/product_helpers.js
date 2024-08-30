const db = require('../config/connection');

var collections = require('../config/collections');

module.exports = {
    addProduct: (product, callback) => {
        console.log("Adding product:", product);

        const database = db.get();
        database.collection(collections.PRODUCT_COLLECTION).insertOne(product)
            .then((result) => {
                console.log("Insert Result:", result);
                callback("Producted Added");
            })
            .catch((err) => {
                console.error("Insert Error:", err);
                callback("Something went wrong");
            });
    }

    ,

    list_Products: ()=> new Promise ( async (resolve,reject)=>{
        let products = await db.get().collection(collections.PRODUCT_COLLECTION).find().toArray();
        if (products)  resolve(products);
        else reject("Something went wrong");
    })  
}
