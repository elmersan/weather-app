import moment from "moment";
import { Convert } from "../hooks/useConvert";
import { ForecastItemStyle } from "../styles/components";

const ForecastImage = require.context("../assets/forecast", true);

export default function ForecastItem({
  unit,
  max_temp,
  min_temp,
  weather_state_name,
  applicable_date,
}) {
  const nameImage = weather_state_name.replace(/ /g, "");
  return (
    <ForecastItemStyle>
      <p>{moment(applicable_date).format("ddd,D MMM ")}</p>
      <img src={ForecastImage(`./${nameImage}.png`).default} alt="heavy rain" />
      <p className="temp">
        {unit ? (
          <>
            <span>{Convert(max_temp)}°F</span>
            <span>{Convert(min_temp)}°F</span>
          </>
        ) : (
          <>
            <span>{max_temp.toFixed()}°C</span>
            <span>{min_temp.toFixed()}°C</span>
          </>
        )}
      </p>
    </ForecastItemStyle>
  );
}
