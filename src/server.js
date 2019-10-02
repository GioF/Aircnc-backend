const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

if(!CI){
  require('dotenv').config()
  let MONGOURL=proccess.env.MONGOURL
}

const app = express();

mongoose.connect(MONGOURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,  
})

app.use(express.json());
app.use(routes);

app.listen(3333);