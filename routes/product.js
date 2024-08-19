var express = require("express");

var router = express.Router();


const products = [
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000, pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/e/a/-original-imahfk4xuk7ntphs.jpeg?q=80"},
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000,
         pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70"},
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000, pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"},
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000, pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"},
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000, pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"},
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000, pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"},
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000, pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"},
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000, pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"},
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000, pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"},
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000, pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"},
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000, pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"},
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000, pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"},
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000, pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"},
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000, pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"},
    {name:"nokia",brand:"nokia",catogoray:"phone" ,price:35000, pic:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"},
]

router.get('/',(req,res,next)=>{
res.render('product',{title:"Product Page",products,user:true});
});


module.exports = router;