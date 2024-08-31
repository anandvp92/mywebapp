const express = require('express');
const router = express.Router();
var Handlebars = require('handlebars');
let ts = require('../routes/product');
const product_helpers = require('../helpers/product_helpers');

const product_data ={
    datas:null
}

router.get('/',(req,res,next)=>{

    product_helpers.list_Products().then(data=>{
        //console.log(data)
    return res.render('admin/list_products',{admin:true,title:'Product List',product:data});
     
    }).catch(err=>{
        console.log(err);
    })
//return res.render('admin/list_products',{admin:true,title:'Product List',product:ts.get()});
});

module.exports=router;

Handlebars.registerHelper("inc", value=> parseInt(value) + 1);