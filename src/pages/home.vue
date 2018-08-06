<template>
    <div>
        <head-bar></head-bar>
        <router-view></router-view>
    </div>
</template>
<script>
    import headBar from '@/components/head-bar.vue'
    export default {
        components: {
            headBar
        }
    }
</script>
<style lang="scss" scoped>
</style>
