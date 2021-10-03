# weather-dashboard

check out the weather dashboard at : https://cpysden-coder.github.io/weather-dashboard/

<img width="751" alt="Screen Shot 2021-10-02 at 8 29 59 PM" src="https://user-images.githubusercontent.com/65201372/135738358-ed4c8093-834c-4a83-9738-63391b04bd6f.png">

User Story
- AS A traveler
- - I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

Acceptance Criteria
- GIVEN a weather dashboard with form inputs
- WHEN I search for a city
- [ ] THEN I am presented with current and future conditions for that city and that city is added to the search history
- WHEN I view current weather conditions for that city
- [ ] THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
- WHEN I view the UV index
- [ ] THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
- WHEN I view future weather conditions for that city
- [ ] THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
- WHEN I click on a city in the search history
- [ ] THEN I am again presented with current and future conditions for that city

While most elements of the user story and acceptance criteria are implemented, I did not did not provide updates to all 5 days in the forecast, although the same api is used to post the first day forecast. Also, additional work is needed for the links that are added to the page under the search bar. It currently links to the api and does not rerun the code to reproduce the data. These would be the major improvements required for future releases.