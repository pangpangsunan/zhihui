import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import axios from 'axios'
import qs from 'querystring'

Vue.config.productionTip = false;

Vue.filter('coursType', id => {
    let arr = [null, '线上', '线下', '专栏'];
    return arr[id]
});

Vue.filter('isOnline', id => {
    let arr = [null, '线下', '音频', '视频', '专栏'];
    return arr[id]
});

Vue.filter('nl2br', str => {
    console.log(str);
    return str.replace(/\n/g, '<br/>')
});

Vue.filter('datetime', time => {
    let dt = new Date(time);
    return dt.toLocaleString();
});

store.commit('load');

Vue.prototype.view = (id, type = 2) => {
    if (!store.getters.isLogin) {
        alert("请先登录");
        return;
    }
    axios.post('/edu/collection/addCollection', {
        collectionid: id,
        uid: store.getters.userInfo.id,
        type: type
    }).then(p => {
        if (p.data.httpCode == 200) {
            alert("关注成功")
        } else {
            alert(p.data.msg)
        }
    })
};

Vue.prototype.unview = (id, type = 2) => {
    if (!store.getters.isLogin) {
        alert("请先登录");
        return;
    }
    axios.post('/edu/collection/delCourseCollection', {
        cid: id,
        uid: store.getters.userInfo.id,
    })
};

axios.defaults.headers.common['Content-Type'] = "application/x-www-form-urlencoded";
axios.defaults.transformRequest = data => {
    if (typeof data == 'object') {
        data = qs.stringify(data);
    }
    return data;
};

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
