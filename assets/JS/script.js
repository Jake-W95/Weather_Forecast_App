var APIkey = 'd7d17ff04f8715fd79b80f173e2710a1'

var searchInput = $('.weather-search');
var searchForm = $('#search-form');
var searchBtn = $('.search-button');

var London = 'london'


// searchBtn.submit(function (event){
//     event.preventDefault;
//     console.log('click')
// })

// var searchText = searchInput.val().trim();
// console.log(searchText)
// if (!searchText){
//     alert('please type a city name');
// } else {
    
// }
////////////////////////////////////////////////////Current Weather
$.get(`https://api.openweathermap.org/data/2.5/weather?q=${London}&appid=${APIkey}`)
.then(function(data) {
    console.log(`
    temp: ${Math.round(data.main.temp)}
    Wind Speed: ${data.wind.speed}
    Humidity: ${data.main.humidity}%
    `);
})


// console.log(currentWeather)
// function init(){
//     searchForm.submit(function(event){
//         event.preventDefault();


//     }
//     )}