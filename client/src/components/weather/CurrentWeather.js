import React from "react";
import iconPicker from "utils/iconPicker";
import Line from "components/line";

const CurrentWeather = ({ data }) => {
  const {
    weather,
    temp,
    humidity,
    feels_like,
    wind_speed,
    visibility,
    clouds,
    pressure,
  } = data;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:my-32">
      <div className="flex flex-col items-center justify-center lg:flex-grow">
        <img
          className="hidden lg:block"
          src={iconPicker(weather[0].icon)}
          alt=""
        />
        <p className="font-black text-6xl lg:text-7xl leading-none mt-8 lg:mt-0">
          {Math.round(temp)}°C
        </p>
        <p className="font-medium text-gray-800 lg:text-3xl mt-4">
          Amsterdam / {weather[0].description}
        </p>
      </div>

      <Line className="lg:hidden" />

      <div>
        <ul className="grid grid-cols-2 grid-rows-3 gap-6 h-full w-full">
          <li className="flex flex-col font-semibold">
            <span className="text-sm lg:text-md text-gray-600">Wind speed</span>
            <span className="text-lg lg:text-xl text-gray-800">
              {wind_speed} km/h
            </span>
          </li>
          <li className="flex flex-col font-semibold">
            <span className="text-sm lg:text-md text-gray-600">
              Perceived temperature
            </span>
            <span className="text-lg lg:text-xl text-gray-800">
              {Math.round(feels_like)}°C
            </span>
          </li>
          <li className="flex flex-col font-semibold">
            <span className="text-sm lg:text-md text-gray-600">Humidity</span>
            <span className="text-lg lg:text-xl text-gray-800">
              {humidity}%
            </span>
          </li>
          <li className="flex flex-col font-semibold">
            <span className="text-sm lg:text-md text-gray-600">Visibility</span>
            <span className="text-lg lg:text-xl text-gray-800">
              {visibility / 1000} km
            </span>
          </li>
          <li className="flex flex-col font-semibold">
            <span className="text-sm lg:text-md text-gray-600">Clouds</span>
            <span className="text-lg lg:text-xl text-gray-800">{clouds}%</span>
          </li>
          <li className="flex flex-col font-semibold">
            <span className="text-sm lg:text-md text-gray-600">Pressure</span>
            <span className="text-lg lg:text-xl text-gray-800">
              {pressure} hPa
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentWeather;
