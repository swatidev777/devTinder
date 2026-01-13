const express = require('express');
const app = express();
app.use(express.json()); // to read JSON body

// fake database
let users = [
  { id: 1, name: 'Swati' },
  { id: 2, name: 'Amit' }
];
app.use('/test', (req, res) => {
  res.send('hi inside test routing');
});
let user=
app.post('/addCustomer',(req,res)=>{
let newUser={
  
  id:users.length+1,
  name:req.body.name


}
users.push(newUser)
res.send(users)
})

app.get('/getCustomer',(req,res)=>{
  res.send(users)
})

app.patch('/updateCustomer/:id',(req,res)=>{
  let user_id=req.params.id;
  console.log(user_id)
let user=users.find(u=>u.id==req.params.id);

console.log(user);
 

if(!user){
  res.status(404).json({ message: 'User not found' })
}
user.name = req.body.name;
  res.json(user);

})
app.delete('/deleteCustomer/:id', (req, res) => {
  let user_id = req.params.id;
  console.log(user_id);

  let user = users.filter(u => u.id != user_id);

  if (user.length === users.length) {
    return res.status(404).json({ message: 'User not found' });
  }

  users = user; // actually delete
  res.send({ message: 'User deleted', users });
});








app.listen(3000, () => {
  console.log('app running on 3000');
});



