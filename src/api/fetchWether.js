import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '3b0afc94effac3fedf42ee23c9fcc0b4';

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
