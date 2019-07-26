const key = 'x-nideshop-token'
// 设置cookie, 过期时间为十个小时
export function setToken(val){
  let date = new Date();
  let expires = date.getTime() + 10*60*60*1000;
  date.setTime(expires);

  window.localStorage.setItem(key, val, {expires: date})
}

// 读取cookie
export function getToken(){
  return window.localStorage.getItem(key)
}

// 删除cookie
export function removeToken(){
  window.localStorage.removeItem(key)
}