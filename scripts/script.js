$(document).ready(function(){
    $("form").submit(function(){
        var city = $("#city").val();
        $.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=6299028ea713376f56e4812c6b857b30", function(res) {
            console.log(res);
            var celcius = res.main.temp -273.15;
            celcius=Math.round(celcius);
            var html_str = "";
                            html_str += "<h2>"+city+"</h2>";
                            html_str += "<h2>"+celcius+"°C</h2>";
                            html_str += "<h2>"+res.weather[0].description+"</h2>";
                            html_str += "<h2>Longitude "+res.coord.lon+"</h2>";
                            html_str += "<h2>Latitude "+res.coord.lat+"</h2>";
                            $(".datos").html(html_str);

                            $( "input[type=reset]" ).click(function() {
                                $( ".datos" ).empty();
                            });

        }, "json");
        return false;

    });

});
