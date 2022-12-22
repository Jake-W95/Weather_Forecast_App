# Weather_Forecast_App
### Application that gives weather data pulled from an API for specific cities, as searched by the user.

#### Live Site: https://jake-w95.github.io/Weather_Forecast_App/

The page loads current data (seen at the top of the page) as well as a 5 day forecast (displayed below in 4 blocks covering the day);
User searches are saved to local storage and loaded back into the search history when the page is re-opened.

The page worked well, but I somehow managed to delete some code at the very end of the process, in rewriting this I couldn't get all of the functionality to return:

1. Buttons loaded from local storage will *only* work once a new search has been made, if the user has not searched for a city since loading the page the buttons will not function.
2. After the first search (with nothing in local storage), the user needs to press enter a *second* time for the button to be added to history.
3. When loading buttons from local storage commas are loaded between each, causing styling errors. 

![](https://github.com/Jake-W95/Weather_Forecast_App/blob/master/Working%20site....png)
