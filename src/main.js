import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from './js/api';

Vue.prototype.$api = api;

// toast
import Message from 'vue-m-message';
import 'vue-m-message/dist/index.css';
Message.globals.options['collapsable'] = false;
Message.globals.options['showClose'] = false;
Message.globals.options['zIndex'] = 9999;
Vue.use(Message, {
  name: 'msg'
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
