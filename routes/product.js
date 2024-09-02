var express = require("express");
const product_helper = require('../helpers/product_helpers');
var router = express.Router();


router.get('/',(req,res,next)=>{
    product_helper.list_Products()
    .then((value) => {
        res.render('product', { title: "Product Page", value, admin: true });
    })
    .catch((err) => {
        res.render('product', { title: "Product Page", err, admin: true });
    });

});



module.exports = router;

module.exports.get= ()=> products;