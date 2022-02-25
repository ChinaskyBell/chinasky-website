<template>
  <header :class="{'positionHeader':isHeader}" ref="treeWrap">
    <div class="header">
      <div class="headerDiv">
        <!-- APP端 -->
        <div class="app_header">
          <button :class="[isAppActive === 0 ? 'open' : 'down']" @click="appNavBtn">
            <i class="iconfont icon-liebiao"></i>
            <i class="iconfont icon-arrow_left"></i>
          </button>
          <router-link to="/"><img src="../assets/img/logo.png"/></router-link>
        </div>
        <!-- PC端 -->
        <div class="headerDivtext" :class="{'show':isAppHeader}">
          <div class="headerDiv1">
            <router-link to="/"><img src="../assets/img/logo.png"/></router-link>
          </div>
          <div class="headerDiv2">
            <div class="headerUl">
              <ul>
                <li class="active">
                  <p><router-link to="/AboutUs">{{$t("message.GuanYuWM")}}</router-link></p>
                </li>
                <li>
                  <p><a href="#"><span>{{$t("message.WangLuoWH")}}</span></a></p>
                </li>
                <li>
                  <p><router-link to="/Software">{{$t("message.HuLianWang")}}+</router-link></p>
                  <div class="headerItemUl">
                    <div><router-link to="/Software">{{$t("message.RuanJianKF")}}</router-link></div>
                    <div><router-link to="/#">{{$t("message.WangZhankf")}}</router-link></div>
                    <div><router-link to="/App">{{$t("message.AppKF")}}</router-link></div>
                    <div><router-link to="/Wechat">{{$t("message.weiXinKF")}}</router-link></div>
                    <div><router-link to="/Mall">{{$t("message.WangShanSC")}}</router-link></div>
                  </div>
                </li>
                <li>
                  <p><a href="#">{{$t("message.WangLuoTG")}}</a></p>
                </li>
                <li>
                  <p><a href="#">{{$t("message.XinWenZX")}}</a></p>
                </li>
                <li>
                  <p><router-link to="/ContactUs">{{$t("message.LianLuoWM")}}</router-link></p>
                </li>
              </ul>
            </div>
          </div>
          <div class="headerDiv3">
            <ul>
              <li :class="{'active': lang === 'cn'}" @click="getLang('cn')">简</li>
              <li :class="{'active': lang === 'tw'}" @click="getLang('tw')">繁</li>
              <li :class="{'active': lang === 'en'}" @click="getLang('en')">EN</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      isHeader: false,
      isAppHeader: false,
      isAppActive: 0,
      lang: this.$store.state.languageName || 'cn'
    }
  },
  mounted () {
    this.listenerFunction()
    // 点击非头部区域关闭目录
    document.addEventListener('mouseup', (e) => {
      let tree = this.$refs.treeWrap
      if (tree) {
        if (!tree.contains(e.target)) {
          this.isAppActive = 0
          this.isAppHeader = false
        }
      }
    })
  },
  methods: {
    listenerFunction (e) {
      document.addEventListener('scroll', this.handleScroll, true)
    },
    beforeDestroy () {
      document.removeEventListener('scroll', this.listenerFunction)
    },
    handleScroll () {
      if (window.pageYOffset > 80) {
        this.isHeader = true
      } else {
        this.isHeader = false
      }
    },
    // 移动端头部
    appNavBtn () {
      let that = this
      if (that.isAppActive) {
        that.isAppActive = 0
        that.isAppHeader = false
      } else {
        that.isAppActive = 1
        that.isAppHeader = true
      }
    },
    // 切换语言
    getLang (Type) {
      this.$store.commit('set_languageName', Type)
      this.$i18n.locale = this.lang = Type
    }
  }
}
</script>

<style scoped>
</style>
