const db = require("../config/connection");
const fs = require("fs");
var collections = require("../config/collections");
const { resolve } = require("path");
const { ObjectId } = require("mongodb");


module.exports = {
  addProduct: (product, callback) => {
    const database = db.get();
    database
      .collection(collections.PRODUCT_COLLECTION)
      .insertOne(product)
      .then((result) => {
        callback(result["insertedId"].toString());
      })
      .catch((err) => {
        console.error("Insert Error:", err);
        callback("Something went wrong");
      });
  },

  list_Products: () =>
    new Promise(async (resolve, reject) => {
      let products = await db
        .get()
        .collection(collections.PRODUCT_COLLECTION)
        .find()
        .toArray();
      if (products.length > 0) resolve(products);
      else reject("No Product's Found");
    }),

  delete_Product: (productid) => {
    return new Promise(async (resolve, reject) => {
      if (productid) {
        let result = await db
          .get()
          .collection(collections.PRODUCT_COLLECTION)
          .findOne({ _id: new ObjectId(productid) });
        await db
          .get()
          .collection(collections.PRODUCT_COLLECTION)
          .deleteOne({ _id: new ObjectId(productid) });
        let imagepath = result["image_path"];
        if (imagepath) {
          await fs.unlink(imagepath, (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("File deleted sucessfully");
            }
          });
        } else {
          console.log("File not found or file doesnot exist");
        }

        resolve("Product is deleted");
      } else {
        return reject("Some thing went wrong!");
      }
    });
  },
  editProduct: (productid) => {
    return new Promise((resolve, reject, next) => {
      if (!productid) {
        return reject("There is no product");
      }
      let product = db
        .get()
        .collection(collections.PRODUCT_COLLECTION)
        .findOne({ _id: new ObjectId(productid) });
      return resolve(product);
    });
  },

  updateproduct: (productdetails, productimage, productid) => {
    return new Promise(async (resolve, reject) => {
      try {
        let updated_image_path;

        // If a new product image is provided, move it and set the image path
        if (productimage) {
          await productimage.mv(`./public/product_images/${productid}.jpeg`);
          updated_image_path = `/product_images/${productid}.jpeg`;
        } else {
          // Fetch the current image path from the database
          const product = await db
            .get()
            .collection(collections.PRODUCT_COLLECTION)
            .findOne({ _id: new ObjectId(productid) });

          // Retain the old image path if no new image is uploaded
          updated_image_path = product.image_path;
          console.log("No new image provided, keeping the old image:", updated_image_path);
        }

        // Update the product details in the database
        const result = await db
          .get()
          .collection(collections.PRODUCT_COLLECTION)
          .updateOne(
            { _id: new ObjectId(productid) },
            {
              $set: {
                brandname: productdetails.brandname,
                category: productdetails.category,
                price: productdetails.price,
                image_path: updated_image_path,
              },
            }
          );

        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  },
};
