const express = require('express');


const router = express.Router();

router.get('/',(req,res,next)=>{
    return res.render('orders',{title:"Cart Page"})
})

module.exports=router;