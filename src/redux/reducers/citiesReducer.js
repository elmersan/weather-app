import { getDataCities } from "../../services/weather";

export const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case "@weather/init":
      return action.payload;
    default:
      return state;
  }
};

export const initWeather = (nameCity) => {
  return async (dispatch) => {
    const cities = await getDataCities(nameCity);
    dispatch({
      type: "@weather/init",
      payload: cities,
    });
  };
};
