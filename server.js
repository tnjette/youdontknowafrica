var express = require("express"),
http = require("http"),
bodyParser = require("body-parser"),
app = express(),
Countries = [];
Results = [];

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.urlencoded({extended: true}));    //I don't think this is necessary since the content does not have to be parsed in the first place.
app.use(bodyParser.json());

http.createServer(app).listen(3000);
console.log("You don't know Africa, on port 3000");

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
            if (newCountry.name.toLowerCase() === correctName){
                newCountry.status = "Correct";
            } else {
                newCountry.status = "Incorrect";
            } 
        };

        //new if statement refactored with a modular adjust function
        if (newCountry.tag === "BF") {
            correctName = "burkina faso";
        } else if (newCountry.tag === "DJ"){
            correctName = "djibouti";
        } else if (newCountry.tag === "BI"){
            correctName = "burundi";
        } else if (newCountry.tag === "BJ"){
            correctName = "benin";
        } else if (newCountry.tag === "ZA"){
            correctName = "south africa";
        } else if (newCountry.tag === "BW"){
            correctName = "botswana";
        } else if (newCountry.tag === "DZ"){
            correctName = "algeria";
        } else if (newCountry.tag === "ET"){
            correctName = "ethiopia";
        } else if (newCountry.tag === "RW"){
            correctName = "rwanda";
        } else if (newCountry.tag === "TZ"){
            correctName = "tanzania";
        } else if (newCountry.tag === "GQ"){
            correctName = "equatorial guinea";
        } else if (newCountry.tag === "NA"){
            correctName = "namibia";
        } else if (newCountry.tag === "NE"){
            correctName = 'niger';
        } else if (newCountry.tag === "NG"){
            correctName = "nigeria";
        } else if (newCountry.tag === "TN"){
            correctName = "tunisia";
        } else if (newCountry.tag === "LR"){
            correctName = "liberia";
        } else if (newCountry.tag === "LS"){
            correctName = "lesotho";
        } else if (newCountry.tag === "ZW"){
            correctName = "zimbabwe";
        } else if (newCountry.tag === "TG"){
            correctName = "togo";
        } else if (newCountry.tag === "TD"){
            correctName = "chad";
        } else if (newCountry.tag === "ER"){
           correctName = "eritrea";
        } else if (newCountry.tag === "LY"){
            correctName = "libya";
        } else if (newCountry.tag === "GW"){
            correctName = "guinea-bissau";
        } else if (newCountry.tag === "ZM"){
            correctName = "zambia";

        } else if (newCountry.tag === "CI"){
            correctName = "ivory coast" || newCountry.name.toLowerCase() === "cote d'ivoire";
             //this is a little different...

        } else if (newCountry.tag === "EH"){
            correctName = "western sahara";
        } else if (newCountry.tag === "CM"){
            correctName = "cameroon";
        } else if (newCountry.tag === "EG"){
            correctName = "egypt";
        } else if (newCountry.tag === "SL"){
            correctName = "sierra leone";
        } else if (newCountry.tag === "CG"){
            correctName = "republic of the congo";
        } else if (newCountry.tag === "CF"){
            correctName = "central african republic";
        } else if (newCountry.tag === "AO"){
            correctName = "angola";
        } else if (newCountry.tag === "CD"){
            correctName = "democratic republic of the congo";
        } else if (newCountry.tag === "GA"){
            correctName = "gabon";
        } else if (newCountry.tag === "GN"){
            correctName = "guinea";
        } else if (newCountry.tag === "GM"){
            correctName = "gambia";
        } else if (newCountry.tag === "XS"){
            correctName = "somaliland";
        } else if (newCountry.tag === "CV"){
            correctName = "cape verde";
        } else if (newCountry.tag === "GH"){
            correctName = "ghana";
        } else if (newCountry.tag === "SZ"){
            correctName = "swaziland";
        } else if (newCountry.tag === "MG"){
            correctName = "madagascar";
        } else if (newCountry.tag === "MA"){
            correctName = "morocco";
        } else if (newCountry.tag === "KE"){
            correctName = "kenya";
        } else if (newCountry.tag === "SS"){
            correctName = "south sudan";
        } else if (newCountry.tag === "ML"){
            correctName = "mali";
        } else if (newCountry.tag === "KM"){
            correctName = "comoros";
        } else if (newCountry.tag === "ST"){
            correctName = "sao tome and prinicpe";
        } else if (newCountry.tag === "MW"){
            correctName = "malawi";
        } else if (newCountry.tag === "SO"){
            correctName = "somalia";
        } else if (newCountry.tag === "SN"){
            correctName = "senegal";
        } else if (newCountry.tag === "MR"){
            correctName = "mauritania";
        } else if (newCountry.tag === "UG"){
            correctName = "uganda";
        } else if (newCountry.tag === "SD"){
            correctName = "sudan";
        } else if (newCountry.tag === "MZ"){
            correctName = "mozambique";
        }

        adjust();

        Countries.push(newCountry);
        console.log(newCountry);
    });
     
});

app.post("/restart", function(req, res){
    
    res.json({"message" : "You have restarted your quiz."});
});


