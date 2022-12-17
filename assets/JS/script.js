var APIkey = 'd7d17ff04f8715fd79b80f173e2710a1';
var wIcon = 'https://openweathermap.org/img/w/';

var searchInput = $('.weather-search');
var searchForm = $('#search-form');
var searchBtn = $('.search-button');

var todaySec = $('#today');
var forecastSec = $('#forecast');

// var history = $('.list-group')







searchBtn.click(function (event) {
    event.preventDefault();
    var searchText = searchInput.val().trim();
    if (!searchText) {
        alert('please type a city name');
    } else {

        $.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${APIkey}&units=metric`)
            .then(function (data) {
                todaySec.append(`
                <div class="card p-4 w-100" id="todaysWeather">
                    <h2 class="cityName">${data.name} 
                        <img class="icon" src= ${wIcon + data.weather[0].icon + '.png'}></img>
                    </h2>
                    <h4 id="todayTemp">Temperature: ${data.main.temp}°C</h4>
                    <h4 id="todayWind">Wind Speed: ${data.wind.speed}KPH</h4>
                    <h4 id="todayTempumidity">Humidity: ${data.main.humidity}%</h4>
                    <h4 id="sunTimes">Sunrise: ${moment.unix(data.sys.sunrise).format('hh:mm a')}, Sunset: ${moment.unix(data.sys.sunset).format('hh:mm a')}</h4>
                </div>`
                )

                $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${APIkey}&units=metric`)
                    .then(function (FCData) {
                        console.log(FCData.list[0], 'FCdata0');
                        $('#history').append(`<button class="btn-secondary mb-1">${data.name}</button>`);

                        for (var i = 0; i <= 40; i += 2) {
                            forecastSec.append(`
                            <div class="card-body w-20">
                            <div class="card">
                                    <h5 class="date">${moment.unix(FCData.list[i].dt).format('Do MMM')}
                                        <img class="icon" src= ${wIcon + FCData.list[i].weather[0].icon + '.png'}></img>
                                    </h5>
                                    <h5 class="time">${moment.unix(FCData.list[i].dt).format('hh:mm a')}</h5>
                                    <p class="temp">Temp: ${FCData.list[i].main.temp}°C</p>
                                    <p class="wind">Wind Speed: ${FCData.list[i].wind.speed} KPH</p>
                                    <p class="humidity">Humidity: ${FCData.list[i].main.humidity}% </p>
                                </div>         
                                </div>
                            `)
                        }

                    })
            });

    }
})
// console.log(currentWeather)
// function init(){
//     searchForm.submit(function(event){
//         event.preventDefault();




{/*  */ }
