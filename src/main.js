import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import axios from 'axios'


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

Vue.prototype.$post = (url, data, cb) => {
    let formdata = new FormData;
    for (let key in data) {
        formdata.append(key, data[key]);
    }
    let promise = axios.post(url, formdata);
    if (typeof cb == 'function') {
        promise.then(p => cb(p.data));
    }
};

Vue.prototype.$get = (url, data, cb) => {
    if (typeof data == 'function') {
        cb = data;
        data = null;
    }
    let promise = axios.get(url, {params: data});
    if (typeof cb == 'function') {
        promise.then(p => cb(p.data));
    }
};

Vue.prototype.view = (id, type = 2) => {
    if (!store.getters.isLogin) {
        alert("请先登录");
        return;
    }
    Vue.prototype.$post('/edu/collection/addCollection', {
        collectionid: id,
        uid: store.getters.userInfo.id,
        type: type
    }, p => {
        if (p.httpCode == 200) {
            alert("关注成功")
        } else {
            alert(p.msg)
        }
    });
};

Vue.prototype.unview = (id, type = 2) => {
    if (!store.getters.isLogin) {
        alert("请先登录");
        return;
    }
    Vue.prototype.$post('/edu/collection/delCourseCollection', {
        cid: id,
        uid: store.getters.userInfo.id,
    });
};

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
