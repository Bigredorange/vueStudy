import api from './apis'
import Vue from 'vue'
import loading from '@/components/loading/index'
import {Loading} from 'element-ui'
import '../router/permission';

Vue.prototype.$api = api
Vue.prototype.$loading = Loading;
Vue.component('loading',loading);

