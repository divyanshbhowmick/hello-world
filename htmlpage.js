var express = require("express")
var app= express();
var path= require('path');
var bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/styles',express.static(__dirname + '/assets'));
app.get('/',function(request,response){
    response.sendFile('index.html',{root: path.join(__dirname, './htmlfiles')});
});

app.post('/login',function(req,resp){
    var username=req.body.user;
    var password= req.body.password;
    console.log(username+' '+password)
    res.end("done");
});
app.listen(2000,function(req,resp){
    console.log("Hey started on 2000 port..");
    console.log(resp);
});