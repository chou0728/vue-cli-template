<template>
  <div id="app">
    <img src="./assets/images/logo.png">
    <div>
      <p>
        If iView is successfully added to this project, you'll see an
        <code v-text="'<Button>'"></code>
        below
      </p>
      <Button type="primary">Button</Button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus">
@import './assets/styles/app.styl'

#app 
  font-family $primary-font
  text-align center
  color $primary-color
  margin-top 60px

</style>
