import request from '../utils/request';
export function defaultSearch() {
  return request.get('/search/index');
}
export function clearSearchHistory() {
  return request.get('/search/clearhistory');
}
export function searchGoodsLists(params) {
  return request.get('/goods/list',{params});
}
export function fuzzySearch (params) {
  return request.get('/search/helper',{params});
}