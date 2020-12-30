import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.ENV.API;

export const fetchWether = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metrics',
      APPID: API_KEY,
    },
  });

  return data;
};
