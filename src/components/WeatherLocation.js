import React from 'react'
import Location from './Location';
import WeatherData from './WeatherData';
import WeatherIcons from 'react-weathericons'

const WeatherLocation = () => {
  return (
    <div>
      <WeatherIcons name="day-sunny" size="2x" />
      <Location city={"Buenos Aires"} />
      <WeatherData />
    </div>
  )
}

export default WeatherLocation
