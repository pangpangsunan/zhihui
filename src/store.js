import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        baseinfo: null
    },
    mutations: {
        login(store, baseinfo) {
            store.baseinfo = baseinfo;
            localStorage.setItem('userinfo', JSON.stringify(baseinfo))
        },
        logout(store) {
            store.baseinfo = null;
            localStorage.clear();
        }
    },
    actions: {},
    getters: {
        userBaseInfo(store) {
            if (store.baseinfo) {
                return store.baseinfo;
            }
            return store.baseinfo = JSON.parse(localStorage.getItem('userinfo'))
        },
        userInfo(store) {
            if (store.baseinfo) {
                return store.baseinfo.userInfo
            }
            return null
        },
        roleInfo(store) {
            if (store.baseinfo) {
                return store.baseinfo.roleInfo
            }
            return null
        },
        isLogin(store) {
            return !!store.baseinfo
        },
    }
});
