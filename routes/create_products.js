var express = require('express');

var productHelper = require('../helpers/product_helpers');

var router = express.Router();



router.get('/',(req,res,next)=>{
return res.render('admin/create_products',{title:"Create product" , admin:true});
});


router.post('/',(req,res)=>{
    productHelper.addProduct(req.body,(callback)=>{
        const imagefile=req.files.image;
        imagefile.mv(`./public/product_images/${callback}.jpeg`)

    })
    return res.redirect('/admin/listproducts');
    });


module.exports=router;


