import React from "react";
import iconPicker from "utils/iconPicker";

const convertTimestamp = (timestamp) => {
  const dateObject = new Date(timestamp * 1000);
  const humanDateFormat = dateObject.toLocaleString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return humanDateFormat;
};

const HourlyForecast = ({ data }) => {
  return (
    <div className="grid grid-flow-col overflow-x-auto no-scroll lg:mx-6">
      {data.slice(0, 24).map((hour) => (
        <div className="w-12 mr-6 lg:mr-10 last:mr-0 font-semibold flex flex-col items-center justify-center">
          <p className="text-md text-gray-600">{convertTimestamp(hour.dt)}</p>
          <img
            className="h-16 w-16"
            src={iconPicker(hour.weather[0].icon)}
            alt=""
          />
          <p className="text-sm text-gray-600">{Math.round(hour.temp)} °C</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
