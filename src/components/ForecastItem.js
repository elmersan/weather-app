import React from "react";
import styled from "styled-components";
import configStyle from "../styles/configStyle";
import moment from "moment";
import { Convert } from "../hooks/useConvert";

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

const ForecastItemStyle = styled.div`
  background: ${configStyle.colors.BlackSecondary};
  max-inline-size: 12rem;
  min-inline-size: 12rem;
  min-block-size: 17.7rem;
  max-block-size: 17.7rem;
  padding-inline: 1.5rem;
  padding-block: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 0;
    color: ${configStyle.colors.Gray10};
    margin-block-end: 1rem;
    &.temp {
      margin: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    span {
      &:nth-child(2) {
        color: ${configStyle.colors.Gray20};
      }
    }
  }

  img {
    width: 5.6rem;
  }
`;
