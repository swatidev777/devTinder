const express = require('express');
const app = express();
app.use('/test', (req, res) => {
  res.send('hi inside test routing');
});
app.use('/test/24', (req, res) => {
  res.send('hi inside 24 test routing');
});
app.use('/test/2', (req, res) => {
  res.send('hi test 2 routing');
});




app.use('/test/4', (req, res) => {
  res.send('hi inside  4 test routing');
});
app.use('/hello', (req, res) => {
  res.send('hello hello hello routing');
});
// app.use('/', (req, res) => {
//   res.send('Default routing');
// });


// app.get('/', (req, res,next) => {
//    res.send('hi inside default routing');
// //next();
// });

app.listen(3000, () => {
  console.log('app running on 3000');
});
