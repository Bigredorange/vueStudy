/**
 * [ajax config]
 * @author Kevin on 2017/10/23.
 */
import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import router from "../router/index";
import config from "../../config/index";
import {Loading} from 'element-ui';
Vue.prototype.$loading = Loading;
// import './plugin';

// console.log(Loading);
//配置接口地址
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
if (process.env.NODE_ENV == 'development') {
    // axios.defaults.baseURL = '/ss';
    axios.defaults.baseURL = config.api.baseURL;
}
else {
    axios.defaults.baseURL = config.api.baseURL;
}
// 配置超时时间
axios.defaults.timeout = 30e6;
//配置请求头
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.common['Accept'] = 'application/json';
// axios.defaults.headers.common['Content-Type'] = 'application/x-wwww-form-urlencoded';
// 数据加载中全屏动画
const loadInFull = (t = '正在加载...') => {
    if (window.load) {
        return;
    }
    window.load = document.createElement('div');
    window.load.className = 'load-block';
    window.load.innerHTML = `<div class="load"><i></i><span>${t}</span></div>`;
    document.body.appendChild(window.load);
};

// 数据加载中动画类zeplin
const loadIn = () => {
    if (window.load) {
        return;
    }
    window.load = document.createElement('div');
    window.load.id = 'loading';
    window.load.innerHTML = '<div class="ripple ripple1"></div>' +
        '<div class="ripple ripple2"></div>' +
        '<div class="ripple ripple3"></div>' +
        '<div class="ripple ripple4"></div>';
    document.body.appendChild(window.load);
};

// 移除加载中动画
const loadOut = () => {
    if (!window.load) {
        return;
    }
    window.load.classList.add('fade-out');
    setTimeout(() => {
        try {
            document.body.removeChild(window.load);
        } catch (e) { } finally {
            window.load = void 0;
        }
    }, 250);
};

// toast弹框
const toast = (t, fn) => {
    if (window.tip) {
        return;
    }
    window.tip = document.createElement('div');
    window.tip.className = 'toast-block';
    window.tip.innerHTML = `<div class="toast"><p>${t}</p></div>`;
    document.body.appendChild(window.tip);
    setTimeout(() => {
        if (!window.tip) {
            return;
        }
        window.tip.classList.add('fade-out');
        setTimeout(() => {
            try {
                document.body.removeChild(window.tip);
            } catch (e) { } finally {
                window.tip = void 0;
            }
            fn && fn();
        }, 350);
    }, 2000);
};

// axios.interceptors.request.use(config => {
//     config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//     if(config.method=='post') {
//         // config.data = qs.stringify(config.data);
//     }
//     if(config.method=='options'){
//         return;
//     }
//     return config;
// })
// 添加请求拦截器
// loading
let vm = new Vue();
let loading = vm.$loading.service({lock:true});
axios.interceptors.request.use(config => {
    // 若是有做鉴权token , 就给头部带上token
    if (sessionStorage.token) {
        config.headers.common['Authorization'] = `${sessionStorage.token}`;
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});


// 添加响应拦截器
axios.interceptors.response.use(response => {
    // 去除加载中动画
    loadOut();
    loading.close();
    // 对响应数据做点什么
    const res = response.data;

    if (response.config.responseType === "blob") {

        if (res.type === 'application/json') {
            toast('暂无数据！');
            return Promise.reject('导出失败');
        } else {
            return response;
        }
    }

    if (res.status == 200) {
        return res.data;
    }
    if (res.status == 5000) {
        toast('服务器错误')
    }
    if (res.status == 4000) {
        toast('参数错误')
    }
    if (res.status == 4002) {
        toast('登录已过期，请重新登录', () => {
            sessionStorage.clear();
            router.push({
                path: '/login'
            });
        });
    }
    if (res.status == 5009) {
        return res;
    }
    return Promise.reject(res);
}, error => {
    // 去除加载中动画
    loadOut();
    loading.close();
    // 对响应错误做点什么
    if (error.toString().includes('timeout of')) {
        toast('请求超时');
    }
    if (error.toString().includes('Network Error')) {
        toast('网络异常');
    }
    console.log('error =>', error);
    return Promise.reject(error);
});

export const get = (url, arg) => axios.get(arg ? url + '?' + qs.stringify(arg) : url);

export const put = (url, arg) => axios.put(url, qs.stringify(arg));

export const del = (url, arg) => axios.delete(arg ? url + '?' + qs.stringify(arg) : url);

export const post = (url, arg) => axios.post(url, qs.stringify(arg));

export const postForm = (url, arg) => {
    "use strict";
    const formData = new FormData();
    arg && Object.keys(arg).forEach(k => formData.append(k, arg[k]));
    return axios.post(url, formData, {
        'Content-Type': 'multipart/form-data'
    });
};

//直接使用a标签，就可以，是get请求
export const postBlob = (url, arg) => {
    "use strict";
    return axios.post(url, qs.stringify(arg), {
        'responseType': 'blob'
    });
};

Vue.prototype.$axios = axios;
Vue.prototype.$loadIn = loadIn;
Vue.prototype.$loadInFull = loadInFull;
Vue.prototype.$loadOut = loadOut;
Vue.prototype.$toast = toast;



