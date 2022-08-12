window.addEventListener("load", function () {
    // Load default weather using my favorite zip code
    getWeather("08854");

    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const input = document.querySelector(".search-bar").value;

        try {
            getWeather(input);
            form.reset();
        } catch (error) {
            console.log(`Error Message: ${error.message}`);
        }
    });
});