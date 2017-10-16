// key 是常量，localStorage的key
export const KEY = 'goodsdata';
export var valueObj = {goodsId:0,count:0};
export function setItem(value) {
  var jsonStr = localStorage.getItem(KEY);
  jsonStr = jsonStr || '[]';
  var arr = JSON.parse(jsonStr);
  arr.push(value);
  localStorage.setItem(KEY,JSON.stringify(arr));
}
export function getItem() {
  var jsonStr = localStorage.getItem(KEY);
  jsonStr = jsonStr || '[]';
  return JSON.parse(jsonStr);
}

