const express = require('express');
const app = express();
app.use(express.json()); // to read JSON body

// // fake database
// let users = [
//   { id: 1, name: 'Swati' },
//   { id: 2, name: 'Amit' }
// ];
// app.use('/test', (req, res) => {
//   res.send('hi inside test routing');
// });
// let user=
// app.post('/addCustomer',(req,res)=>{
// let newUser={
//   id:users.length+1,
//   name:req.body.name

// }
// users.push(newUser)
// res.send(users)
// })

// app.get('/getCustomer',(req,res)=>{
//   res.send(users)
// })

// app.patch('/updateCustomer/:id',(req,res)=>{
//   let user_id=req.params.id;
//   console.log(user_id)
// let user=users.find(u=>u.id==req.params.id);
// console.log(user);
 

// if(!user){
//   res.status(404).json({ message: 'User not found' })
// }
// user.name = req.body.name;
//   res.json(user);

// })
// app.delete('/updateCustomer/:id',(req,res)=>{
//   let user_id=req.params.id;
//   console.log(user_id)
// let user=users.find(u=>u.id==req.params.id);
// console.log(user);
 

// if(!user){
//   res.status(404).json({ message: 'User not found' })
// }
// user.name = req.body.name;
//   res.json(user);

// })




// app.use('/test/4', (req, res) => {
//   res.send('hi inside  4 test routing');
// });
// app.use('/hello', (req, res) => {
//   res.send('hello hello hello routing');
// });
// // app.use('/', (req, res) => {
// //   res.send('Default routing');
// // });


// // app.get('/', (req, res,next) => {
// //    res.send('hi inside default routing');
// // //next();
// // });

//routing
app.use('/',(req,res,next)=>{
  console.log('inside default routing');
//res.send('inside default routing');
next()
  

});

// app.use('/test',(req,res)=>{
//   console.log('inside /test routing');
//   res.send('inside /test routing')
  
  

// });
app.use('/test/25',(req,res)=>{
  console.log('inside /test/25 routing');
  res.send('inside /test 25 routing')
  

})

app.use('/test/24',(req,res)=>{
  console.log('inside /test/24 routing');
  res.send('inside /test/24 routing')
  

})

app.listen(3000, () => {
  console.log('app running on 3000');
});



