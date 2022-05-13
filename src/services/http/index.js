import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

// api.interceptors.request.use(config, error)

// function config(conf) {
//   conf.headers.Authorization = `Bearer ${token}`;
//   return conf;
// }

// function error(err) {
//   return Promise.reject(err);
// }

export default api
