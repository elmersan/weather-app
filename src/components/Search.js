import Icon from "@material-ui/core/Icon";
import { FormStyle } from "../styles/components";

export default function Search({ handleChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <FormStyle onSubmit={handleSubmit}>
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
