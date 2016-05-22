var main = function(countryObject){
    
    $(function(){
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
                    $.getJSON("countries.json", function(countryObject){
                        countryObject.forEach(function(entry){
                            if (entry.tag === code){
                                check = false;
                            }
                        });

                        if (check){ 
                            
                            var submitForm = function(){  
                                $("#map").fadeTo(800, 0.3);
                                $("#q").html("<div class = 'question'><img src = '" + co + "'></img><input type='text' id = 'txt' value = ''></input><a class = 'btn submit' id = 'submit'>submit your answer</a></div>");  
                                $("#q").fadeIn(2000);
                                var submit = function(){

                                    var answer = $("#txt").val(),
                                        newCountry = {"tag" : code, "name": answer, "status" : null, "answered" : true};  

                                    $("#q").fadeOut(2000, function(){
                                        $(this).empty();
                                    });
                                    
                                    $("#map").fadeTo(800, 1);

                                    $.post("countries", newCountry, function(answered){

                                        countryObject.push(newCountry);
                                        $("<input>").val("");
                                    });
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

                            submitForm();

                        } else { 
                            
                            $("#map").fadeTo(600, 0.3);
                            $("#w").html("<div class = 'holdOn'><span>You already named that country</span><img src = '" + co + "'></img><a class = 'btn goBack' id = 'goBack'>Go back</a></div>");  
                            $("#w").fadeIn(1500);
                            
                            var goBack = function(){
                                $("#w").fadeOut(1500, function(){
                                    $(this).empty();
                                });
                                $("#map").fadeTo(600, 1);
                            };
                            
                            
                            //----------------------------------------
                            $(".holdOn").keydown(function(event){
                                if (event.keyCode === 13){
                                    goBack();
                                }
                            }); //don't know why this keydown function doesn't work...?
                            //----------------------------------------

                            $(".holdOn").click(function(){
                                goBack();
                            });
                        }
                    });
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
    });
    
    $("#getResults").click(function(){
        
        //add dom elements for the results page to show the tallied results...
        
        $(this).hide();
        $("#map").fadeTo(2000, 0).hide(); //fade the main map object then hide it.
        
        
        
        $("#resultNums").html("<ul><li>Totals:</li><li>---- Correct</li><li>---Incorrect</li>");
        //this needs to be calculated...and integrated into the DOM.
        
        
        
        $("#resultMap").hide().fadeIn(2000); //then fade in the results map object, this may not work, the fadeIn(2000) may need to be a callback function inside the hide() function.
        
        var correctResults = {};
            
        $(function(){ 
            $.getJSON("countries.json", function(countryObject){
                var results = {};
                var collected = [];
                countryObject.forEach(function(Country){ //assignes the result for each answered country to the object passed to the resultMap variable//
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
                        //selectedRegions: correctResults,
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
                                    console.log(Country);
                                    
                                    if (Country.tag === code){
                                        str = '"' + Country.name + '"' + " is " + Country.status + ".";
                                        answered = false;
                                    } 
                                    
                                });
                                
                                if (answered){
                                    str = "You didn't name that country.";
                                }
                                
                                $("#resultMap").fadeTo(800, 0.3);
                            
                                $("#r").html("<div id = 'answered'><img src = '" + co + "'></img><h3>" + str + "</h3><a class = 'btn return'>Return</div>");
                                console.log(str);
                                
                                //this is really where the outreach should be for navigating to wikipedia pages about that country or others.
                                $(".btn.return").click(function(){
                                    $("#r").fadeOut(2000).empty();
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
            });
        });  
    });
};

$(document).ready(function(){
    $("#map").css("opacity", "0");
    $.getJSON("countries.json", function(countryObject){
        main(countryObject);
        $("#mainHead").html("<h1>You Don't know <span>Africa</span></h1>");
        $("#welcome").html("<h2>Welcome to the</h2><h2>Geography quiz!</h1><a class = 'btn begin' id = 'begin'>Begin</a><h3>Simply click on a country on the map and enter the name of that country.</h3><h3>There are 54 in total!</h3>");
        
        //$(".splash").html("<h1>You don't know <span>africa</span></h1><h2>Can you //name all of the African Countries?</h2>");
        
        $('#begin').click(function(){
            $("#map").fadeTo(2000, 1);
            $('#resultMap').hide();
            $("#getResults").html("<a class = btn results>Submit my quiz</a>");
            
            //change the size of the welcome div and remove divs 1 and 3 from the welcome div. 
            $('#welcome').fadeOut(2000).empty();
            
            $("#mainHead").animate({
                fontSize: '1em',
                left: '100px',
                top: '50px',
            });
            
            $('#mainHead span').animate({
                    marginTop: '-10px'
                });
            
            //$("#welcome h2").fadeOut(1000).empty()
            //$("#welcome h3").fadeOut(1000).empty();
            //$("#welcome a").fadeOut(1000).empty();
           
            
            //$("#welcome").fadeOut(2000, function(){
              //  $(this).empty();
            //});   //this is the original DOM structure
            
            
        });  
    });
});
