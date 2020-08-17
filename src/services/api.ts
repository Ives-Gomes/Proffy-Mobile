import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.0.17:3333',
  baseURL: 'https://proffy-ives.herokuapp.com/',
});

export default api;
