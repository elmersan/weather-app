import { Icon } from "@material-ui/core";
import { useSelector } from "react-redux";
import { HighlightsStyle, ProgressStyle } from "../styles/components";

export default function Highlights() {
  const dataWeather = useSelector((state) => state.weather);
  const { consolidated_weather } = dataWeather;

  if (consolidated_weather === undefined) return "";
  const {
    wind_speed,
    wind_direction_compass,
    humidity,
    visibility,
    air_pressure,
  } = consolidated_weather[0];
  return (
    <HighlightsStyle>
      <div className="wrapper">
        <div className="highlights-content">
          <h4>Today’s Hightlights </h4>
          <div className="items">
            <div className="highlight-item">
              <p>Wind status</p>
              <p>
                {wind_speed.toFixed()}
                <span>mph</span>
              </p>
              <p>
                <Icon style={{ fontSize: "2rem" }}>explore</Icon>
                {wind_direction_compass}
              </p>
            </div>
            <div className="highlight-item">
              <p>Humidity</p>
              <p>
                {humidity}
                <span>%</span>
              </p>
              <ProgressStyle className="progress" style={{ padding: "0" }}>
                <div>
                  <span>0</span>
                  <span>50</span>
                  <span>100</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-percentage"
                    style={{ width: `${humidity}%` }}
                  ></div>
                </div>
                <div>
                  <span>%</span>
                </div>
              </ProgressStyle>
            </div>
            <div className="highlight-item">
              <p>Visibility</p>
              <p>
                {visibility.toFixed(1)}
                <span> miles</span>
              </p>
            </div>
            <div className="highlight-item">
              <p>Air Pressure</p>
              <p>
                {air_pressure}
                <span> mb</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </HighlightsStyle>
  );
}
