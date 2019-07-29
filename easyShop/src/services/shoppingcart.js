import request from '../utils/request';
//获取所有购物车商品
export function getShopping() {
  return request.get('/cart/index');
}
//购物车商品是否选中
export function checkedShopping(params) {
  return request.post('/cart/checked',params);
}