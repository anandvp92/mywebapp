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
 
    return res.render('admin/updateproduct',{product:value,admin:true,productimage:value.image_path.replace('./public','').toString()});
  }).catch(err=>{
    console.log(err)
  })

})

router.post('/editproduct/:id', async (req, res, next) => {
  try {
      // Check if the image file is uploaded
      const hasImage = req.files && req.files.image;

      // Call the updateproduct function with the necessary parameters
     await productHelper.updateproduct(req.body, hasImage ? req.files.image : null, req.params.id).then(()=>{
       return res.redirect('/admin/listproducts');
     }).catch(err=>{
      throw new Error("Some thing went wrong")
     })

  } catch (error) {
      console.error("Error during product update:", error);
      next(error);  // Pass the error to an error-handling middleware, if any
  }
});

module.exports = router;
