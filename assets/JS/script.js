var APIkey = 'd7d17ff04f8715fd79b80f173e2710a1'
var searchInput = $('.weather-search');
var searchForm = $('#search-form');
var searchBtn = $('.search-button');
var todaySec = $('#today');
var forecastSec = $('#forecast');

searchBtn.click(function (event) {
    event.preventDefault();
    var searchText = searchInput.val().trim();
    console.log(searchText)
    if (!searchText) {
        alert('please type a city name');
    } else {
        $.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${APIkey}&units=metric`)
            .then(function (data) {
                todaySec.append(`<div class="card p-4" id="todaysWeather">
                <h2 class="cityName">${data.name}</h2>
        <h4 id="todayTemp">Temperature: ${data.main.temp}°C</h4>
               <h4 id="todayWind">Wind Speed: ${data.wind.speed}KPH</h4>
               <h4 id="todayTempumidity">Humidity: ${data.main.humidity}%</h4>
                <h4 id="sunTimes">Sunrise: ${moment.unix(data.sys.sunrise).format('hh:mm a')}, Sunset: ${moment.unix(data.sys.sunset).format('hh:mm a')}</h4>
             </div>`)

                $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${APIkey}&units=metric`)
                    .then(function (FCData) {
                        console.log(FCData.list[0], 'FCdata0')
                        forecastSec.append(`
                        <section class="row">
                             <div class="card-body">
                                <h5 class="date">${moment.unix(FCData.list[0].dt).format('Do MMM')}</h5>
                                <h5 class="time">${moment.unix(FCData.list[0].dt).format('hh:mm a')}</h5>
                                <p class="temp">Temp: ${FCData.list[0].main.temp}°C</p>
                                <p class="wind">Wind Speed: ${FCData.list[0].wind.speed} KPH</p>
                                <p class="humidity">Humidity: ${FCData.list[0].main.humidity}% </p>
                            </div>         

                            <div class="card-body">
                                <h5 class="date">${moment.unix(FCData.list[1].dt).format('Do MMM')}</h5>
                                <h5 class="time">${moment.unix(FCData.list[1].dt).format('hh:mm a')}</h5>
                                <p class="temp">Temp ${FCData.list[1].main.temp}°C</p>
                                <p class="wind">${FCData.list[1].wind.speed} KPH</p>
                                <p class="humidity">Humidity: ${FCData.list[1].main.humidity}% </p>

                            </div>         

                            <div class="card-body">
                                <h5 class="date">${moment.unix(FCData.list[2].dt).format('Do MMM')}</h5>
                                <h5 class="time">${moment.unix(FCData.list[2].dt).format('hh:mm a')}</h5>
                                <p class="temp">Temp ${FCData.list[2].main.temp}°C</p>
                                <p class="wind">${FCData.list[2].wind.speed} KPH</p>
                                <p class="humidity">Humidity: ${FCData.list[2].main.humidity}% </p>

                            </div>  

                            <div class="card-body">
                                <h5 class="date">${moment.unix(FCData.list[3].dt).format('Do MMM')}</h5>
                                <h5 class="time">${moment.unix(FCData.list[3].dt).format('hh:mm a')}</h5>
                                <p class="temp">Temp ${FCData.list[3].main.temp}°C</p>
                                <p class="wind">${FCData.list[3].wind.speed} KPH</p>
                                <p class="humidity">Humidity: ${FCData.list[3].main.humidity}% </p>

                            </div>  
                
                            <div class="card-body">
                                <h5 class="date">${moment.unix(FCData.list[4].dt).format('Do MMM')}</h5>
                                <h5 class="time">${moment.unix(FCData.list[4].dt).format('hh:mm a')}</h5>
                                <p class="temp">Temp ${FCData.list[4].main.temp}°C</p>
                                <p class="wind">${FCData.list[4].wind.speed} KPH</p>
                                <p class="humidity">Humidity: ${FCData.list[4].main.humidity}% </p>

                            </div>  
                            <div class="card-body">
                                <h5 class="time">${moment.unix(FCData.list[5].dt).format('Do MMM')}</h5>
                                <h5 class="time">${moment.unix(FCData.list[5].dt).format('hh:mm a')}</h5>
                                <p class="temp">Temp ${FCData.list[5].main.temp}°C</p>
                                <p class="wind">${FCData.list[5].wind.speed} KPH</p>
                                <p class="humidity">Humidity: ${FCData.list[5].main.humidity}% </p>

                            </div> 
                            
                            <div class="card-body">
                                <h5 class="time">${moment.unix(FCData.list[6].dt).format('Do MMM')}</h5>
                                <h5 class="time">${moment.unix(FCData.list[6].dt).format('hh:mm a')}</h5>
                                <p class="temp">Temp ${FCData.list[6].main.temp}°C</p>
                                <p class="wind">${FCData.list[6].wind.speed} KPH</p>
                                <p class="humidity">Humidity: ${FCData.list[6].main.humidity}% </p>

                            </div>  
                        </section>
                        `)

                    })
            })
    }
})
// console.log(currentWeather)
// function init(){
//     searchForm.submit(function(event){
//         event.preventDefault();