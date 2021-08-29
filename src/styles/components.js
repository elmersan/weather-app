import styled from "styled-components";
import configStyle from "./configStyle";
import media from "./mediaQueries";
import backgroundImage from "../assets/forecast/Cloud-background.png";

export const ButtonStyle = styled.button`
  background: #585676;
  border-radius: 50%;
  padding-block: 0.9rem;
  padding-inline: 0.9rem;
  line-height: 0;
  cursor: pointer;
  font: ${configStyle.text.body1};
  font-weight: 700;
  outline: none;
  border: none;
  min-inline-size: 4rem;
  min-block-size: 4rem;
  max-block-size: 4rem;
  max-inline-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UnitStyle = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
  padding-block-start: 4rem;
  padding-inline-end: 6rem;
  .active {
    background: ${configStyle.colors.Gray10};
  }
`;

export const HighlightsStyle = styled.div`
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

export const ProgressStyle = styled.div`
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

export const DataListStyle = styled.div`
  &,
  label {
    display: flex;
  }
  flex-direction: column;
  label {
    justify-content: space-between;
    align-items: center;
    padding-block: 2.2rem;
    padding-inline: 1.2rem;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid transparent;
    &:hover {
      transition: ${configStyle.transition.smoot};
      border: 1px solid ${configStyle.colors.Gray10};
      box-sizing: border-box;
    }
    input {
      opacity: 0;
    }
    span.value {
      color: ${configStyle.colors.Gray10};
      font: ${configStyle.text.body2};
    }
    span {
      &:nth-last-child(1) {
        color: ${configStyle.colors.Gray40};
      }
    }
  }
`;

export const FooterStyle = styled.div`
  padding-block: 2rem;
  text-align: center;
  p {
    color: ${configStyle.colors.Gray10};
    span {
      font-weight: 700;
    }
  }
`;

export const ForecastStyle = styled.div`
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

export const ForecastItemStyle = styled.div`
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

export const FormStyle = styled.form`
  &,
  label {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  justify-content: space-between;
  label {
    border: 1px solid ${configStyle.colors.Gray10};
    padding-inline: 1.2rem;
    span {
      font-size: 2.4rem;
      color: ${configStyle.colors.Gray40};
    }
    input {
      background: none;
      font: ${configStyle.text.body2};
      color: ${configStyle.colors.Gray10};
      &::placeholder {
        color: ${configStyle.colors.Gray40};
      }
    }
  }
  input {
    padding-block: 1.3rem;
    background: ${configStyle.colors.Primary1};
    border: none;
    outline: none;
  }

  .btn-primary {
    padding-block: 1.4rem;
    padding-inline: 1.5rem;
    color: ${configStyle.colors.Gray10};
    font: ${configStyle.text.body2};
    font-weight: 600;
  }
`;

export const AsideStyle = styled.aside`
  background: ${configStyle.colors.BlackSecondary};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  transition: ${configStyle.transition.smoot};
  opacity: 0;
  transform: translateX(-100%);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #888aa2;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    padding: 1px;
  }

  ${media.desktop} {
    transform: translateX(-100%);
  }

  .sidebar-content {
    width: 100%;
    .search-content {
      background: ${configStyle.colors.BlackSecondary};
      position: sticky;
      top: 0;
      padding-block: 1rem 3.8rem;
    }

    p {
      text-align: end;
      button {
        cursor: pointer;
        background: no-repeat;
        color: white;
        outline: none;
        border: none;
        span {
          font-size: 2.4rem;
        }
      }
    }
  }
`;

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
