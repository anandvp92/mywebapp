const express = require('express');
const router = express.Router();
var Handlebars = require('handlebars');
const product_helpers = require('../helpers/product_helpers');

const product_data ={
    datas:null
}

router.get('/',(req,res,next)=>{
    product_helpers.list_Products().then(data=>{
        return res.render('admin/list_products',{admin:true,title:'Product List',product:data});
    }).catch(err=>{
        return res.render('admin/list_products',{admin:true,title:'Product List',err});        
    })


});

  

Handlebars.registerHelper("inc", value=> parseInt(value) + 1);

Handlebars.registerHelper('removepublic',(imagepath)=>{
    return imagepath.replace('./public','')
})


module.exports=router;



