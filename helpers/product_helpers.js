const db = require('../config/connection');

var collections = require('../config/collections');
const { ObjectId } = require('mongodb');


module.exports = {
    addProduct: (product, callback) => {
        //console.log("Adding product:", product);
        const database = db.get();
        database.collection(collections.PRODUCT_COLLECTION).insertOne(product).then((result) => {
                //console.log("Insert Result:", result);
                callback(result['insertedId'].toString());
                //id(result.insertedId)
            })
            .catch((err) => {
                console.error("Insert Error:", err);
                callback("Something went wrong");
            });
    }

    ,

    list_Products: ()=> new Promise ( async (resolve,reject)=>{
        let products = await db.get().collection(collections.PRODUCT_COLLECTION).find().toArray();
        if (products.length>0) resolve(products);
        else  reject("No Product's Found");
    })  ,

     delete_Product:(productid)=>{
    return new Promise(async (resolve,reject)=>{
        if(productid){
            await db.get().collection(collections.PRODUCT_COLLECTION).deleteOne({_id: new ObjectId(productid)}).then(()=>{
            return resolve("Product Deleted");
            })
        }
      else{
       return  reject("Some thing went wrong!");
      }
})
}


}
