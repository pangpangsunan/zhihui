import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false;

Vue.filter('coursType', id => {
    let arr = [null, '线下', '音频', '视频', '专栏'];
    return arr[id]
});

Vue.filter('datetime', time => {
    let dt = new Date(time);
    return dt.toLocaleString() + dt.toLocaleTimeString();
});

store.commit('load');

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
