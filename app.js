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

connectDB().then(()=>{
console.log("connection established");
app.listen(3000,()=>{
console.log("server running on:3000");

})

})
.catch((err)=>{
   console.log("err");
   

})








