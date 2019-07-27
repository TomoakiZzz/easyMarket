import request from '../utils/request';
export function addAddress(params) {
  console.log(params)
  return request.post('/address/save', params);
}