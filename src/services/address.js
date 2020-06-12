import request from '../utils/request';
export function addAddress(params) {
  return request.post('/address/save', params);
}
export function getAddress() {
  return request.get('/address/list');
}
export function delAddress(params) {
  return request.post('/address/delete',params);
}