<template>
  <div class="mianDiv">
<!-- 视频播放 -->
    <section style="position: relative">
      <div class="funfactImg"></div>
      <div class="indexVideo">
        <video id="bgVideo" autoplay="autoplay" loop="true" muted="true">
          <source src="https://test41.chinaskynet.net/assets/WeChat.mp4" type="video/mp4">
        </video>
<!--  声音按钮 -->
        <div class="indexVideoMuted" :class="{'active':isActive == 1}" @click="mutedBtn">
          <i class="iconfont icon-shengyin"></i>
          <i class="iconfont icon-cha"></i>
        </div>
<!--  视频播放/暂停-->
        <div class="indexVideoPlay" :class="{'active':isVideo == 1}" @click="videoBtn">
          <i class="iconfont icon-bofang"></i>
          <i class="iconfont icon-pause"></i>
        </div>
      </div>
    </section>
<!-- 关于我们 -->
    <section class="pad_100">
      <div class="Width1200">
        <div class="aboutText">
          <div class="div1">
            <div>
              <p class="h2Title h2TitleLeft">{{$t("message.GuanYuWM")}}</p>
            </div>
            <div class="itemTitle">{{$t("message.GuanYuWMText1")}}</div>
            <div class="spanText">
              {{$t("message.GuanYuWMText2")}}
            </div>
            <div class="aboutBtnMore">
              <button class="btn">{{$t("message.ChaKanGD")}}<i class="iconfont icon-jiantouyou"></i></button>
            </div>
          </div>
          <div>
            <img src="../assets/img/aboutUs.jpg"/>
          </div>
        </div>
      </div>
    </section>

<!-- 商城费用 -->
    <section class="bgFb pad_100">
      <div class="Width1200">
        <div class="textCenter">
          <p class="h2Title h2TitleCenter">{{$t("message.WangShangSCZS")}}</p>
        </div>
        <div>
          <div class="shopSlider">
            <div>
              <strong class="color1">{{$t("message.GouMai")}}</strong>
              <!-- <p>2021.07.01-2021.09.30</p> -->
            </div>
            <div class="button-cover">
              <div class="sliderBtn">
                <input type="checkbox" class="checkbox" @click="shopSliderBtn()">
                <div class="knobs"></div>
                <div class="layer"></div>
              </div>
            </div>
            <div>
              <strong class="color2">{{$t("message.ZuYong")}}</strong>
              <!-- <p>2021.07.01-2021.09.30</p> -->
            </div>
          </div>
          <div class="shopBigTextDiv">
            <!-- 购买 -->
            <div class="shopTextDiv shopDiv3" :class="shopType === true?'animated fadeInLeft':'divNone'">
              <div>
                <div class="divs">
                  <img src="../assets/img/buy1.png"/>
                  <p>{{$t("message.WZandApp")}}（iOS+Android）</p>
                  <div>HKD<strong>58,000.00</strong></div>
                  <button class="btn">{{$t("message.GouMai")}}</button>
                </div>
              </div>
              <div>
                <div class="divs">
                  <img src="../assets/img/buy2.png"/>
                  <p>{{$t("message.AppSC")}}（iOS+Android）</p>
                  <div>HKD<strong>48,000.00</strong></div>
                  <button class="btn">{{$t("message.GouMai")}}</button>
                </div>
              </div>
              <div>
                <div class="divs">
                  <img src="../assets/img/buy3.png"/>
                  <p>{{$t("message.WangZhanSC")}}</p>
                  <div>HKD<strong>20,000.00</strong></div>
                  <button class="btn">{{$t("message.GouMai")}}</button>
                </div>
              </div>
            </div>

            <!-- 租用 -->
            <div class="shopTextDiv shopDiv4" :class="shopType === false?'animated fadeInRight':'divNone'">
              <div>
                <div class="divs">
                  <img src="../assets/img/rent1.png"/>
                  <p>{{$t("message.WZandApp")}}（iOS+Android）</p>
                  <div>HKD<strong>1,900.00</strong>/{{$t("message.Yue")}}</div>
                  <button class="btn">{{$t("message.ZuYong")}}</button>
                </div>
              </div>
              <div>
                <div class="divs">
                  <img src="../assets/img/rent2.png"/>
                  <p>iOS {{$t("message.AppSC")}}</p>
                  <div>HKD<strong>700.00</strong>/{{$t("message.Yue")}}</div>
                  <button class="btn">{{$t("message.ZuYong")}}</button>
                </div>
              </div>
              <div>
                <div class="divs">
                  <img src="../assets/img/rent3.png"/>
                  <p>Android {{$t("message.AppSC")}}</p>
                  <div>HKD<strong>700.00</strong>/{{$t("message.Yue")}}</div>
                  <button class="btn">{{$t("message.ZuYong")}}</button>
                </div>
              </div>
              <div>
                <div class="divs">
                  <img src="../assets/img/rent4.png"/>
                  <p>{{$t("message.WangZhanSC")}}</p>
                  <div>HKD<strong>500.00</strong>/{{$t("message.Yue")}}</div>
                  <button class="btn">{{$t("message.ZuYong")}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<!-- 网络维护 -->
    <section class="pad_100">
      <div class="Width1000">
        <div class="textCenter">
          <p class="h2Title h2TitleCenter">{{$t("message.WangLuoWH")}}</p>
          <div class="itemTitle">{{$t("message.WangLuoWHText1")}}</div>
        </div>
        <div class="maintainTable">
          <table>
            <thead>
            <tr>
              <th>
                <p class="p1">{{$t("message.FuWuLX")}}</p>
              </th>
              <th>
                <p class="p2">{{$t("message.AnCi")}}</p>
              </th>
              <th>
                <p class="p3">{{$t("message.YueFei")}}</p>
              </th>
              <th>
                <p class="p4">{{$t("message.ZhuChang")}}</p>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{$t("message.YinJiFWCS")}}</td>
              <td>12{{$t("message.CiMNian")}}</td>
              <td>{{$t("message.WuXianZhi")}}</td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.LiXinJC")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.FuWuQWH")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.LiXinJC")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.YinRuanJianAT")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.YuanChenWH")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.DianHuaZC")}}</td>
              <td>{{$t("message.WuXianZhi")}}</td>
              <td>{{$t("message.WuXianZhi")}}</td>
              <td>{{$t("message.WuXianZhi")}}</td>
            </tr>
            <tr>
              <td>{{$t("message.appZhiYuan")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.WangLuoGWFW")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.ZhuDongYWGL")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.ZiChanGLFW")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.ITBZH")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.SheBeiBXGJ")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.JSGJ")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.JJSBTDZC")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.ITGLZDJS")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            <tr>
              <td>{{$t("message.FWMYD")}}</td>
              <td><i class="iconfont icon-chacha"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
              <td><i class="iconfont icon-gou"></i></td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <th>
                <p class="p1"></p>
              </th>
              <th>
                <p class="p2"></p>
              </th>
              <th>
                <p class="p3"></p>
              </th>
              <th>
                <p class="p4"></p>
              </th>
            </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>

<!-- 案例展示 -->
    <section class="pad_100 bgFb">
      <div class="Width1200">
        <div class="textCenter"><p class="h2Title h2TitleCenter">{{$t("message.AnLiZS")}}</p></div>
        <div>
          <ul class="protectNav">
            <li :class="{'active':protectIndex === 1}" @click="protectBtn(1)">{{$t("message.WangZhankf")}}</li>
            <li :class="{'active':protectIndex === 2}" @click="protectBtn(2)">{{$t("message.AppKF")}}</li>
            <li :class="{'active':protectIndex === 3}" @click="protectBtn(3)">{{$t("message.weiXinKF")}}</li>
          </ul>
          <div>
            <!-- 网站 -->
            <div class="protectDivs clearfix" :class="protectIndex === 1?'animated bounceIn':'divNone'">
              <div class="filtr-item">
                <div>
                  <img src="../assets/img/aboutUs.jpg" alt="">
                  <p>网站1</p>
                </div>
              </div>
              <div class="filtr-item">
                <div>
                  <img src="../assets/img/aboutUs.jpg" alt="">
                  <p>网站2</p>
                </div>
              </div>
              <div class="filtr-item">
                <div>
                  <img src="../assets/img/aboutUs.jpg" alt="">
                  <p>网站3</p>
                </div>
              </div>
              <div class="filtr-item">
                <div>
                  <img src="../assets/img/aboutUs.jpg" alt="">
                  <p>网站4</p>
                </div>
              </div>
            </div>
            <!-- app -->
            <div class="protectDivs clearfix" :class="protectIndex === 2?'animated bounceIn':'divNone'">
              <div class="filtr-item">
                <div>
                  <img src="../assets/img/aboutUs.jpg" alt="">
                  <p>app1</p>
                </div>
              </div>
              <div class="filtr-item">
                <div>
                  <img src="../assets/img/aboutUs.jpg" alt="">
                  <p>app2</p>
                </div>
              </div>
              <div class="filtr-item">
                <div>
                  <img src="../assets/img/aboutUs.jpg" alt="">
                  <p>app3</p>
                </div>
              </div>
            </div>
            <!-- 微信 -->
            <div class="protectDivs clearfix" :class="protectIndex === 3?'animated bounceIn':'divNone'">
              <div class="filtr-item">
                <div>
                  <img src="../assets/img/aboutUs.jpg" alt="">
                  <p>微信1</p>
                </div>
              </div>
              <div class="filtr-item">
                <div>
                  <img src="../assets/img/aboutUs.jpg" alt="">
                  <p>微信2</p>
                </div>
              </div>
              <div class="filtr-item">
                <div>
                  <img src="../assets/img/aboutUs.jpg" alt="">
                  <p>微信3</p>
                </div>
              </div>
              <div class="filtr-item">
                <div>
                  <img src="../assets/img/aboutUs.jpg" alt="">
                  <p>微信4</p>
                </div>
              </div>
              <div class="filtr-item">
                <div>
                  <img src="../assets/img/aboutUs.jpg" alt="">
                  <p>微信5</p>
                </div>
              </div>
            </div>
          </div>
          <div class="protectBtn">
            <button class="btn">{{$t("message.ChaKanGD")}}</button>
          </div>
        </div>
      </div>
    </section>

<!-- 联络我们 -->
    <section class="pad_100" id="connectUs">
      <div class="Width1000">
        <div class="textCenter"><p class="h2Title h2TitleCenter">{{$t("message.LianLuoWM")}}</p></div>
        <div class="connectInputDiv">
          <div class="divRow3 clearfix">
            <div class="inputDiv">
              <input type="text" :placeholder='$t("message.LianLuoRen")'>
            </div>
            <div class="inputDiv">
              <input type="text" :placeholder='$t("message.DianZiYJ")'>
            </div>
            <div class="inputDiv">
              <input type="text" :placeholder='$t("message.DianHuaHM")'>
            </div>
          </div>
          <div class="inputDiv connectTextarea">
            <textarea :placeholder='$t("message.LiuYan")'></textarea>
          </div>
          <div class="connectBtn">
            <button class="btn">{{$t("message.TiJiao")}}</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isActive: 0,
      isVideo: 0,
      shopType: true,
      protectIndex: 1
    }
  },
  methods: {
    // 视频声音
    mutedBtn () {
      const that = this
      let bgm = document.getElementById('bgVideo')
      if (bgm.muted) {
        bgm.muted = false
        that.isActive = 1
      } else {
        bgm.muted = true
        that.isActive = 0
      }
    },
    // 视频播放
    videoBtn () {
      const that = this
      let bgm = document.getElementById('bgVideo')
      if (bgm.paused) {
        bgm.play()
        that.isVideo = 0
      } else {
        bgm.pause()
        that.isVideo = 1
      }
    },
    // 租售滑块
    shopSliderBtn () {
      if (event.target.checked) {
        // 租用
        this.shopType = false
      } else {
        // 购买
        this.shopType = true
      }
    },
    // 案例分类
    protectBtn (type) {
      this.protectIndex = type
    }
  }
}
</script>
<style scoped>
@import '../assets/css/index.css';
</style>
