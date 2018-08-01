import Vue from 'vue'
Vue.component('anchored-heading', {
    render: function (createElement) {
        return createElement(
            'h' + this.level,   // tag name 标签名称
            this.$slots.default // 子组件中的阵列
            // this.level
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
})