import React from "react";
import Icon from "@material-ui/core/Icon";
import styled from "styled-components";
import configStyle from "../styles/configStyle";

export default function Search({ handleChange }) {
  return (
    <FormStyle action="">
      <label htmlFor="text">
        <Icon>search</Icon>
        <input
          onChange={handleChange}
          id="text"
          type="text"
          placeholder="search location"
        />
      </label>
      <input className="btn-primary" type="submit" value="Search" />
    </FormStyle>
  );
}

const FormStyle = styled.form`
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
