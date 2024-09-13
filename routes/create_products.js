var express = require('express');

var productHelper = require('../helpers/product_helpers');
var database = require('../config/connection');
var products= require('../config/collections');
const { ObjectId } = require('mongodb');
var router = express.Router();



router.get('/',(req,res,next)=>{
return res.render('admin/create_products',{title:"Create product" , admin:true});
});


router.post('/',(req,res)=>{
        productHelper.addProduct(req.body, async(callback)=>{
            try{
                const imagefile= await req.files.image;
                if (imagefile){
                    await imagefile.mv(`./public/product_images/${callback}.jpeg`);
                    const image_path = `./public/product_images/${callback}.jpeg`
                    await  database.get().collection(products.PRODUCT_COLLECTION).updateOne({_id:new ObjectId(callback)},{$set:{image_path:image_path}});
                }
            }
                catch{
                  imagefile = null

                }
            
       
        
        
    })
    return res.redirect('/admin/listproducts');
    });


module.exports=router;


