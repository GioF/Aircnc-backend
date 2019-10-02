const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGOURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,  
})
.then(console.log("listening on port 3333"))
.catch(error=>console.log(process.env.MONGOURL, error));

app.use(express.json());
app.use(routes);

app.listen(3333);
