const bcrypt = require('bcrypt');
var db = require('../config/connection')
var collection = require('../config/collections')


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
    }
}