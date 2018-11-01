import Vue from 'vue';
import Vuex from 'vuex';
import {SET_EMAIL} from './mutationType';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        author: 'cdh'
    },
    getters: {
        getAuthorName: state => {
            return state.author;
        }
    },
    mutations: {
        setAuthorName(state ,payload) {
            state.author = payload.author;
        },
        [SET_EMAIL](state, payload) {
            state.SET_EMAIL = payload.email;
        }
    },
    actions: {

    }
})

export default store;