const express = require("express");
const app = express();
app.get("/",function(req,res){
  res.send("<h1>Hello, World!</h1>");
});
app.get("/contact",function(req,res){
  res.send("Contact me at vikassharma20015@gmail.com");
});
app.get("/about",function(req,res){
  res.send("<h3>Name:- Vikas Sharma<br>Parentage:-S/O Sh.Rajesh Kumar<br>Date-of-birth:- 4th of may, 2003<br>Gender:- Male<br>Country:-India</h3>")
});
app.get("/hobbie",function(req,res){
  res.send("My hobbie is exploring things.")
});
app.listen(process.env.PORT || 3000,function(){
  console.log("THE SERVER STARTED ON THE PORT 3000");
});
