import axios from 'axios'
import {getToken} from './index'
//获取全局的报错信息
// import {message} from 'antd';
// create an axios instance
const service = axios.create({
  baseURL: 
  // 'https://exam.jasonandjay.com',
  // 'http://169.254.32.69:8888',
  "http://123.206.55.50:8888"
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 判断是否有登陆态
    if (getToken()) {
      // 让每个请求携带authorization
      config.headers['x-nideshop-token'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    // return Promise.reject(error)
    // message.error(error.message);
  }
)

export default service