const mongoose=require('mongoose');
const userSchemas=mongoose.Schema({
    firstName:{
    type:String
},

lastName:{
    type:String
},
Age:{
    type:Number
},
emailID:{
    type:String
},
gender:{
    type:String
}
}

)
const UserModel=mongoose.model("users",userSchemas)
module.exports=UserModel

//OR

//module.exports=mongoose.model("user",userSchemas)