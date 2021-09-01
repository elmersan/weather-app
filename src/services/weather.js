import axios from "axios";

export const getDataCities = async (cityName = "lima") => {
  const res = await axios.get(`${"/search/?query=" + cityName}`);
  return res.data; //weather of city
};

export const getWeatherDataCity = async (woeid = 418440) => {
  const res = await axios.get(`/${woeid}/`);
  return res.data; //weather data of city
};
