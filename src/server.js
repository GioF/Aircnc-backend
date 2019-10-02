const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const routes = require('./routes');

const app = express();

console.log(process.env.MONGOURL);

mongoose.connect(toString(process.env.MONGOURL),{
  useNewUrlParser: true,
  useUnifiedTopology: true,  
})

app.use(express.json());
app.use(routes);

app.listen(3333);
