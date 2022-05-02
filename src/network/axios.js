import axios from "axios";

const http = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/hy66'
});

// 请求
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default http