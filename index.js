const express = require('express');
const app=express();
const fs = require('fs');
const path = require('path');
const members = require('./public/members');

// app.get('/',(req,res)=>res.send("<h1>Hello F1</h1>"))

// app.get('/',(req,res)=>{fs.readFile('./first.html',"utf-8",(err,data)=>err?console.error(err):console.log(data))})

// app.use(express.static(path.join('./public')))
 


//get all the user
// app.get('/',(req,res)=>{res.send(members)})
//create a middleware
const message=(req,res,next) => {
    console.log("Iam the middleware");
    next()
}
// get user by id 
app.get('/:id',message,(req,res)=>{res.send(members.filter(user=>user.id===Number(req.params.id)))})

const PORT=process.env.PORT ||5000;
app.listen(PORT,(err)=>err?console.error(err):console.log(`server is running on PORT ${PORT}`))