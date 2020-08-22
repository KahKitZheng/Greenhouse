import DAY_CLEAR_SKY from "icons/weather_icons-10.svg";
import NIGHT_CLEAR_SKY from "icons/weather_icons-06.svg";
import DAY_FEW_CLOUDS from "icons/weather_icons-17.svg";
import NIGHT_FEW_CLOUDS from "icons/weather_icons-18.svg";
import SCATTERED_CLOUDS from "icons/weather_icons-16.svg";
import BROKEN_CLOUDS from "icons/weather_icons-42.svg";
import SHOWER_RAIN from "icons/weather_icons-22.svg";
import DAY_RAIN from "icons/weather_icons-20.svg";
import NIGHT_RAIN from "icons/weather_icons-21.svg";
import THUNDERSTORM from "icons/weather_icons-28.svg";
import SNOW from "icons/weather_icons-68.svg";
import MIST from "icons/weather_icons-61.svg";
import WEATHER_VANE from "icons/weather_icons-67.svg";

const iconPicker = (icon) => {
  switch (icon) {
    case "01d":
      return DAY_CLEAR_SKY;
    case "01n":
      return NIGHT_CLEAR_SKY;
    case "02d":
      return DAY_FEW_CLOUDS;
    case "02n":
      return NIGHT_FEW_CLOUDS;
    case "03d":
      return SCATTERED_CLOUDS;
    case "03n":
      return SCATTERED_CLOUDS;
    case "04d":
      return BROKEN_CLOUDS;
    case "04n":
      return BROKEN_CLOUDS;
    case "09d":
      return SHOWER_RAIN;
    case "09n":
      return SHOWER_RAIN;
    case "10d":
      return DAY_RAIN;
    case "10n":
      return NIGHT_RAIN;
    case "11d":
      return THUNDERSTORM;
    case "11n":
      return THUNDERSTORM;
    case "13d":
      return SNOW;
    case "13n":
      return SNOW;
    case "50d":
      return MIST;
    case "50n":
      return MIST;
    default:
      return WEATHER_VANE;
  }
};

export default iconPicker;
