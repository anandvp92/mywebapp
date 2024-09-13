const bcrypt = require('bcrypt');
var db = require('../config/connection')
var collection = require('../config/collections');
const collections = require('../config/collections');


module.exports={
    doSignup:(userData)=>{
        return new Promise(
            async(resolve,reject)=>{
                if(userData['password']){
                    userData['password']= await bcrypt.hash(userData['password'],10)
                    await db.get().collection(collection.User_Collection).insertOne(userData)
                    return resolve(userData.email)
               }
               else{
                return reject("Password should not be empty or null")
               }
           
        })
    },
    doLogin:(userdata,callback)=>{
       let email_msg="email is wrong"
       let password_msg="Password is wrong"
        return new Promise(async(resolve,reject)=>{
            if(userdata.password && userdata.email){
             const response = await db.get().collection(collections.User_Collection).findOne({email:userdata.email});
             if(response){
              await  bcrypt.compare(userdata.password,response.password).then(status=>{
                    if(status){
                        console.log("Login sucess")
                        return resolve({stat:true})
                    }
                    else{
                        console.log("Login failed")
                        return resolve({stat:false})
                    }
               
                })
             }
            else{
                return resolve({stat:false,msg:email_msg})
             }
             
            }
            else{
                return resolve({stat:false,msg:[email_msg,password_msg]})
            }
        })
    }
}