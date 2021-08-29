import axios from "axios";

(function () {
  var cors_api_host = "cors-anywhere.herokuapp.com";
  var cors_api_url = "https://" + cors_api_host + "/";
  var slice = [].slice;
  var origin = window.location.protocol + "//" + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    var args = slice.call(arguments);
    var targetOrigin = /^https?:\/\/([^\\/]+)/i.exec(args[1]);
    if (
      targetOrigin &&
      targetOrigin[0].toLowerCase() !== origin &&
      targetOrigin[1] !== cors_api_host
    ) {
      args[1] = cors_api_url + args[1];
    }
    return open.apply(this, args);
  };
})();

const baseUrl = "https://www.metaweather.com/api/location/";

export const getDataCities = async (cityName = "lima") => {
  const res = await axios.get(`${baseUrl + "search/?query=" + cityName}`);
  return res.data; //weather of city
};

export const getWeatherDataCity = async (woeid = 418440) => {
  const res = await axios.get(`${baseUrl + woeid}/`);
  return res.data; //weather data of city
};
