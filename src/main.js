import Vue from 'vue'
import App from './App'
import WXrequest from './utils/wx-request'
import api from './utils/interface';
import store from './store';
import '../static/colorUi/icon.css';
import '../static/colorUi/main.css';
Vue.prototype.$store = store;
Vue.prototype.$api = api;
Vue.prototype.$httpWX = WXrequest
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
