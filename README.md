# Weather App

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

![Website Preview](/weather-app-preview.png)

Welcome to the Weather App! This is a web application that allows you to check the current weather for any entered zip code.

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can experience a live demo of the website [here](https://jeaparker.github.io/weather-app/).

## Installation

1. Clone the repository: `git clone https://github.com/jeaparker/weather-app.git`
2. Navigate to the project directory: `cd weather-app`
3. Install dependencies: `npm install`

## Usage

1. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api).
2. Create a `.env` file in the project root and add your API key: `API_KEY=your_api_key_here`
3. Run the app: `npm start`
4. Open your web browser and navigate to `http://localhost:3000`.
5. Enter a zip code in the provided input field and click "Get Weather."

The app will fetch and display the current weather information for the entered zip code using the OpenWeatherMap API.

## API Key

To access the OpenWeatherMap API, you'll need an API key. You can sign up for a free account on the [OpenWeatherMap website](https://openweathermap.org/api) to obtain your API key.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request. Please follow the existing code style and guidelines.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-new-feature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-new-feature`
5. Create a pull request explaining your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
