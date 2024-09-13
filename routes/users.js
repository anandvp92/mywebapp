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
    createuser.doLogin(req.body).then((value)=>{
        if(value.stat){
            return res.redirect('/admin/listproducts');
        }
        else{
            console.log(value.stat)
            console.log(value.msg[0])
            return res.render('login',{msg:"password is wrong"});
        }
    }).catch((err)=>{
        return res.send('Logging failed')    
    })
})

router.post('/signup',(req,res,next)=>{
    createuser.doSignup(req.body).then(value=>{
        return res.render('signup',{username:value})
      }).catch(err=>{
        console.log(err)
        return res.render('signup',{errmsg:err})
 
      })
  
    

})

module.exports = router;
