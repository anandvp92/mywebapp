var express = require('express');

var productHelper = require('../helpers/product_helpers');

var router = express.Router();



router.get('/',(req,res,next)=>{
return res.render('admin/create_products',{title:"Create product" , admin:true});
});


router.post('/',(req,res)=>{
    productHelper.addProduct(req.body,callback=>console.log(callback))

    return res.redirect('/admin/listproducts');
    });


module.exports=router;


