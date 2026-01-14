const express=require ("express");
const app=express();
const connectDB=require('./config/database');
const UserModel=require("./models/user")
// 🔥 MIDDLEWARE - CRITICAL for req.body
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

app.post("/signup/",async (req,res)=>{
   const reqJson=req.body;
const userObj={
    firstName:reqJson.firstName,

lastName:reqJson.lastName,
Age:reqJson.age,
emailID:"swatim",
gender:"F"
}

const user=new UserModel(userObj);
await user.save();
res.send("received data")
})
app.get("/profile",async(req,res)=>{
try{
console.log("PROFILE");
console.log("users here");
const users=await UserModel.find({});
    console.log(users);
    res.send(users)
}catch(err){

}
})
app.get("/user",async(req,res)=>{

   const requestEmailID=req.body.emailID;
   console.log(requestEmailID);
   
   const userEmail=await UserModel.findOne({emailID:requestEmailID});
   console.log(userEmail.emailID);
   
   if(userEmail.length===0){
      res.send("No data FOUND")
   }
else{
   res.send(userEmail)
}

})

app.patch("/update",async(req,res)=>{
   const requestBody=req.body;
   const id=requestBody._id;
   const user=await UserModel.findByIdAndUpdate({_id:id},requestBody)
res.send("updated successfully")
})
app.delete("/delete",async(req,res)=>{
    const requestBody=req.body;
   const id=requestBody._id;
   const userdeleted=await UserModel.findByIdAndDelete({_id:id},requestBody)
   console.log(userdeleted);
   
})
connectDB().then(()=>{
console.log("connection established");
app.listen(3000,()=>{
console.log("server running on:3000");

})

})
.catch((err)=>{
   console.log("err");
   

})








