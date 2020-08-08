import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffy-back-end-deploy.herokuapp.com/',
});

export default api;