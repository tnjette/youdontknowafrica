var main = function(countryObject){
    
    /*var Countries = countryObject.map(function(Country){//changed to Country from country
        console.log(Country.name); //changed from country.name
    });*/
    
    
    $(function(){
        var map = $('#map').vectorMap({
            map: 'africa_mill',
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
                var which = function(){
                    var check = true;
                    $.getJSON("countries.json", function(countryObject){
                        countryObject.forEach(function(entry){
                            if (entry.tag === code){
                                check = false;
                            }
                        });

                        if (check){ 
                            var submitForm = function(){   //submitForm function//
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
                                
                            };  //end of submitForm function.

                            submitForm();

                        } else { // this tells the user they've mistakenly chosen a country multiple times.
                            $("#map").fadeTo(600, 0.3);
                            $("#w").html("<div class = 'holdOn'><span>You already named that country</span><img src = '" + co + "'></img><a class = 'btn goBack' id = 'goBack'>Go back</a></div>");  
                            $("#w").fadeIn(1500);
                            
                            var goBack = function(){
                                $("#w").fadeOut(1500, function(){
                                    $(this).empty();
                                });
                                $("#map").fadeTo(600, 1);
                            };
                            
                            $(".holdOn").keydown(function(event){
                                if (event.keyCode === 13){
                                    goBack();
                                }
                            }); //don't know why this keydown function doesn't work...?

                            $(".holdOn").click(function(){
                                goBack();
                            });
                        }
                    });
                };
                
                var co = "";

                if (code === "BF"){  
                        co  = "../maps/bf.png";
                        which();
                } else if (code === "DJ"){
                        co  = "../maps/dj.png";
                        which();
                } else if (code === "BI"){
                    co  = "../maps/bi.png";
                    which();
                } else if (code === "BJ"){
                    co  = "../maps/bj.png";
                    which();
                } else if (code === "ZA"){
                    co = "../maps/za.png";
                    which();
                } else if (code === "BW"){
                    co  = "../maps/bw.png";
                    which();
                } else if (code === "DZ"){
                    co  = "../maps/dz.png";
                    which();
                } else if (code === "ET"){
                    co  = "../maps/et.png";
                    which();
                } else if (code === "RW"){
                    co  = "../maps/rw.png";
                    which();
                } else if (code === "TZ"){
                    co  = "../maps/tz.png";
                    which();
                } else if (code === "GQ"){
                    co  = "../maps/gq.png";
                    which();
                } else if (code === "NA"){
                    co  = "../maps/na.png";
                    which();
                } else if (code === "NE"){
                    co  = "../maps/ne.png";
                    which();
                } else if (code === "NG"){
                    co  = "../maps/ng.png";
                    which();
                } else if (code === "TN"){
                    co  = "../maps/tn.png";
                    which();
                } else if (code === "LR"){
                    co  = "../maps/lr.png";
                    which();
                } else if (code === "LS"){
                    co  = "../maps/ls.png";
                    which();
                } else if (code === "ZW"){
                    co  = "../maps/zw.png";
                    which();
                } else if (code === "TG"){
                    co  = "../maps/tg.png";
                    which();
                } else if (code === "TD"){
                    co  = "../maps/td.png";
                    which();
                } else if (code === "ER"){
                    co  = "../maps/er.png";
                    which();
                } else if (code === "LY"){
                    co  = "../maps/ly.png";
                    which();
                } else if (code === "GW"){
                    co  = "../maps/gw.png";
                    which();
                } else if (code === "ZM"){
                    co  = "../maps/zm.png";
                    which();
                } else if (code === "CI"){
                    co  = "../maps/ci.png";
                    which();
                } else if (code === "EH"){
                    co  = "../maps/eh.png";
                    which();
                    console.log('needs a map for western sahara');
                } else if (code === "CM"){
                    co  = "../maps/cm.png";
                    which();
                } else if (code === "EG"){
                    co  = "../maps/eg.png";
                    which();
                } else if (code === "SL"){
                    co  = "../maps/sl.png";
                    which();
                } else if (code === "CG"){
                    co  = "../maps/cg.png";
                    which();
                } else if (code === "CF"){
                    co  = "../maps/cf.png";
                    which();
                } else if (code === "AO"){
                    co  = "../maps/ao.png";
                    which();
                } else if (code === "CD"){
                    co  = "../maps/cd.png";
                    which();
                } else if (code === "GA"){
                    co  = "../maps/ga.png";
                    which();
                } else if (code === "GN"){
                    co  = "../maps/gn.png";
                    which();
                } else if (code === "GM"){
                    co  = "../maps/gm.png";
                    which();
                } else if (code === "XS"){
                    console.log("need a map of somaliland");
                    co  = "../maps/xs.png";
                    which();
                } else if (code === "CV"){
                    co  = "../maps/cv.png";
                    which();
                } else if (code === "GH"){
                    co  = "../maps/gh.png";
                    which();
                } else if (code === "SZ"){
                    co  = "../maps/sz.png";
                    which();
                    console.log("need a map of swaziland");
                } else if (code === "MG"){
                    co  = "../maps/mg.png";
                    which();
                } else if (code === "MA"){
                    co  = "../maps/ma.png";
                    which();
                    console.log("need a map of morocco");
                } else if (code === "KE"){
                    co  = "../maps/ke.png";
                    which();
                } else if (code === "SS"){
                    co  = "../maps/ss.png";
                    which();
                } else if (code === "ML"){
                    co  = "../maps/ml.png";
                    which();
                }  else if (code === "KM"){
                    co  = "../maps/km.png";
                    which();
                } else if (code === "ST"){
                    co  = "../maps/st.png";
                    which();
                } else if (code === "MW"){
                    co  = "../maps/mw.png";
                    which();
                } else if (code === "SO"){
                    co  = "../maps/so.png";
                    which();
                } else if (code === "SN"){
                    co  = "../maps/sn.png";
                    which();
                } else if (code === "MR"){
                    co  = "../maps/mr.png";
                    which();
                } else if (code === "UG"){
                    co  = "../maps/ug.png";
                    which();
                } else if (code === "SD"){
                    co  = "../maps/sd.png";
                    which();
                } else if (code === "MZ"){
                    co  = "../maps/mz.png";
                    which();
                }   
            }
        });
    });
    
    //more stuff...?
    //this feature will return to the client the object that holds all of the correct answers and will reload the map with the correct countries highlighed. 
    
    $("#a").click(function(){
        $.getJSON("countries.json", function(countryObject){
            countryObject.map(function(Country){//changed to Country from country
                console.log(Country);
            console.log(Country.name + " = " + Country.status); 
            });
        });  
    });
    
    /*//and another for restarting the quiz?
    $('#restart').click(function(){
        $.post('restart', function(){
            countryObject.empty();
        });
        
        $.post("restart", function(answered){
                            console.log(answered);  //changed this from newCountry to answered. 
                            countryObject.html = "";
                            
                        });
    });
    
    
    */
    
};



$(document).ready(function(){
    
    
    
    $.getJSON("countries.json", function(countryObject){
        main(countryObject);
        //welcome page here...
        
        /*$("#welcome").html("<div id = 'page'>Welcome to the You Don't know Africa Geography quiz!</div><button class = 'begin'>Begin</button>");
        
        $('.begin').click(function(){
            main(countryObject);
        });
        
        */
    })
    
});

//module.export = collect;    ...?
