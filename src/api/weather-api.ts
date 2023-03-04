import axios from 'axios';

const url =
  process.env.REACT_APP_WEATHER_URL ||
  'http://api.openweathermap.org/data/2.5/forecast/daily';
const apikey = process.env.REACT_APP_WEATHER_APIKEY || '<weather api key>';

const weatherApi = {
  getWeather: (cityName: string) =>
    axios.get(url, {
      params: {
        q: cityName,
        appid: apikey,
      },
    }),
};

export default weatherApi;
