const express = require('express');   //when backend`s server is done I delete this file
const cors = require('cors')          //It`s only for check Log in
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));