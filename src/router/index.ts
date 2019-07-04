import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import config from '@/config';
import { isRoot } from './../lib/user';
import { LoadingBar } from 'iview';
Vue.use(Router);

const token = true;
const userAccess = ["游客"];
const router = new Router({
  // mode: 'history', 目前暂时没有部署到gitpage时针对history模式的路由映射，有机会再更改为history模式
  routes,
});

const turnTo = (to, access, next) => {
  if (isRoot(to.name, access, routes)) {
    next();
  } else {
    next({
      replace: true,
      name: config.ERROR_401_PAGE_NAME
    });
  }
};

// 实现前端路由控制和权限控制
router.beforeEach((to, from, next) => {
  // 展示加载进度条
  LoadingBar.start();
  if (!token && to.name !== config.LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: config.LOGIN_PAGE_NAME
    });
  } else if (!token && to.name === config.LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next(); // 跳转
  } else if (token && to.name === config.LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: config.HOME_PAGE_NAME
    });
  } else {
    try {
      turnTo(to, userAccess, next);
    } catch (e) {
      // console.log(e);
      next({ name: config.ERROR_404_PAGE_NAME });
    }
  }
});

router.afterEach((route) => {
  LoadingBar.finish();
});

export default router;
