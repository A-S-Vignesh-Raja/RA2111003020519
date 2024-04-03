const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/calculator");
});
app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=(num1+num2)/2;
    res.send("The Average of two numbers is "+result);
});

app.listen(3000,function(){
    console.log("Server started successfully");
});
