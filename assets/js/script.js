console.log("hollow World");
var city = ""

var apiKey = "d45dbf09865d86748795ff69876d41b7";

$('#searchBtn').on('click', function() {
    const city = $(this).siblings('textarea').val()
    console.log(`city = ${city}`);
    localStorage.setItem(city, city)
    localStorage.setItem('currentCity', city)
    $('#city').html(city);
    searchURL(city);
    forecast();
    return city
})
//I got the href for the query on the page but what I really need to do instead is to launch the page taking in the parameters from the a tag.
// $('.fore-cast').on('click', function() {
//     var this
// })

var queryURL = ""
var forecastURL = ""
var cityTest = $('#cityToSearch').val();
console.log(`city = ${cityTest}`)

function searchURL(city) {
    queryURL = ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + apiKey);
    console.log(queryURL);
    //create a ref element <button> under search bar and update with href for future ref.
    $('#appendHere').after(`<a href=${queryURL} target="_blank" class="fore-cast">${city}</a>`)

    //parse api endpoint for weather info
    fetch(queryURL)
    .then(function (response) {
        console.log(response)
        return response.json();
      
    })
    .then(function(data) {
        console.log(data.main["temp"]);
        var temp = data.main["temp"];
        $('#temp').html(`temp: ${temp}`);
        console.log(`Temp: ${temp}`);
        var humidity = data.main["humidity"];
        $('humidity').html(`Humidity: ${humidity}`);
        console.log(`humidity: ${humidity}`);
        var icon = data.weather[0].icon;
        console.log(`weather icon: ${icon}`);
        iconimg = "https://openweathermap.org/img/w/"+icon+".png"
        $('#main-icon').attr('src', iconimg);
        console.log(` this is the icon url "${iconimg}"`);
        var descr = data.weather[0].main;
        console.log(`conditions: ${descr}`);
        var lon = data.coord["lon"];
        var lat = data.coord["lat"];
        forecastURL = ("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&appid=" + apiKey);
        console.log(queryURL);
        console.log(forecastURL);
        localStorage.setItem((`${city}_forecast`), forecastURL);
    });
    return
}

function forecast() {
    var currentCity = localStorage.getItem('currentCity');
    var pullCurrentCity = `${currentCity}_forecast`
    console.log(currentCity + "this is the latest city");
    var fCastUrl = localStorage.getItem(pullCurrentCity)
    console.log(`${fCastUrl} forecast urlish`)
    fetch(fCastUrl)
    .then(function (response) {
        console.log(response)
        return response.json();
      
    })
    .then(function(data) {
        console.log(data.daily[0].dt);
        var dt = data.daily[1].dt;
        var dayD = moment.unix(dt).format("MM/DD/YY")
        console.log(`${dayD} the day of forecast`)
        var dayT = data.daily[1].temp.day;
        console.log(dayT);
        $('#fdate').html(`Date: ${dayD}`)
        $('#ftemp').html(`Temp: ${dayT}`)
        var dayH = data.daily[1].humidity;
        console.log(dayH);
        $('#fhumidity').html(`Humidity ${dayH}`)
        var dayW = data.daily[1].wind_speed;
        console.log(dayW);
        $('#fwind').html(`Wind Speed ${dayW}`)
        var dayI = data.daily[1].weather[0].icon;
        console.log(dayI);
        ficonimg = "https://openweathermap.org/img/w/"+dayI+".png";
        console.log(ficonimg);
        $('#ficon').attr('src', ficonimg);
        
        // var temp = data.main["temp"];
        // $('#temp').html(temp);
        // console.log(`temp: ${temp}`);
        // var humidity = data.main["humidity"];
        // $('humidity').html(humidity);
        // console.log(`humidity: ${humidity}`);
        // var icon = data.weather[0].icon;
        // console.log(`weather icon: ${icon}`);


    });
}


// function print() {
    
//     var localStor = localStorage.getItem(`${city}_forecast`);
//     console.log(`forecast localstor url in global after search ${localStor}`);
// };

// print()
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}}

// this should be a <a> tag with a >href ="http://openweathermap.org/img/w/04d.png"

// fetch(queryURL)
//     .then(function (response) {
//         return response.json;
//     })
//     .then(function(data) {
//         console.log(data);
//     })
// function getApi() {
//     fetch(queryURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         });
// };

// getApi();