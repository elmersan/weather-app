import { AsideStyle } from "../styles/components";
import Icon from "@material-ui/core/Icon";
import Search from "./Search";
import CurrentData from "./CurrentData";
import { useDispatch, useSelector } from "react-redux";
import { initWeather } from "../redux/reducers/citiesReducer";

const Sidebar = ({ handleSearch, menu, handleMenu }) => {
  const dispatch = useDispatch();
  const dataCity = useSelector((state) => state.cities);
  const handleChange = (e) => {
    dispatch(initWeather(e.target.value));
  };

  return (
    <AsideStyle
      className={`aside ${menu ? "show-sidebar" : ""}`}
      style={{ zIndex: "1" }}
    >
      <div className="wrapper">
        <div className="sidebar-content">
          <div className="search-content">
            <p>
              <button onClick={handleMenu}>
                <Icon>close</Icon>
              </button>
            </p>
            <Search handleChange={handleChange} />
          </div>
          <CurrentData handleSearch={handleSearch} dataCity={dataCity} />
        </div>
      </div>
    </AsideStyle>
  );
};

export default Sidebar;
