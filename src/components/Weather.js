import styled from "styled-components";
import backgroundImage from "../assets/forecast/Cloud-background.png";
import configStyle from "../styles/configStyle";
import Icon from "@material-ui/core/Icon";
import moment from "moment";
import { useSelector } from "react-redux";
import { Convert } from "../hooks/useConvert";

const ForecastImage = require.context("../assets/forecast", true);

export default function Weather({ unit, handleMenu }) {
  const dataWeather = useSelector((state) => state.weather);
  const { consolidated_weather } = dataWeather;

  if (consolidated_weather === undefined) return "";
  const { title } = dataWeather;
  const { the_temp, weather_state_name, applicable_date } =
    consolidated_weather[0];

  const nameImage = weather_state_name.replace(/ /g, "");

  return (
    <>
      {consolidated_weather ? (
        <WeatherStyle>
          <div className="wrapper" style={{ paddingInline: "0" }}>
            <div className="weather-content">
              <header>
                <button onClick={handleMenu}>Search for pleaces</button>
                <button className="icon">
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
      ) : (
        "cargando"
      )}
    </>
  );
}

export const WeatherStyle = styled.div`
  background: ${configStyle.colors.BlackSecondary};
  .weather-content {
    padding-block-start: 1.8rem;
    text-align: center;
    padding-block-end: 12.5rem;
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-inline: 1.6rem;
      button {
        cursor: pointer;
        padding-block: 1.1rem;
        padding-inline: 1.8rem;
        outline: none;
        background: ${configStyle.colors.btn};
        color: ${configStyle.colors.Gray10};
        font: ${configStyle.text.body2};
        border: 0;
      }

      .icon {
        border-radius: 50%;
        padding-block: 0.9rem;
        padding-inline: 0.9rem;
        line-height: 0;
        span {
          font-size: 2.2rem;
        }
      }
    }

    .image {
      position: relative;
      padding-block: 7.6rem 5.5rem;
      &::before {
        content: "";
        background-image: url(${backgroundImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        opacity: 5%;
        bottom: 0;
      }
      img {
        width: 15rem;
      }
    }

    .description {
      h1 {
        font: ${configStyle.text.h1};
        font-weight: 500;
        color: ${configStyle.colors.Gray10};
        margin: 0;
        span {
          font: ${configStyle.text.h2};
          font-weight: 500;
          color: ${configStyle.colors.Gray20};
        }
      }

      .point {
        padding-inline: 1.6rem;
      }

      h3 {
        font: ${configStyle.text.h3};
        font-weight: 600;
        color: ${configStyle.colors.Gray20};
      }

      p {
        font: ${configStyle.text.body1};
        color: ${configStyle.colors.Gray30};
        font-weight: 500;
      }
    }
  }
`;
