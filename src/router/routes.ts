import Main from '@/components/main';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
    meta: {
      access: ['工人'],
    },
  },
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: Main,
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('../views/home'),
      meta: {
        access: ['工人'],
      },
    }, ]
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    meta: {
      access: ['工人'],
    },
    component: Main,
    children: [{
      path: '/user',
      name: 'user',
      component: () => import('../views/user'),
      meta: {
        access: ['工人'],
      },
    }, ]
  },
  {
    path: '/report',
    name: 'report',
    component: () => import('../views/report'),
    meta: {
      access: ['财务'],
    },
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test'),
    meta: {
      access: ['工人'],
    },
  },
  {
    path: '/error401',
    name: 'error401',
    component: () => import('../views/errorPage/401'),
    meta: {
      access: ['工人'],
    },
  },
];

export default routes;
