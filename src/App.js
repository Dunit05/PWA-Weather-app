import React, { useState } from 'react';
import { fetchWether } from './api/fetchWether';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWether] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWether(query);

      setWether(data);
      setQuery('');
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search Your Wether Here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp) / 10}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
