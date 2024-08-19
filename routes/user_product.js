var express = require('express');

var router = express.Router();


router.get('/',(req,res,next)=>{
    return res.render('user_product',{title:'Products'});
});


module.exports= router;


