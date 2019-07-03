import Main from '@/components/main';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
    meta: {
      access: ['游客'],
    },
  },
  {
    path: '/',
    name: '/',
    meta: {
      access: ['游客'],
    },
    component: () => import('../views/home'),
  },
  // {
  //   path: '/',
  //   name: '/',
  //   redirect: '/home',
  //   component: Main,
  //   children: [{
  //     path: '/home',
  //     name: 'home',
  //     component: () => import('../views/home'),
  //     meta: {
  //       access: ['工人'],
  //     },
  //   }, ]
  // },
  {
    path: '/error404',
    name: 'error404',
    component: () => import('../views/errorPage/404'),
    meta: {
      access: ['游客'],
    },
  },
];

export default routes;
