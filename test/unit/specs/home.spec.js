import Vue from 'vue'
import Home from '@/pages/home'

describe('Home.vue',()=> {
    it('should render correct contents',()=> {
        const Constructor = Vue.extend(Home)
        const vm = new Constructor().$mount()
        // const vm = mount()
        console.log(vm.$el.querySelector('.section-title'))
        expect(vm.$el.querySelector('.section-title').textContent)
        .to.equal('cool')
    })
})