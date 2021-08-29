import Icon from "@material-ui/core/Icon";
import { DataListStyle } from "../styles/components";

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
