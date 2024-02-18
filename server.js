import express from "express";
const app=express();

const port=8080;

// IMP NOTE If we want to access the localhost server from outside files we ne to write some important lines of code
//views directory .join joins to paths

    // const path=require("path")
    // app.set("views",path.join(__dirname,"/views"))

// Using EJS 
// View engines:- in EJS_basics

app.set("view engine","ejs");

// In case of EJS insted of res.send we use res.render and render a .ejs file
// when we make a call res.render, express() automatically searches in views directory for home.ejs

app.get("/",(req,res)=>{
res.render("home.ejs")
})

// app.get("/rolldice",(req,res)=>{
//     res.render("rolldice.ejs")
// })

//if we get data from database the we will fetch it and then send to ejs file .this can be done as
//modifying above code 

app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal})
})

//creating Instagram EJS

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const follower=["dhuruv","gaurav","saurav","farru"]
    res.render("instagram.ejs",{username,follower})
})


app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`);
})
