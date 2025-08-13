const express = require('express');
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/",function(req,res){
    res.render('Server');
});
app.get('/3sem',function(req,res){
    res.render("3sem");
});
app.get('/4sem',function(req,res){
    res.render("4sem");
});
app.get('/5sem',function(req,res){
    res.render("5sem");
});
app.get('/6sem',function(req,res){
    res.render("6sem");
});
app.get('/7sem',function(req,res){
    res.render("7sem");
});
app.get('/8sem',function(req,res){
    res.render("8sem");
});
app.get('/open',function(req,res){
    res.render("open");
});

app.listen(5000);
