var express = require("express"),
http = require("http"),
bodyParser = require("body-parser"),
app = express(),
Countries = [],
Results = [];



app.use(express.static(__dirname + "/client"));
app.use(bodyParser.urlencoded({extended: true}));    //I don't think this is necessary since the content does not have to be parsed in the first place.
app.use(bodyParser.json());

http.createServer(app).listen(3000);
console.log("to Africa and beyond!");

app.get("/countries.json", function(req, res) {
    res.json(Countries);
}); 

app.post("/countries", function (req, res) {
    var newCountry = req.body 
    //bunch of if statements for each country...
    
    //newCountry.name.toLowerCase();
    
    if (newCountry.tag === "BF"){
        if (newCountry.name.toLowerCase() === "burkina faso"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "DJ"){
        if (newCountry.name.toLowerCase() === "djibouti"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "BI"){
        if (newCountry.name.toLowerCase() === "burundi"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "BJ"){
        if (newCountry.name.toLowerCase() === "benin"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "ZA"){
        if (newCountry.name.toLowerCase() === "south africa"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "BW"){
        if (newCountry.name.toLowerCase() === "botswana"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "DZ"){
        if (newCountry.name.toLowerCase() === "algeria"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "ET"){
        if (newCountry.name.toLowerCase() === "ethiopia"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "RW"){
        if (newCountry.name.toLowerCase() === "rwanda"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "TZ"){
        if (newCountry.name.toLowerCase() === "tanzania"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "GQ"){
        if (newCountry.name.toLowerCase() === "equatorial guinea"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "NA"){
        if (newCountry.name.toLowerCase() === "namibia"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "NE"){
        if (newCountry.name.toLowerCase() === "niger"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "NG"){
        if (newCountry.name.toLowerCase() === "nigeria"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "TN"){
        if (newCountry.name.toLowerCase() === "tunisia"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "LR"){
        if (newCountry.name.toLowerCase() === "liberia"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "LS"){
        if (newCountry.name.toLowerCase() === "lesotho"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "ZW"){
        if (newCountry.name.toLowerCase() === "zimbabwe"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "TG"){
        if (newCountry.name.toLowerCase() === "togo"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "TD"){
        if (newCountry.name.toLowerCase() === "chad"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "ER"){
        if (newCountry.name.toLowerCase() === "eritrea"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "LY"){
        if (newCountry.name.toLowerCase() === "libya"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "GW"){
        if (newCountry.name.toLowerCase() === "guinea-bissau"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "ZM"){
        if (newCountry.name.toLowerCase() === "zambia"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "CI"){
        if (newCountry.name.toLowerCase() === "ivory coast" || newCountry.name.toLowerCase() === "cote d'ivoire"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "EH"){
        if (newCountry.name.toLowerCase() === "western sahara"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "CM"){
        if (newCountry.name.toLowerCase() === "cameroon"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "EG"){
        if (newCountry.name.toLowerCase() === "egypt"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "SL"){
        if (newCountry.name.toLowerCase() === "sierra leone"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "CG"){
        if (newCountry.name.toLowerCase() === "republic of the congo"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "CF"){
        if (newCountry.name.toLowerCase() === "central african republic"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "AO"){
        if (newCountry.name.toLowerCase() === "angola"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "CD"){
        if (newCountry.name.toLowerCase() === "democratic republic of the congo"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "GA"){
        if (newCountry.name.toLowerCase() === "gabon"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "GN"){
        if (newCountry.name.toLowerCase() === "guinea"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "GM"){
        if (newCountry.name.toLowerCase() === "gambia"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "XS"){
        if (newCountry.name.toLowerCase() === "somaliland"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "CV"){
        if (newCountry.name.toLowerCase() === "cape verdi"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "GH"){
        if (newCountry.name.toLowerCase() === "ghana"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "SZ"){
        if (newCountry.name.toLowerCase() === "swaziland"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "MG"){
        if (newCountry.name.toLowerCase() === "madagascar"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "MA"){
        if (newCountry.name.toLowerCase() === "morocco"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "KE"){
        if (newCountry.name.toLowerCase() === "kenya"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "SS"){
        if (newCountry.name.toLowerCase() === "south sudan"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "ML"){
        if (newCountry.name.toLowerCase() === "mali"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "KM"){
        if (newCountry.name.toLowerCase() === "comoros"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "ST"){
        if (newCountry.name.toLowerCase() === "sao tome and prinicpe"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "MW"){
        if (newCountry.name.toLowerCase() === "malawi"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "SO"){
        if (newCountry.name.toLowerCase() === "somalia"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "SN"){
        if (newCountry.name.toLowerCase() === "senegal"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "MR"){
        if (newCountry.name.toLowerCase() === "mauritania"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "UG"){
        if (newCountry.name.toLowerCase() === "uganda"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "SD"){
        if (newCountry.name.toLowerCase() === "sudan"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    } else if (newCountry.tag === "MZ"){
        if (newCountry.name.toLowerCase() === "mozambique"){
           newCountry.status = "Correct";
        } else {
            newCountry.status = "Incorrect";
        }
    };
    
    Countries.push(newCountry);
    res.json({"message" : "you submitted an answer, keep going!"});

});

app.post("/restart", function(req, res){
    
    res.json({"message" : "You have restarted your quiz."});
});


