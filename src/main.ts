// 基本引入
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// UI库引入
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
