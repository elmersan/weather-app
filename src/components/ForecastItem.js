import React from "react";
import styled from "styled-components";
import configStyle from "../styles/configStyle";
import moment from "moment";

const ForecastImage = require.context("../assets/forecast", true);

export default function ForecastItem({
  max_temp,
  min_temp,
  weather_state_name,
  applicable_date,
}) {
  console.log(weather_state_name.replace(/ /g, ""));
  const nameImage = weather_state_name.replace(/ /g, "");
  return (
    <ForecastItemStyle>
      <p>{moment(applicable_date).format("ddd,D MMM ")}</p>
      <img src={ForecastImage(`./${nameImage}.png`).default} alt="heavy rain" />
      <p className="temp">
        <span>{max_temp.toFixed()}°C</span>
        <span>{min_temp.toFixed()}°C</span>
      </p>
    </ForecastItemStyle>
  );
}

const ForecastItemStyle = styled.div`
  background: ${configStyle.colors.BlackSecondary};
  max-inline-size: 12rem;
  min-inline-size: 12rem;
  padding-inline: 1.5rem;
  padding-block: 1.6rem;
  text-align: center;
  p {
    margin: 0;
    color: ${configStyle.colors.Gray10};
    margin-block-end: 1rem;
    &.temp {
      margin: 0;
      margin-block-start: 3rem;
      display: flex;
      justify-content: space-between;
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
