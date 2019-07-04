import Main from '@/components/main/index.vue';

const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: Main,
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue'),
      meta: {
        access: ['游客'],
      },
    }, ]
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Main,
    children: [{
      path: '/todoList',
      name: 'todoList',
      component: () => import('../views/todoList/index.vue'),
      meta: {
        access: ['游客'],
      },
    }, {
      path: '/advise',
      name: 'advise',
      component: () => import('../views/advise/index.vue'),
      meta: {
        access: ['游客'],
      },
    }, ]
  },
  {
    path: '/error',
    name: 'error',
    component: Main,
    children: [{
      path: '/error404',
      name: 'error404',
      component: () => import('../views/errorPage/404.vue'),
      meta: {
        access: ['游客'],
      },
    }, {
      path: '/error401',
      name: 'error401',
      component: () => import('../views/errorPage/401.vue'),
      meta: {
        access: ['游客'],
      },
    }, ]
  },
  {
    path: '*',
    redirect: '/error404',
  },
];

export default routes;
