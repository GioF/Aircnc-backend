const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const routes = require('./routes');

if(process.env.CI){
  let MONGOURL=process.env.MONGOURL
}

const app = express();

mongoose.connect(MONGOURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,  
})

app.use(express.json());
app.use(routes);

app.listen(3333);
