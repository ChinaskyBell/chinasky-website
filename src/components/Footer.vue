<template>
  <footer>
    <div class="Width1200">
      <div class="footDiv">
        <div class="div1">
<!--          <img src="../assets/img/logo.png" />-->
          <p>{{$t("message.GuanZhuWM")}}</p>
          <ul class="footIconDiv">
            <router-link to="https://www.facebook.com/chinaskynet" target="_blank">
              <li><i class="iconfont icon-facebook"></i></li>
            </router-link>
            <a>
              <li>
                <i class="iconfont icon-weixin"></i>
                <div class="wechatCode">
                  <img src="../assets/img/weixin.png" />
                </div>
              </li>
            </a>
            <router-link to="https://api.whatsapp.com/send?phone=85251750111" target="_blank">
              <li><i class="iconfont icon-whatsapp"></i></li>
            </router-link>
          </ul>
        </div>
        <div class="footerConnect">
          <div>{{$t("message.CompanyName1")}}</div>
          <div>{{$t("message.Address1")}}</div>
          <div>E-mail: <span @click="toLink('mailto:'+emailCn)">{{emailCn}}</span></div>
          <div class="phone"><span @click="toLink('tel:(852)24902300')">+852-24902300</span></div>
        </div>
        <div class="footerConnect">
          <div>{{$t("message.CompanyName2")}}</div>
          <div>{{$t("message.Address2")}}</div>
          <div>E-mail: <span @click="toLink('mailto:'+emailHk)">{{emailHk}}</span></div>
          <div class="phone"><span @click="toLink('tel' +
           ':(0755)25100512')">+86-755-25100512</span></div>
        </div>
      </div>
      <p class="footCopy">Copyright © {{ dateYear }} China Sky Technology System Limited. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      dateYear: '',
      emailCn: 'info@chinaskynet.net.cn',
      emailHk: 'info@chinaskynet.net'
    }
  },
  created () {
    this.dateYear = new Date().getFullYear()
  },
  methods: {
    toLink (Url) {
      window.location.href = Url
    }
  }
}
</script>

<style scoped>

</style>
