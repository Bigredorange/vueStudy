<template>
  <div>
    <!-- <div v-for="item in [1,2,3,4]">
      <anchored-heading :level="item">
        cool guy
      </anchored-heading>
    </div>
    <anchored-heading :level="1">another</anchored-heading>
    <anchored-heading :level="other">another</anchored-heading> -->
    <!-- <input v-model="other" />
    <input @change="valueChange" v-model="obj.text" />
    <span>{{obj.text}}</span>
    <button route-link=""></button> -->
    <head-bar></head-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
  import headBar from '@/components/head-bar.vue'
  import footerBar from '@/components/footer-bar.vue'
  export default {
    components: {
      headBar,
      footerBar
    },
    data() {
      return {
        other: 3,
        obj: {}
      }
    },
    created() {
      // console.log('first')
      // setTimeout(() => {
      //   console.log('start')
      // }, 0)
      // console.log('second')
      // this.obj = Object.assign({}, this.obj, { text: 'cool' })
      // this.other = 'new';
      // console.log(this.other);
      // console.log(this.other == 'new');
      // if (this.other == 'new') {
      //   console.log('once');
      // }
      // this.$nextTick(function () {
      //   if (this.other == 'new') {
      //     console.log('later');
      //   }
      // })
    },
    methods: {
      valueChange(ev) {
        console.log(ev);
        this.obj.text;
      }
    }
  }
</script>

