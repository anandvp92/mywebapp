var express = require('express');

var productHelper = require('../helpers/product_helpers');

var router = express.Router();



router.get('/',(req,res,next)=>{
return res.render('admin/create_products',{title:"Create product" , admin:true});
});


router.post('/',(req,res)=>{
    return res.send('Sumitted');
    productHelper.addProduct(req.body);
    });


module.exports=router;


