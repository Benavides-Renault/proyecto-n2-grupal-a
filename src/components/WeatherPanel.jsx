import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';

const WeatherPanel = () => {
	const apiKey = '069fa9fea6491fe512d4b7adb401a9e9';
	const urlWeatherBase =
		'https://api.openweathermap.org/data/2.5/weather?appid=';
	const cityUrl = '&q=';
	const urlForecastBase =
		'https://api.openweathermap.org/data/2.5/forecast?appid=';

	const [weather, setWeather] = useState([]);
	const [forecast, setForecast] = useState([]);
	const [loading, setLoading] = useState(false);
	const [show, setShow] = useState(false);
	const [location, setLocation] = useState('');

	const getLocation = async (loc) => {
		setLoading(true);
		setLocation(loc);

		const urlWeather = `${urlWeatherBase}${apiKey}&lang=es${cityUrl}${loc}`;
		const urlForecast = `${urlForecastBase}${apiKey}&lang=es${cityUrl}${loc}`;

		try {
			const weatherResponse = await fetch(urlWeather);
			if (!weatherResponse.ok) throw new Error('Weather data fetch failed');
			const weatherData = await weatherResponse.json();
			setWeather(weatherData);

			const forecastResponse = await fetch(urlForecast);
			if (!forecastResponse.ok) throw new Error('Forecast data fetch failed');
			const forecastData = await forecastResponse.json();
			setForecast(forecastData);

			setLoading(false);
			setShow(true);
		} catch (error) {
			console.log(error);
			setLoading(false);
			setShow(false);
		}
	};

	return (
		<React.Fragment>
			<Form newLocation={getLocation} />
			<Card
				showData={show}
				loadingData={loading}
				weather={weather}
				forecast={forecast}
				location={location}
			/>
		</React.Fragment>
	);
};

export default WeatherPanel;
