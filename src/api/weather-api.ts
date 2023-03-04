import axios from 'axios';
import WeatherModel from '../models/weather-model';

const url =
  process.env.REACT_APP_WEATHER_URL ||
  'https://api.openweathermap.org/data/2.5/weather';
const apikey = process.env.REACT_APP_WEATHER_APIKEY || '<weather api key>';

const weatherApi = {
  getWeather: (cityName: string) =>
    axios
      .get(url, {
        params: {
          q: cityName,
          appid: apikey,
        },
      })
      .then((res) => res.data as WeatherModel),
};

export default weatherApi;
