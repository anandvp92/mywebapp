const express = require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{
    return res.render('cart',{title:'Cart'});
})

module.exports=router;