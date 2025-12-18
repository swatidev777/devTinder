const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('incoming request');
  next(); // allow request to go to next route
});

app.get('/', (req, res,next) => {
   res.send('hi inside default routing');
//next();
});

app.get('/test', (req, res) => {
  res.send('hi inside test routing');
});

app.listen(3000, () => {
  console.log('app running on 3000');
});
