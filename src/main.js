// import {createApp} from 'vue';
import Vue from 'vue'
import App from './App.vue';
import router from './router';
import './public-path';

// Vue.config.productionTip = false;

let instance = null;
function render(props={}) {
  const { container } = props;

  // instance =  createApp(App).use(router).mount('#app');
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}
 
// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
// 生命周期
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  // storeTest(props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}