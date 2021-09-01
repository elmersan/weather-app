import Icon from "@material-ui/core/Icon";
import moment from "moment";
import { useSelector } from "react-redux";
import { Convert } from "../hooks/useConvert";
import { WeatherStyle } from "../styles/components";

const ForecastImage = require.context("../assets/forecast", true);

export default function Weather({ unit, handleMenu, getLocation }) {
  const dataWeather = useSelector((state) => state.weather);
  const { consolidated_weather } = dataWeather;

  if (consolidated_weather === undefined) return "";
  const { title } = dataWeather;
  const { the_temp, weather_state_name, applicable_date } =
    consolidated_weather[0];

  const nameImage = weather_state_name.replace(/ /g, "");

  return (
    <>
      <WeatherStyle>
        <div className="wrapper" style={{ paddingInline: "0" }}>
          <div className="weather-content">
            <header>
              <button onClick={handleMenu}>Search for pleaces</button>
              <button className="icon" onClick={getLocation}>
                <Icon>my_location</Icon>
              </button>
            </header>
            <div></div>
            <div className="image">
              <img
                src={ForecastImage(`./${nameImage}.png`).default}
                alt="heavy rain"
              />
            </div>
            <div className="description">
              <h1>
                {unit ? (
                  <>
                    {Convert(the_temp)}
                    <span>°F</span>
                  </>
                ) : (
                  <>
                    {the_temp.toFixed()}
                    <span>°C</span>
                  </>
                )}
              </h1>
              <h3>{weather_state_name}</h3>
              <p>
                <span>Today</span>
                <span className="point">•</span>
                {moment(applicable_date).format("ddd,D MMM ")}
              </p>
              <p style={{ fontWeight: "600" }}>
                <Icon>place</Icon>
                {title}
              </p>
            </div>
          </div>
        </div>
      </WeatherStyle>
    </>
  );
}
