var express = require('express');

var router = express.Router();


router.get('/',(req,res,next)=>{
return render('create_product',{title:"Create Product"});
})

module.exports=router;