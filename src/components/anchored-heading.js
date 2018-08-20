import Vue from 'vue'
let getChildrenTextContent = function (children) {
    return children.map(function (node) {
        return node.children ? getChildrenTextContent(node.children) : node.text
    }).join('')
}
// Vue.component('anchored-heading', {
//     render: function (createElement) {
//         return createElement(
//             'h' + this.level,   // tag name 标签名称
//             this.$slots.default // 子组件中的阵列
//             // this.level
//         )
//     },
//     props: {
//         level: {
//             type: Number,
//             required: true
//         }
//     }
// })

Vue.component('anchored-heading', {
    render: function (createElement) {
        let headingId = getChildrenTextContent(this.$slots.default).toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^\-|\-$)/g, '')
        return createElement(
            'h' + this.level,   // tag name 标签名称
            [
                createElement('a', {
                    attrs: {
                        name: headingId,
                        href: '#' + headingId
                    }
                }, this.$slots.default)
            ]
            // this.$slots.default // 子组件中的阵列
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