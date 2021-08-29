import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import media from "../styles/mediaQueries";
import ForecastItem from "./ForecastItem";

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

const ForecastStyle = styled.div`
  .forecast-content {
    padding-inline: 3.9rem;
    padding-block: 5.2rem;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.5rem;
    ${media.desktop} {
      justify-content: center;
    }
  }
`;
