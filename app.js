const express = require('express')
const app= express()
const path= require('path')
const ejs = require("ejs")
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Explicitly set views directory
app.use(express.static('public'))

app.get('/',(req,res)=>{
    // res.sendFile(Path.resolve(__dirname,'public/index.html')) 
    res.render('index'); 
})
app.get('/about',(req,res)=>{
    // res.sendFile(Path.resolve(__dirname,'public/about.html')) 
    res.render('about'); 
})
app.get('/contact',(req,res)=>{
    // res.sendFile(Path.resolve(__dirname,'public/contact.html')) 
    res.render('contact');
})
app.get('/post',(req,res)=>{
    // res.sendFile(Path.resolve(__dirname,'public/post.html'))  
    res.render('post');
})

app.listen(5027,()=>{
    console.log("App listening on port 5027" )
})


