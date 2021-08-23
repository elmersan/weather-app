import { useEffect, useState, useRef } from "react";
import Forecast from "./components/Forecast";
import Highlights from "./components/Highlights";
import Sidebar from "./components/Sidebar";
import Weather from "./components/Weather";
import GlobalStyle from "./styles/globalStyles";

function App() {
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState(false);
  const [woeid, setWoeid] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSearch = (e) => {
    console.log(e.target.defaultValue);
    setWoeid(e.target.defaultValue);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  const getData = async (woeidText) => {
    try {
      const response = await fetch(
        `https://www.metaweather.com/api/location/${
          woeidText ? woeidText : 418440
        }/`
      );
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData(woeid);
  }, [woeid]);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Sidebar
          menu={menu}
          handleMenu={handleMenu}
          handleSearch={handleSearch}
        />
        {loading ? (
          <h3>Cargando...</h3>
        ) : (
          <>
            <Weather {...data} handleMenu={handleMenu} />
            <Forecast {...data} />
            <Highlights {...data} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
