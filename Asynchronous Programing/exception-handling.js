const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const data = require('./file.txt');
  res.send(data);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error!');
});

app.listen(3000,()=>{console.log("server is running on the port 3000")});
