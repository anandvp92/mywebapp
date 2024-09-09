var express = require('express');
var router = express.Router();
var createuser = require('../helpers/users_helper')

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
    createuser.doSignup(req.body).then(value=>{
        console.log(value)
        return res.render('signup',{username:value})
      }).catch(err=>{
        console.log(err)
        return res.render('signup',{errmsg:err})
 
      })
  
    

})

module.exports = router;
