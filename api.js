document.addEventListener('DOMContentLoaded', () => {
    const apiKey = "6779da2110e48c4a053b633643fb2bf4";  // Your actual API key
    const searchbox = document.querySelector(".search-bar .search-box input");  // Search input field
    const searchbtn = document.querySelector(".search-bar .search-btn img");  // Search button
    const weathericon = document.querySelector(".weather-img");  // Weather icon image

    // Function to fetch weather data
    async function checkWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);  // Fetch the weather data from API
        const data = await response.json();  // Parse the JSON response

        console.log(data);  // Log the data for debugging

        // Update the HTML with the fetched weather data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity-percentage").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-text").innerHTML = data.wind.speed + " km/h";

        // Update the weather icon based on the weather condition
        // if (data.weather[0].main === 'Clear') {
        //     weathericon.src="clear.png";
        // } else if (data.weather[0].main === 'Rain') {
        //     weathericon.src="rain.jpg";
        // } else if (data.weather[0].main === 'Drizzle') {
        //     weathericon.src="drizzle.jpg";  
        // } else if (data.weather[0].main === 'Mist') {
        //     weathericon.src="mist.png";
        // } 
    }

    // Add event listener to the search button
    searchbtn.addEventListener("click", () => {
        checkWeather(searchbox.value);  // Call checkWeather when the button is clicked
    });
});
