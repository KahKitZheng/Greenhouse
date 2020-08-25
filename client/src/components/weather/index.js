import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

/* Layout components */
import Container from "components/layout/Container";
import Loading from "components/layout/Loading";
import Divider from "components/layout/Divider";

/* Weather components */
import CurrentWeather from "components/weather/CurrentWeather";
import HourlyForecast from "components/weather/HourlyForecast";
import DailyForecast from "components/weather/DailyForecast";

const Plants = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      /* latitude and longitude for Amsterdam */
      const lat = "52.3667";
      const lon = "4.8945";
      const units = "metric";

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&
  exclude=minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
        { "Content-Type": "application/json" }
      );

      setWeatherData(response.data);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {weatherData.current === undefined || weatherData.hourly === null ? (
        <div className="flex flex-col h-full">
          <Loading />
        </div>
      ) : (
        <Fragment>
          <CurrentWeather data={weatherData.current} />
          <Divider />
          <HourlyForecast data={weatherData.hourly} />
          <Divider />
          <DailyForecast data={weatherData.daily} />
          <Divider />
        </Fragment>
      )}
    </Container>
  );
};

export default Plants;
