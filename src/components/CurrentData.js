import React from "react";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import configStyle from "../styles/configStyle";

export default function CurrentData({ handleSearch, dataCity }) {
  return (
    <DataListStyle id="datalist_city">
      {dataCity.map((city) => (
        <label key={city.woeid} htmlFor={city.title}>
          <span className="value">{city.title}</span>
          <input
            onClick={handleSearch}
            type="radio"
            name={city.title}
            id={city.title}
            value={city.woeid}
          />
          <Icon>arrow_forward_ios</Icon>
        </label>
      ))}
    </DataListStyle>
  );
}

const DataListStyle = styled.div`
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
