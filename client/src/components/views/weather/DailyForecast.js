import React from "react";
import iconPicker from "utils/iconPicker";

const convertTimestamp = (timestamp) => {
  const dateObject = new Date(timestamp * 1000);
  const humanDateFormat = dateObject.toLocaleString("en-NL", {
    weekday: "short",
  });

  return humanDateFormat;
};

const DailyForecast = ({ data }) => {
  return (
    <div>
      <div className="grid grid-flow-col lg:flex lg:items-center lg:justify-between overflow-x-auto no-scroll lg:mx-6">
        {data.map((day) => (
          <div
            key={day.dt}
            className="w-16 lg:w-24 mr-6 lg:mr-0 last:mr-0 font-semibold flex flex-col items-center justify-start lg:justify-center"
          >
            <p className="text-md text-gray-600">{convertTimestamp(day.dt)}</p>
            <img
              className="h-12 w-12"
              src={iconPicker(day.weather[0].icon)}
              alt=""
            />
            <p className="text-sm text-gray-600 text-center leading-5">
              {day.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
