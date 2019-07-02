/**
 * ==============================
 * @description 这个文件主要用来写一些帮助函数
 * @author yxbysx
 * ==============================
 */
/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetarr, arr) => {
  return targetarr.some((_) => arr.indexOf(_) > -1);
};
/**
 * @description 刷新当前页面
 */
export const refresh = () => {
  location.reload();
};
// -------------------------------
export const set = (property) => (state, payload) => (state[property] = payload);

export const toggle = (property) => (state) => (state[property] = !state[property]);
