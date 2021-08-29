import { useSelector } from "react-redux";
import ForecastItem from "./ForecastItem";
import { ForecastStyle } from "../styles/components";

export default function Forecast({ unit }) {
  const dataWeather = useSelector((state) => state.weather);
  const { consolidated_weather } = dataWeather;

  if (consolidated_weather === undefined) return "";

  return (
    <ForecastStyle>
      <div className="wrapper">
        <div className="forecast-content">
          {consolidated_weather.map((item, index) =>
            index !== 0 ? (
              <ForecastItem unit={unit} key={index} {...item} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </ForecastStyle>
  );
}
