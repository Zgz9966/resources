// 基本引入
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// UI库引入
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import mavonEditor from 'mavon-editor';
import './assets/styles/theme/pink.less';
import hljs from 'highlight.js';
import './assets/styles/reset.css';
import './assets/styles/markdown.css';

Vue.use(mavonEditor);
Vue.use(iView);
Vue.config.productionTip = false;

Vue.directive('highlight', (el) => {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
