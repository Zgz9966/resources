// 基本引入
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// UI库引入
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  iconfont: 'mdi',
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
