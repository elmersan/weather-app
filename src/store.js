import { citiesReducer } from "./redux/reducers/citiesReducer";
import { weatherReducer } from "./redux/reducers/weatherReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//store
const reducer = combineReducers({
  cities: citiesReducer,
  weather: weatherReducer,
});
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
