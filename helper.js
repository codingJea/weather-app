const key = "f423b544ccb360d9ad3811e6cc03b002";

function convertToFahr(temp) {
    return Math.round(((temp * (9 / 5)) + 32));
}

// Updated HTML with a min length,  max length, & required attributes
// No longer needed :)
/* function validateInput(input) {
    if (input === "") {
        return 'Empty';
    } else if (isNaN(input)) {
        return 'Not a Number';
    } else if (input.length !== 5) {
        return 'Wrong length';
    } else {
        return 'Pass';
    }
}
*/

async function getWeather(zipcode) {
    try {
        apiWeather = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=metric&appid=${key}`;

        const weatherResponse = await fetch(apiWeather);
        const weatherDetails = await weatherResponse.json();
        const { message } = weatherDetails;
        if (message !== 'undefined' && message == 'city not found') {
            alert(`City not found. Please enter another zip code.`);
            document.querySelector("form").reset();
        } else {
            displayWeather(weatherDetails);
        }
    } catch (error) {
        console.log(error);
    }
}

async function displayWeather(data) {
    const { name, wind } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const tempFahr = convertToFahr(temp);

    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = `${tempFahr}°F`;
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText = `Wind speed: ${wind.speed} km/h`;
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${description}")`;
}