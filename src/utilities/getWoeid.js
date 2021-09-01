import axios from "axios";

export const getWoeid = async (lat, long) => {
  const res = await axios.get(
    `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`
  );
  return res.data[0].woeid; //weather data of city
};
