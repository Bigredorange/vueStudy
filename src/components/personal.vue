<template>
    <div>
        <div id="example">{{message}}</div>
        <!-- <el-input :suffix-icon="el-icon-close">
            <el-button slot="append">search</el-button>
        </el-input> -->
        <el-input placeholder="请输入内容" size="small"  v-model="message" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // data2: [{
                //     id: 1,
                //     label: '一级 1',
                //     children: [{
                //         id: 4,
                //         label: '二级 1-1',
                //         children: [{
                //             id: 9,
                //             label: '三级 1-1-1'
                //         }, {
                //             id: 10,
                //             label: '三级 1-1-2'
                //         }]
                //     }]
                // }, {
                //     id: 2,
                //     label: '一级 2',
                //     children: [{
                //         id: 5,
                //         label: '二级 2-1'
                //     }, {
                //         id: 6,
                //         label: '二级 2-2'
                //     }]
                // }, {
                //     id: 3,
                //     label: '一级 3',
                //     children: [{
                //         id: 7,
                //         label: '二级 3-1'
                //     }, {
                //         id: 8,
                //         label: '二级 3-2'
                //     }]
                // }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                message: '',
                select: ''
            };

        },
        created() {
            // this.iterableList(this.data2)
        },
        methods: {
            // iterableList(list) {
            //     list.forEach(element => {
            //         console.log(element.id);
            //         if (element.children) {
            //             if (element.children.length >= 1) {
            //                 this.iterableList(element.children);
            //             }
            //         }
            //     });
            // }
        },
    }
</script>