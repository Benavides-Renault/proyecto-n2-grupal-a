import './assets/css/App.css';
import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';
import React from 'react';

function App() {
	return (
		<div className="App">
			<NavBar />
			<WeatherPanel />
		</div>
	);
}

export default App;
