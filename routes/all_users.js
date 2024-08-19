var express = require('express');

var router = express.Router();


router.get('/',(req,res,next)=>{
    return res.render("all_users",{admin:true});
});

module.exports=router;