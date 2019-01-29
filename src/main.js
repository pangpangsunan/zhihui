import Vue from 'vue'
import App from './layout.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
