import { getWeatherDataCity } from "../../services/weather";

export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case "@weather/init_city_weather":
      return action.payload;
    case "@weather/city_weather":
      return action.payload;
    default:
      return state;
  }
};
export const initDataCityWeather = () => {
  return async (dispatch) => {
    const weather = await getWeatherDataCity();
    dispatch({
      type: "@weather/city_weather",
      payload: weather,
    });
  };
};

export const getDataCityWeatherByWoeid = (woeid) => {
  return async (dispatch) => {
    const weather = await getWeatherDataCity(woeid);
    dispatch({
      type: "@weather/city_weather",
      payload: weather,
    });
  };
};
