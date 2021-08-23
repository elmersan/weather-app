import React from "react";
import styled from "styled-components";
import ForecastItem from "./ForecastItem";

export default function Forecast({ consolidated_weather = [] }) {
  return (
    <ForecastStyle>
      <div className="wrapper">
        <div className="forecast-content">
          {consolidated_weather.map((item, index) =>
            index !== 0 ? <ForecastItem key={index} {...item} /> : ""
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
  }
`;
