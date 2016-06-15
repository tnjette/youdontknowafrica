var main = function(){
    var finished = true;
    var finalAnswers = [];
    var alreadyAnswered = [];
    var completed = function(){ 
        var send = Object.assign({}, finalAnswers);
        $.post("countries", send);
        $("#getResults").hide(); 
        $("#map").fadeOut(800);
        $("#resultMap").fadeIn(800); 
        $("#resultNums").html("<ul><li>Totals:</li><li>---- Correct</li><li>---Incorrect</li>");//this STILL needs to be calculated...and integrated into the DOM.
        var correctResults = {};
        $(function(){  
            var correct = 0;
            var incorrect = 0;
            $.getJSON("countries.json", function(countryObject){
                countryObject.map(function(country){
                    if (country.status === "Correct"){
                        correct = correct + 1;
                    } else if (country.status === "Incorrect"){
                        incorrect = incorrect + 1;
                    }
                });        
                var results = {};
                var collected = [];
                countryObject.forEach(function(Country){ 
                    var result = new Object();
                    if (Country.status === "Correct"){
                        result[Country.tag] = "1";
                        Object.assign(results, result); 
                    } else {
                        result[Country.tag] = "0";
                        Object.assign(results, result);
                    }
                });
                $('#resultMap').vectorMap({
                    map: 'africa_mill',
                    backgroundColor: '#777',
                    series: {
                        regions: [{
                            scale: { 
                                "0" : "rgba(200, 0, 0, .5)", 
                                "1" : "rgba(0, 200, 0, .5)"
                                   },
                            attribute: "fill",
                            values : results 
                        }]
                    },
                    onRegionClick: function(event, code){
                        var select = function(){
                            var str = "";
                            var check = function(){
                                var answered = true;
                                countryObject.forEach(function(Country){
                                    if (Country.tag === code){
                                        str = '"' + Country.name + '"' + " is " + Country.status + ".";
                                        answered = false;
                                    } 
                                });
                                if (answered){
                                    str = "You didn't name that country.";
                                }
                                $("#r").hide();
                                $("#r").html("<div id = 'answered'><img src = '" + co + "'></img><h3>" + str + "</h3><a class = 'btn return'>Return</div>");
                                
                                $("#resultMap").fadeTo(800, 0.3);
                                $("#r").fadeIn(2000);
                                //this is really where the outreach should be for navigating to wikipedia pages about that country or others.
                                $(".btn.return").click(function(){
                                    $("#r").fadeOut(2000, function(){
                                        $(this).empty();
                                    });
                                    $("#resultMap").fadeTo(800, 1);
                                });
                            }
                            check();  
                        };
                        var co = "";
                        if (code === "BF"){  
                            co  = "../maps/bf.png";
                            select();
                        } else if (code === "DJ"){
                            co  = "../maps/dj.png";
                            select();
                        } else if (code === "BI"){
                            co  = "../maps/bi.png";
                            select();
                        } else if (code === "BJ"){
                            co  = "../maps/bj.png";
                            select();
                        } else if (code === "ZA"){
                            co = "../maps/za.png";
                            select();
                        } else if (code === "BW"){
                            co  = "../maps/bw.png";
                            select();
                        } else if (code === "DZ"){
                            co  = "../maps/dz.png";
                            select();
                        } else if (code === "ET"){
                            co  = "../maps/et.png";
                            select();
                        } else if (code === "RW"){
                            co  = "../maps/rw.png";
                            select();
                        } else if (code === "TZ"){
                            co  = "../maps/tz.png";
                            select();
                        } else if (code === "GQ"){
                            co  = "../maps/gq.png";
                            select();
                        } else if (code === "NA"){
                            co  = "../maps/na.png";
                            select();
                        } else if (code === "NE"){
                            co  = "../maps/ne.png";
                            select();
                        } else if (code === "NG"){
                            co  = "../maps/ng.png";
                            select();
                        } else if (code === "TN"){
                            co  = "../maps/tn.png";
                            select();
                        } else if (code === "LR"){
                            co  = "../maps/lr.png";
                            select();
                        } else if (code === "LS"){
                            co  = "../maps/ls.png";
                            select();
                        } else if (code === "ZW"){
                            co  = "../maps/zw.png";
                            select();
                        } else if (code === "TG"){
                            co  = "../maps/tg.png";
                            select();
                        } else if (code === "TD"){
                            co  = "../maps/td.png";
                            select();
                        } else if (code === "ER"){
                            co  = "../maps/er.png";
                            select();
                        } else if (code === "LY"){
                            co  = "../maps/ly.png";
                            select();
                        } else if (code === "GW"){
                            co  = "../maps/gw.png";
                            select();
                        } else if (code === "ZM"){
                            co  = "../maps/zm.png";
                            select();
                        } else if (code === "CI"){
                            co  = "../maps/ci.png";
                            select();
                        } else if (code === "EH"){
                            co  = "../maps/eh.png";
                            select();
                            console.log('needs a map for western sahara');
                        } else if (code === "CM"){
                            co  = "../maps/cm.png";
                            select();
                        } else if (code === "EG"){
                            co  = "../maps/eg.png";
                            select();
                        } else if (code === "SL"){
                            co  = "../maps/sl.png";
                            select();
                        } else if (code === "CG"){
                            co  = "../maps/cg.png";
                            select();
                        } else if (code === "CF"){
                            co  = "../maps/cf.png";
                            select();
                        } else if (code === "AO"){
                            co  = "../maps/ao.png";
                            select();
                        } else if (code === "CD"){
                            co  = "../maps/cd.png";
                            select();
                        } else if (code === "GA"){
                            co  = "../maps/ga.png";
                            select();
                        } else if (code === "GN"){
                            co  = "../maps/gn.png";
                            select();
                        } else if (code === "GM"){
                            co  = "../maps/gm.png";
                            select();
                        } else if (code === "XS"){
                            console.log("need a map of somaliland");
                            co  = "../maps/xs.png";
                            select();
                        } else if (code === "CV"){
                            co  = "../maps/cv.png";
                            select();
                        } else if (code === "GH"){
                            co  = "../maps/gh.png";
                            select();
                        } else if (code === "SZ"){
                            co  = "../maps/sz.png";
                            select();
                            console.log("need a map of swaziland");
                        } else if (code === "MG"){
                            co  = "../maps/mg.png";
                            select();
                        } else if (code === "MA"){
                            co  = "../maps/ma.png";
                            select();
                            console.log("need a map of morocco");
                        } else if (code === "KE"){
                            co  = "../maps/ke.png";
                            select();
                        } else if (code === "SS"){
                            co  = "../maps/ss.png";
                            select();
                        } else if (code === "ML"){
                            co  = "../maps/ml.png";
                            select();
                        }  else if (code === "KM"){
                            co  = "../maps/km.png";
                            select();
                        } else if (code === "ST"){
                            co  = "../maps/st.png";
                            select();
                        } else if (code === "MW"){
                            co  = "../maps/mw.png";
                            select();
                        } else if (code === "SO"){
                            co  = "../maps/so.png";
                            select();
                        } else if (code === "SN"){                            
                            co  = "../maps/sn.png";
                            select();
                        } else if (code === "MR"){
                            co  = "../maps/mr.png";
                            select();
                        } else if (code === "UG"){
                            co  = "../maps/ug.png";
                            select();
                        } else if (code === "SD"){
                            co  = "../maps/sd.png";
                            select();
                        } else if (code === "MZ"){
                            co  = "../maps/mz.png";
                            select();
                        }   
                    }
                });
                
                if (finished){               
                    if (correct >= 54){   
                        $("#finish").html("<div class = 'congrats'><h1>Congratulations!</h1><h2>You know </h2><span>AFRICA</span><a class = 'btn finalResults' id = 'results'>See your results</a></div>");  
                        $("#finish").fadeIn(1500);
                        $("#resultmap").fadeTo(800, 0.3);
                    } else {
                        $("#finish").html("<div class = 'congrats'><h1>Congratulations!</h1><h3>You've completed your quiz!</h3><a class = 'btn finalResults' id = 'results'>See your results</a></div>");  
                        $("#finish").fadeIn(1500);
                        $("#resultmap").fadeTo(800, 0.3);
                    }
                    
                    $("#results").click(function(){
                        $("#finish").fadeOut(800, function(){
                            $(this).empty();
                        });
                        $("#resultmap").fadeTo(800, 1);
                    });
                }    
                
                //bring in the calculated results into the DOM
                var calc = function(){
                    var percentage = ((correct/54)*100).toFixed(1);
                    var unanswered = 54 - (correct + incorrect);
                    
                            console.log(percentage + " %, " + correct + " correct, " + incorrect + " incorrect, " + unanswered + " unanswered." );

                    $("#resultNums").html("<div>You answered " + percentage + " percent  correctly</div><div>" + correct + " correct</div><div>" + incorrect + "  incorrect</div><div>" + unanswered + " unanswered</div>");//this STILL needs to be calculated...and integrated into the DOM.
                    $("#resultNums").fadeIn(800);
                };
                calc();
            });
        });  
    };    //*********************END OF completed function*******************
    
    $(function(){  //main map function
        var map = $('#map').vectorMap({
            map: 'africa_mill',
            backgroundColor: '#777',
            regionsSelectable: true,
            regionStyle: {
                initial: {
                    fill: "white"
                },  
                selected: {
                    fill: "white",
                    "fill-opacity" : .1,
                    cursor : 'default'
                }
            },
            onRegionClick: function(event, code){
                var select = function(){
                    var check = true;
                    var submitForm = function(){  
                        $("#map").fadeTo(800, 0.3);
                        $("#q").html("<div class = 'question'><img src = '" + co + "'></img><input type='text' id = 'txt' value = ''></input><a class = 'btn submit' id = 'submit'>Submit my answer</a></div>"); 
                        $("#q").fadeIn(800, function(){
                            $("input").focus();
                        });
                        var submit = function(){
                            alreadyAnswered.push(code);
                            var answer = $("#txt").val(),
                                newCountry = {"tag" : code, "name": answer, "status" : null};  
                                $("#map").fadeTo(800, 1);
                                finalAnswers.push(newCountry);
                                $("<input>").val("");
                                $("#q").fadeOut(800, function(){
                                    $("#q").empty();
                                });
                                if (finalAnswers.length >= 54){ 
                                    completed(); //run the result map
                                }
                        };  
                        $('#txt').keydown(function(event){
                            if (event.keyCode === 13){
                                 submit();
                            }
                        });
                        $("#submit").click(function(){
                            submit();
                        });   
                    }; 
                    if (alreadyAnswered.indexOf(code) > -1){
                        check = false;
                    }
                    if (check){   
                        submitForm();
                    } else { 
                        $("#map").fadeTo(800, 0.3);
                        $("#w").html("<div class = 'holdOn'><span>You already named that country</span><img src = '" + co + "'></img><a class = 'btn goBack' id = 'goBack'>Go back</a></div>");  
                        $("#w").fadeIn(800);
                         var goBack = function(){
                            $("#w").fadeOut(800, function(){
                                $(this).empty();
                            });
                            $("#map").fadeTo(800, 1);
                        };
                        $(".holdOn").keydown(function(event){
                            if (event.keyCode === 13){
                                goBack();
                            }
                        }); //doesn't work?
                        $(".holdOn").click(function(){
                            goBack();
                        });
                    }
                }; 
                var co = "";
                if (code === "BF"){  
                    co  = "../maps/bf.png";
                    select();
                } else if (code === "DJ"){
                    co  = "../maps/dj.png";
                    select();
                } else if (code === "BI"){
                    co  = "../maps/bi.png";
                    select();
                } else if (code === "BJ"){
                    co  = "../maps/bj.png";
                    select();
                } else if (code === "ZA"){
                    co = "../maps/za.png";
                    select();
                } else if (code === "BW"){
                    co  = "../maps/bw.png";
                    select();
                } else if (code === "DZ"){
                    co  = "../maps/dz.png";
                    select();
                } else if (code === "ET"){
                    co  = "../maps/et.png";
                    select();
                } else if (code === "RW"){
                    co  = "../maps/rw.png";
                    select();
                } else if (code === "TZ"){
                    co  = "../maps/tz.png";
                    select();
                } else if (code === "GQ"){
                    co  = "../maps/gq.png";
                    select();
                } else if (code === "NA"){
                    co  = "../maps/na.png";
                    select();
                } else if (code === "NE"){
                    co  = "../maps/ne.png";
                    select();
                } else if (code === "NG"){
                    co  = "../maps/ng.png";
                    select();
                } else if (code === "TN"){
                    co  = "../maps/tn.png";
                    select();
                } else if (code === "LR"){
                    co  = "../maps/lr.png";
                    select();
                } else if (code === "LS"){
                    co  = "../maps/ls.png";
                    select();
                } else if (code === "ZW"){
                    co  = "../maps/zw.png";
                    select();
                } else if (code === "TG"){
                    co  = "../maps/tg.png";
                    select();
                } else if (code === "TD"){
                    co  = "../maps/td.png";
                    select();
                } else if (code === "ER"){
                    co  = "../maps/er.png";
                    select();
                } else if (code === "LY"){
                    co  = "../maps/ly.png";
                    select();
                } else if (code === "GW"){
                    co  = "../maps/gw.png";
                    select();
                } else if (code === "ZM"){
                    co  = "../maps/zm.png";
                    select();
                } else if (code === "CI"){
                    co  = "../maps/ci.png";
                    select();
                } else if (code === "EH"){
                    co  = "../maps/eh.png";
                    select();
                    console.log('needs a map for western sahara');
                } else if (code === "CM"){
                    co  = "../maps/cm.png";
                    select();
                } else if (code === "EG"){
                    co  = "../maps/eg.png";
                    select();
                } else if (code === "SL"){
                    co  = "../maps/sl.png";
                    select();
                } else if (code === "CG"){
                    co  = "../maps/cg.png";
                    select();
                } else if (code === "CF"){
                    co  = "../maps/cf.png";
                    select();
                } else if (code === "AO"){
                    co  = "../maps/ao.png";
                    select();
                } else if (code === "CD"){
                    co  = "../maps/cd.png";
                    select();
                } else if (code === "GA"){
                    co  = "../maps/ga.png";
                    select();
                } else if (code === "GN"){
                    co  = "../maps/gn.png";
                    select();
                } else if (code === "GM"){
                    co  = "../maps/gm.png";
                    select();
                } else if (code === "XS"){
                    console.log("need a map of somaliland");
                    co  = "../maps/xs.png";
                    select();
                } else if (code === "CV"){
                    co  = "../maps/cv.png";
                    select();
                } else if (code === "GH"){
                    co  = "../maps/gh.png";
                    select();
                } else if (code === "SZ"){
                    co  = "../maps/sz.png";
                    select();
                    console.log("need a map of swaziland");
                } else if (code === "MG"){
                    co  = "../maps/mg.png";
                    select();
                } else if (code === "MA"){
                    co  = "../maps/ma.png";
                    select();
                    console.log("need a map of morocco");
                } else if (code === "KE"){
                    co  = "../maps/ke.png";
                    select();
                } else if (code === "SS"){
                    co  = "../maps/ss.png";
                    select();
                } else if (code === "ML"){
                    co  = "../maps/ml.png";
                    select();
                }  else if (code === "KM"){
                    co  = "../maps/km.png";
                    select();
                } else if (code === "ST"){
                    co  = "../maps/st.png";
                    select();
                } else if (code === "MW"){
                    co  = "../maps/mw.png";
                    select();
                } else if (code === "SO"){
                    co  = "../maps/so.png";
                    select();
                } else if (code === "SN"){
                    co  = "../maps/sn.png";
                    select();
                } else if (code === "MR"){
                    co  = "../maps/mr.png";
                    select();
                } else if (code === "UG"){
                    co  = "../maps/ug.png";
                    select();
                } else if (code === "SD"){
                    co  = "../maps/sd.png";
                    select();
                } else if (code === "MZ"){
                    co  = "../maps/mz.png";
                    select();
                }   
        } 
    }); 
        $("#getResults").click(function(){
            finished = false;
            completed(); 
        });
    }); 
}; 

$(document).ready(function(){
    $.post("begin"); //make sure the Country obj is empty
    $("#resultNums").hide();
    $("#finish").hide();
    $("#map").css("opacity", "0");
    $("#mainHead").html("<h1>You Don't know</h1><span>Africa</span>");
    $("#welcome").html("<h2>Welcome to</h2><a class = 'btn begin' id = 'begin'>Begin</a><p>In an era with incredible technological connectivity, it can be surprising how limited our familiarity becomes of the world we live in. Here is an opportunity to gain a new perspective on your own familiarity with the African continent, or to try to prove our assumptions wrong. Simply click on a country on the map and enter the name of that country. Simple as that.</p><h3>There are 54 in total!</h3>");
    $('#begin').click(function(){
        main(); 
        $("#map").hide();
        $("#map").fadeTo(2000, 1);
        $('#resultMap').hide();
        $("#getResults").html("<a class = 'btn results'>Submit my quiz</a>");
        $('#welcome').fadeOut(2000).empty();
        $("#mainHead").animate({
            fontSize: '1em',
            left: '100px',
            top: '20px',
            lineHeight: '20px'
        }, 'slow');
    });  
});
