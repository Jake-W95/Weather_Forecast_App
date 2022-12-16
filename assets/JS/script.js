var APIkey = 'd7d17ff04f8715fd79b80f173e2710a1'

var searchInput = $('.weather-search');
var searchForm = $('#search-form');
var searchBtn = $('.search-button');
var todaySec = $('#today');
var forecastSec = $('#forecast');

// var searchText = 'london'


searchBtn.click(function (event) {
    event.preventDefault();
    var searchText = searchInput.val().trim();
    console.log(searchText)
    if (!searchText) {
        alert('please type a city name');
    } else {

        $.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${APIkey}`)
            .then(function (data) {
                /////////////////////////////////////////////////////////////////////////////////////Need to utilise moment.js to get accurate, current readings
                
                todaySec.append(`<div class="card" id="todaysWeather">
                <h2 class="name">${data.name}</h2>
               <h4 id="todayTemp">Temperature:</h4>
               <h4 id="todayWind">Wind:</h4>
               <h4 id="todayTempumidity">Humidity:</h4>
                <h4 id="sunTimes">Sunrise: ${data.sunrise}, Sunset: ${data.sunset}</h4>
             </div>`)
                // console.log(`
                // temp: ${Math.round(data.main.temp)}
                // Wind Speed: ${data.wind.speed}
                // Humidity: ${data.main.humidity}%
                // `);
                console.log(data.name, 'name')
                console.log(data.coord.lon, 'lon', data.coord.lat, 'lat')

                $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${APIkey}`)
                    .then(function (FCData) {
                        console.log(FCData, 'FCData')
                    }
                    )
            })

    }

})

// }
////////////////////////////////////////////////////Current Weather
/////////////////////////////////////////////////////5 Day Forecast





// console.log(currentWeather)
// function init(){
//     searchForm.submit(function(event){
//         event.preventDefault();


//     }
//     )}