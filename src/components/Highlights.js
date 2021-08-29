import { Icon } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import configStyle from "../styles/configStyle";
import media from "../styles/mediaQueries";

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

const HighlightsStyle = styled.div`
  h4 {
    text-align: start;
    font: ${configStyle.text.h4};
    ${media.desktop} {
      padding-inline-start: 4rem;
    }
  }
  color: ${configStyle.colors.Gray10};
  .highlights-content {
    padding-inline: 0.9rem;
    padding-block-end: 5rem;
    div.items {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
      flex-flow: column wrap;
      gap: 3.2rem;
      ${media.desktop} {
        flex-flow: initial;
        flex-wrap: wrap;
      }
      .highlight-item {
        background: ${configStyle.colors.BlackSecondary};
        text-align: center;
        padding-block: 2.2rem 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        ${media.desktop} {
          max-inline-size: 32.8rem;
          min-inline-size: 32.8rem;
        }
        .progress {
          div {
            padding-block: 0;
            span {
              color: ${configStyle.colors.Gray20};
              font-weight: 700;
            }
          }
          .progress-bar {
            background: ${configStyle.colors.Gray10};
            .progress-percentage {
              background: ${configStyle.colors.Primary2};
            }
          }
        }
        p {
          font-weight: 500;
          margin: 0;
          &:nth-child(1) {
            margin-block-end: 2.5rem;
          }
          &:nth-child(2) {
            font-size: 6.4rem;
            font-weight: 700;
            margin-block-end: 3.1rem;
            span {
              font: ${configStyle.text.h3};
              font-weight: 500;
            }
          }
          &:nth-child(3) {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
          }
        }
        &:nth-child(3),
        &:nth-child(4) {
          p {
            &:nth-child(2) {
              margin-block-end: 0;
            }
          }
        }
      }
    }
  }
`;

const ProgressStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  div {
    max-inline-size: 22.9rem;
    width: 100%;
    &:nth-child(1) {
      display: flex;
      justify-content: space-between;
    }
    &:nth-child(3) {
      span {
        float: right;
      }
    }
  }
  .progress-bar,
  .progress-percentage {
    border-radius: 8rem;
    height: 0.8rem;
  }
  .progress-bar {
    .progress-percentage {
      width: 84%;
    }
  }
`;
