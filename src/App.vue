<template>
  <div id="app">
    <!-- <Home></Home> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
// import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
   Footer,
  },
}
</script>

<style>

</style>
