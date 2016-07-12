var express = require("express"),
http = require("http"),
bodyParser = require("body-parser"),
app = express(),
Countries = [];
Results = [];

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

http.createServer(app).listen(3000);
console.log("You don't know Africa, on port 3000");

var dataArr = require('./data.json'); 



app.get("/countries.json", function(req, res) {
    res.json(Countries);
}); 

app.post("/begin", function(req, res){
    Countries = [];
});

app.post("/countries", function (req, res) {
    var answerArray = req.body;
    var answerValues = Object.keys(answerArray).map(function(key){
      return answerArray[key];
    });
    answerValues.forEach(function(newCountry){
        var correctName = ""; 
        var adjust = function(){
            if (newCountry.tag == "CI"){
                if (newCountry.name.toLowerCase() === correctName || newCountry.name.toLowerCase() === otherName) {
                    newCountry.status = "Correct";
                } else newCountry.status = "Incorrect";
            } else {
                if (newCountry.name.toLowerCase() === correctName){
                    newCountry.status = "Correct";
                } else {
                newCountry.status = "Incorrect";
                } 
            }
        };
        for(var i = 0; i < dataArr.length; i++){
            if (newCountry.tag === dataArr[i].tag){
                if (newCountry.tag === "CI"){
                    correctName = dataArr[i].name;
                    var otherName = dataArr[i].name2;
                    adjust();
                } else {
                    correctName = dataArr[i].name;
                    adjust();
                }
            }
        }
        adjust();
        Countries.push(newCountry);
    });
});