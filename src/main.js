import Vue from 'vue'
// import App from './App.vue'
import axios from 'axios';
Vue.prototype.$axios = axios;
import router from './ruters/router.js'
import store from './configs/store.js'
Vue.config.productionTip = false

new Vue({
    render: h => h('router-view'),
    router,
    store
}).$mount('#app')