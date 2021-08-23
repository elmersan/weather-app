import React, { useEffect, useState } from "react";
import styled from "styled-components";
import configStyle from "../styles/configStyle";
import media from "../styles/mediaQueries";
import Icon from "@material-ui/core/Icon";
import Search from "./Search";
import CurrentData from "./CurrentData";

const Sidebar = ({ menu, handleMenu, handleSearch }) => {
  const [dataCity, setDataCity] = useState([]);
  const [textInput, setTextInput] = useState("");

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const getCity = async (name) => {
    try {
      const response = await fetch(
        `https://www.metaweather.com/api/location/search/?query=${
          name ? name : "lima"
        }`
      );
      const json = await response.json();
      setDataCity(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCity(textInput);
  }, [textInput]);

  return (
    <AsideStyle
      className={` ${menu ? "show-sidebar" : ""}`}
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

const AsideStyle = styled.aside`
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

export default Sidebar;
