/**
 * ==============================
 * @description 和用户相关的方法和接口
 * @author yxbysx
 * ==============================
 */


import { hasOneOf } from './lib';
import {test} from '@/api/test';

export interface UserInfo {
  email?: string;
  userName: string;
  password: string;
}

export const login = async (userinfo: UserInfo) => {
  const res = await test();
  return res;
};

export const logout = async (userinfo: UserInfo) => {
  const res = await test();
  return res;
};

export const updateInfo = async (userinfo: UserInfo) => {
  const res = await test();
  return res;
};

export const getToken = () => {
  // 获取token
};

export const getAccess = () => {
  // 获取用户的角色数组
};

/**
 * 权鉴
 * @param {name} 即将跳转的路由name
 * @param {access} 用户权限数组
 * @param {routes} 路由列表
 * @description 用户是否可跳转到该页，通过递归路由列表
 */
export const isRoot = (name, access, routes) => {
  const routePermissionJudge = (list) => {
    return list.some(((item) => {
      if (item.children && item.children.length) {
        return routePermissionJudge(item.children);
      } else if (item.name === name) {
        return hasAccess(access, item);
      }
    }));
  };
  return routePermissionJudge(routes);
};

/**
 * @description 如果用户数组中包含access中的角色，那么允许有权限访问
 * @param {access} 用户角色数组，如 ['工人', '财务']
 * @param {route} 路由列表
 */
const hasAccess = (access, route) => {
  if (route.meta && route.meta.access) { return hasOneOf(route.meta.access, access); } else { return true; }
};
