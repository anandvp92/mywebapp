var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',(req, res, next)=> {
 return res.render('users',{title:'User page'});
});

router.get('/login',(req,res,next)=>{
    return res.render('login',{title:"Login"});
})

router.get('/signup',(req,res,next)=>{
    return res.render('signup',{title:"Sign in"});
})


router.post('/login',(req,res,next)=>{
    console.log(req.body['email']);
    return res.render('login',{})
})

router.post('/signup',(req,res,next)=>{
    let username=req.body['email']
    return res.render('user_product',{username})
})

module.exports = router;
