<template>
  <div class="mianDiv">
<!-- 顶部标题 -->
    <section class="TopDivs">
      <div class="bgImgDiv"></div>
    </section>
<!--    联络我们-->
    <section class="pad_100">
      <div class="Width1200">
        <div class="textCenter"><p class="h2Title h2TitleCenter">联络我们</p></div>
        <div class="disTable contactDiv">
          <div class="">
            <div class="footerConnect">
              <div>{{ $t("message.CompanyName1") }}</div>
              <div>{{ $t("message.Address1") }}</div>
              <div>E-mail: <span @click="toLink('mailto:'+emailCn)">{{ emailCn }}</span></div>
              <div class="phone"><span @click="toLink('tel:(852)24902300')">+852-24902300</span></div>
            </div>
            <div class="footerConnect marT_50">
              <div>{{ $t("message.CompanyName2") }}</div>
              <div>{{ $t("message.Address2") }}</div>
              <div>E-mail: <span @click="toLink('mailto:'+emailHk)">{{ emailHk }}</span></div>
              <div class="phone"><span @click="toLink('tel' +':(0755)25100512')">+86-755-25100512</span></div>
            </div>
          </div>
          <div class="contactInput">
            <div class="inputDiv">
              <input type="text" :placeholder='$t("message.LianLuoRen")'>
            </div>
            <div class="inputDiv">
              <input type="text" :placeholder='$t("message.DianZiYJ")'>
            </div>
            <div class="inputDiv">
              <input type="text" :placeholder='$t("message.DianHuaHM")'>
            </div>
            <div class="inputDiv">
              <textarea :placeholder='$t("message.LiuYan")'></textarea>
            </div>
            <div class="connectBtn">
              <button class="btn">{{ $t("message.TiJiao") }}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
<!--    地图-->
    <section>
      <div class="googleMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.5936695248754!2d114.10767737979234!3d22.37254927203976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8e5707631e1%3A0x2ef537658d4502e8!2sOne+Midtown%2C+11+Hoi+Shing+Rd%2C+Tsuen+Wan!5e0!3m2!1szh-CN!2shk!4v1547459323144"
          frameborder="0" style="width:100%; height:100%;" allowfullscreen></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data () {
    return {
      dateYear: '',
      emailCn: 'info@chinaskynet.net.cn',
      emailHk: 'info@chinaskynet.net'
    }
  },
  created () {
  },
  methods: {
    toLink (Url) {
      window.location.href = Url
    }
  }
}
</script>

<style scoped>
.contactDiv>div{
  display: table-cell;
  vertical-align: top;
  width: 50%;
}
.contactInput>.inputDiv:first-child{
  margin-top: 0;
}
.contactInput>.inputDiv,.contactDiv{
  margin-top: 50px;
}
.footerConnect{
  padding-right: 50px;
  box-sizing: border-box;
}
.googleMap{
  height: 450px;
  width: 100%;
  background: aliceblue;
}

</style>
