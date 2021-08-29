import { useEffect } from "react";
import Forecast from "./components/Forecast";
import Highlights from "./components/Highlights";
import Sidebar from "./components/Sidebar";
import Weather from "./components/Weather";
import Footer from "./components/footer";
import GlobalStyle from "./styles/globalStyles";
import { useDispatch } from "react-redux";
import { initWeather } from "./redux/reducers/citiesReducer";
import { useToggle } from "./hooks/useToggle";
import {
  getDataCityWeatherByWoeid,
  initDataCityWeather,
} from "./redux/reducers/weatherReducer";
import UnitSelector from "./components/UnitSelector";
import Loading from "./components/Loading";

function App() {
  const [menu, handleMenu] = useToggle();
  const [loading, setLoading] = useToggle();
  const [unit, handleUnit] = useToggle();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initWeather());
    dispatch(initDataCityWeather());
    setTimeout(() => {
      setLoading();
    }, 2000);
  }, [dispatch, setLoading]);

  const handleSearch = (e) => {
    dispatch(getDataCityWeatherByWoeid(e.target.defaultValue));
    handleMenu();
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Loading loading={loading} />
        <div className="wrapper" style={{ padding: "0" }}>
          <Sidebar
            handleSearch={handleSearch}
            menu={menu}
            handleMenu={handleMenu}
          />

          <div className="weather-dashboard">
            <Weather unit={unit} handleMenu={handleMenu} />
            <div className="content-data">
              <UnitSelector unit={unit} handleUnit={handleUnit} />
              <Forecast unit={unit} />
              <Highlights />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
