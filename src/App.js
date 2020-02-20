import React from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <WeatherLocation/>
    </div>
  );
}

export default App;
