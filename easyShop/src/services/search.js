import request from '../utils/request';
export function addAddress(params) {
  return request.get('/search/helper', params);
}
