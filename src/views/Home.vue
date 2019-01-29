<template>
  <div class="home">
    <h1>{{this.test}}</h1>
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex';
import mock from '@/mock'

export default {
  name: 'home',
  computed: {
    ...mapGetters(['test'])
  },
  methods:{
    init(){
      console.log(mock)
    }
  },
  mounted() {
    this.init()
  },
  components: {
    HelloWorld
  }
}
</script>
