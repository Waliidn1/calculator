const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function(req, res){

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);

    var result = n1 + n2;

    res.send("the result is " + result);
})

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(2020, function(){
    console.log("server is running in port 2020");
});