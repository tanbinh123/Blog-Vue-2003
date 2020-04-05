import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index.js'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

Vue.prototype.$axios=axios;
Vue.prototype.$qs=qs;
Vue.config.productionTip = false;


//路由遍历 检查是否已经登录
//to:进入到哪个路由去 from:从哪个路由离开 next:路由的控制参数
router.beforeEach(function (to, from, next) {
  if(to.meta.requestAuth){
    if(store.state.user.username){
      next();
    }else{
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      });
    }
  }else{
    next();
  }
});



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app');















/*
/*路由引人
import router from './router/index.js'

new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
});
*/