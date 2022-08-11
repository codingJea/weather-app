const apiKey = "f423b544ccb360d9ad3811e6cc03b002";

function convertToFahr(temp) {
    return Math.round(((temp * (9/5)) + 32));
}
let weather = {
    fetchWeather: function (zipcode) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=metric&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        const tempFahr = convertToFahr(temp);
        
        document.querySelector(".city").innerText = `Weather in ${name}`;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = `${tempFahr}°F`;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
        document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h`;
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${description}")`;

    },
    search: function () {
        let input = document.querySelector(".search-bar");
        this.fetchWeather(input.value);

        // Reset input value in search bar
        input.value = "";
    }
}

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("08854");