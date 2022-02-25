<template>
  <div class="mianDiv">
<!-- 顶部标题 -->
    <section class="TopDivs">
      <div class="bgImgDiv"></div>
      <div class="titleDiv">
        <h1>移动应用程序开发</h1>
      </div>
    </section>
<!--    说明-->
    <section class="padTop_100">
      <div class="Width1400 developDiv">
        <!--        item1-->
        <div class="developDivItem clearfix">
          <div class="div1">
            <img src="../assets/img/app2.jpg"/>
          </div>
          <div class="div2">
            <p class="h2Title h2TitleLeft">我们的服务包括设计、开发及推广</p>
            <div class="spanText">
              所有的设计源于内容规划，内容是取决于企业特点、目标客户及市场策略，而开发则是实现内容和设计，三者缺一不可。因此在策划阶段，我们首先研究企业经营特点、运营目标、分析企业终端客户及市场状况，然后规划内容与功能，根据内容与功能再决定采用什么样的设计。最后我们会采用稳定安全的技术方案开发。在整个策划过程中我们已充分了解客户情况从而可以做出最适合的网上推广方案。
            </div>
          </div>
        </div>
        <!--        item1-->
        <div class="developDivItem clearfix">
          <div class="div1">
            <img src="../assets/img/app1.png"/>
          </div>
          <div class="div2">
            <p class="h2Title h2TitleLeft">原生APP</p>
            <div class="spanText">
              原生语言程序是为了特定的操作系统而编码，每一种都需要独立开发,如iPhone，iPad，安卓等都需要使用各自的软件开发包、开发工具及控件。因此它的性能是最优越的。
            </div>
          </div>
        </div>
        <div class="developDivItem clearfix">
          <div class="div1">
            <img src="../assets/img/app1.png"/>
          </div>
          <div class="div2">
            <p class="h2Title h2TitleLeft">混合APP</p>
            <div class="spanText">
              混合语言程序的部份代码会以Web技术编写，如HTML5, CSS和JavaScript. 这些程序都是被包裹在原生容器(Native Container)和透过手机上的浏览器引擎来呈现HTML和执行JavaScript. Hybrid APP的优点是一个编码程序能够跨越不同的作业平台，不需要为每个操作系统编写特定的编码。
            </div>
          </div>
        </div>
        <div class="developDivItem clearfix">
          <div class="div1">
            <img src="../assets/img/app1.png"/>
          </div>
          <div class="div2">
            <p class="h2Title h2TitleLeft">Web APP</p>
            <div class="spanText">
              Web APP可以当作计算机上的网页，更多是页面展示类的APP。通过移动设备上的浏览器访问，软件更新只需要更新服务器就够了。用户层面不需要做任何操作，不需要安装客户端。
            </div>
          </div>
        </div>
      </div>
    </section>
<!--    案例展示-->
    <section class="pad_100">
      <div class="Width1200">
        <div class="textCenter">
          <p class="h2Title h2TitleCenter">案例展示</p>
        </div>
        <div class="projectDiv">
          <div class="appProject">
            <ul class="clearfix div4li">
              <li @click="showAppImg">
                <div>
                  <img src="../assets/img/projectApp/projectApp1.png">
                </div>
              </li>
              <li @click="showAppImg">
                <div>
                  <img src="../assets/img/projectApp/projectApp3.png">
                </div>
              </li>
              <li @click="showAppImg">
                <div>
                  <img src="../assets/img/projectApp/projectApp4.png">
                </div>
              </li>
              <li @click="showAppImg">
                <div>
                  <img src="../assets/img/projectApp/projectApp4.png">
                </div>
              </li>
            </ul>
            <ul class="clearfix div3li">
              <li @click="showIpadImg">
                <div>
                  <img src="../assets/img/projectApp/projectApp2.png">
                </div>
              </li>
              <li @click="showIpadImg">
                <div>
                  <img src="../assets/img/projectApp/projectApp2.png">
                </div>
              </li>
              <li @click="showIpadImg">
                <div>
                  <img src="../assets/img/projectApp/projectApp2.png">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
<!--    案例弹窗-->
    <div class="modalBigDiv" :class="{'show': isAppModal === 1}">
      <div class="modalBgDiv"></div>
      <div class="modalTextDiv">
        <button class="modalClose" @click="modalClose"><i class="iconfont icon-cha1"></i></button>
        <div class="modalText">
          <ul class="modalAppImg">
            <li>
              <img src="../assets/img/projectApp/projectApp1.png">
            </li><li>
              <img src="../assets/img/projectApp/projectApp4.png">
            </li><li>
              <img src="../assets/img/projectApp/projectApp3.png">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="modalBigDiv" :class="{'show': isIpadModal === 1}">
      <div class="modalBgDiv"></div>
      <div class="modalTextDiv">
        <button class="modalClose" @click="modalClose"><i class="iconfont icon-cha1"></i></button>
        <div class="modalText">
          <div class="modalIpadImg">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide>
                <img src="../assets/img/projectApp/projectApp2.png">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/img/projectApp/projectApp2.png">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/img/projectApp/projectApp2.png">
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import '../assets/css/swiper.min.css'
export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      isAppModal: 0,
      isIpadModal: 0
    }
  },
  methods: {
    showAppImg () {
      this.isAppModal = 1
    },
    showIpadImg () {
      this.isIpadModal = 1
    },
    // 关闭弹框
    modalClose () {
      this.isAppModal = this.isIpadModal = 0
    }
  }
}
</script>

<style scoped>
@import "../assets/css/develop.css";
</style>
<style>
.modalIpadImg .swiper-pagination-bullet{
  width: 10px;
  height: 10px;
  background: #FFFFFF;
  opacity: 1;
}
.modalIpadImg .swiper-pagination-bullet-active{
  background: #419eef;
}
</style>
