var express = require('express');
var router = express.Router();
var productHelper= require('../helpers/product_helpers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Admin Page',admin:true });
});

router.get('/deleteproduct/:id', async(req, res, next) => {
  let product_id = await req.params.id 
  await productHelper.delete_Product(product_id).then((value)=>{
    return res.redirect('/admin/listproducts');
  }).catch(err=>{
    console.log(err)
    return res.redirect('/admin/listproducts');
  })

}); 


router.get('/editproduct/:id',async(req,res,next)=>{
  await productHelper.editProduct(req.params.id).then(value=>{
    console.log(value.image_path.replace('./public',''))
    return res.render('admin/updateproduct',{product:value,admin:true,productimage:value.image_path.replace('./public','')});
  }).catch(err=>{
    console.log(err)
  })

})

module.exports = router;
