import axios from "axios";
const cors = "https://api.allorigins.win/get?url=";
const baseUrl = "https://www.metaweather.com/api/location/";

export const getDataCities = async (cityName = "lima") => {
  const res = await axios.get(
    `${cors + baseUrl + "search/?query=" + cityName}`
  );

  return JSON.parse(res.data.contents); //weather of city
};

export const getWeatherDataCity = async (woeid = 418440) => {
  const res = await axios.get(`${cors + baseUrl + woeid}/`);
  return JSON.parse(res.data.contents); //weather data of city
};
