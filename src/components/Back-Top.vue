<template>
  <!-- 返回顶部 -->
  <div class="returnTop" :class="{'show':isShow}" @click="backTop">
    <i class="iconfont icon-jiantoushang"></i>
  </div>
</template>

<script>
export default {
  name: 'Back-Top',
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
    this.listenerFunction()
  },
  methods: {
    listenerFunction (e) {
      document.addEventListener('scroll', this.handleScroll, true)
    },
    beforeDestroy () {
      document.removeEventListener('scroll', this.listenerFunction)
    },
    handleScroll () {
      if (window.pageYOffset > 300) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    // 返回顶部
    backTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    }
  }
}
</script>

<style scoped>

</style>
