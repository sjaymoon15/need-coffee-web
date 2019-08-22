import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const url = 'http://localhost:5000';
const instance = axios.create({
  baseURL: url
});

instance.interceptors.request.use(
  async config => {
    const token = cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
