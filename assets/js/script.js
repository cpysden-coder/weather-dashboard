console.log("hollow World");

var apiKey = "d45dbf09865d86748795ff69876d41b7";
var city = "seattle";

var queryURL = ("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey);
console.log(queryURL);

function getApi() {
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
};

getApi();