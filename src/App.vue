<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <BackTop></BackTop>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import BackTop from './components/Back-Top'
import {WOW} from 'wowjs'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    BackTop
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.$nextTick(() => {
      new WOW({live: false}).init()
    })
  }
}
</script>

<style>

</style>
