import request from '../utils/request';

export function login(params) {
  let payload = {
    mobile:Number(params.mobile),
    password:Number(params.password)
  }
  return request.post('/auth/loginByMobile', payload);
}
