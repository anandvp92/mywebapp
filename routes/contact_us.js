var express = require('express');

var router = express.Router();


router.get('/',(req,res,next)=>{
    return res.render('contact_us',{title:"Contact Us"});
});

module.exports=router;

