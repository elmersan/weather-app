import React from "react";
import styled from "styled-components";
import configStyle from "../styles/configStyle";
import media from "../styles/mediaQueries";
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
  &::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #888aa2;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    padding: 1px;
  }

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
        cursor: pointer;
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
