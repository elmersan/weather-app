import axios from "axios";

const baseUrl = "https://www.metaweather.com/api/location/";

export const getDataCities = async (cityName = "lima") => {
  const res = await axios.get(`${baseUrl + "search/?query=" + cityName}`);
  return res.data; //weather of city
};

export const getWeatherDataCity = async (woeid = 418440) => {
  const res = await axios.get(`${baseUrl + woeid}/`);
  return res.data; //weather data of city
};
