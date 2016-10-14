import axios from 'axios';


const OPEN_WEATHER_MAP_URL = 'api.openweathermap.org/data/2.5/weather?appid=6cd94dcc8ec0775500ae8ba5cad6841e&units=metric';


export default {
  getTemp: function (location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      console.log(res);
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
        throw new Error(res);
    });
  }
}
