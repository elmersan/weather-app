import { UnitStyle, ButtonStyle } from "../styles/components";

export default function UnitSelector({ unit, handleUnit }) {
  return (
    <UnitStyle>
      <ButtonStyle className={unit ? "" : "active"} onClick={handleUnit}>
        <span>°C</span>
      </ButtonStyle>
      <ButtonStyle className={unit ? "active" : ""} onClick={handleUnit}>
        <span>°F</span>
      </ButtonStyle>
    </UnitStyle>
  );
}
