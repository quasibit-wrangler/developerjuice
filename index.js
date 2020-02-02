const express = require('express')
const path = require('path')
const port = process.env.PORT;



var app = express();




app.use(express.static(path.join(__dirname, '/apps/homepage')));

app.listen(port,function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log("app is listening on PORT",port);
})
