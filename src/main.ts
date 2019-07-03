// 基本引入
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// UI库引入
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import 'mavon-editor/dist/highlightjs/styles/googlecode.min.css';
import 'mavon-editor/src/lib/css/markdown.css';

Vue.use(mavonEditor);
Vue.use(iView);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
