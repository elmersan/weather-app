import styled from "styled-components";
import configStyle from "../styles/configStyle";

export default function UnitSelector({ unit, handleUnit }) {
  return (
    <UnitStyle>
      <button className={unit ? "" : "active"} onClick={handleUnit}>
        <span>°C</span>
      </button>
      <button className={unit ? "active" : ""} onClick={handleUnit}>
        <span>°F</span>
      </button>
    </UnitStyle>
  );
}

const UnitStyle = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
  padding-block-start: 4rem;
  padding-inline-end: 6rem;
  button {
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
  }

  .active {
    background: ${configStyle.colors.Gray10};
  }
`;
