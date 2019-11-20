<template>
  <div class="content">
    <div class="zfb">
      <img
        src="../assets/img/zfb.png"
        alt=""
        srcset=""
        @click="handelzfbdisblay"
      />
      <transition enter-active-class="animated fadeIn">
        <div class="dsiblay" v-if="zfbshow">
          <div class="title">蓝海活动</div>
          <div class="actiytycotent">
            <div class="headercotent">
              <p>活动内容</p>
              <p class="gray margintop">
                福喵支付宝餐饮行业优惠费率火热报名中。
              </p>
            </div>
            <div class="line"></div>
            <div class="bodyconetn">
              <p>活动规则</p>
              <p class="gray margintop rowheight">
                1.点击#我要报名#按钮，进入报名填写页面，按
                步骤填写，并上传所需照片；
              </p>
              <p class="gray margintop rowheight">
                2.申请报名后3个工作日内审核，敬请留意活动 页面报名状态提示；
              </p>
              <p class="gray margintop rowheight">
                3.如报名未成功，请按提示修改上传符合规则的
                资料或图片，重新报名；
              </p>
              <p class="gray margintop rowheight">
                4.本活动最终解释权归主办方所有。
              </p>
            </div>
            <div class="line"></div>
            <van-row type="flex" justify="center" class="top">
              <van-button
                round
                type="primary"
                class="btn"
                @click="zfbrouterlink"
                >报名</van-button
              >
            </van-row>
          </div>
        </div>
      </transition>
    </div>
    <div class="zfb">
      <img
        src="../assets/img/wx.png"
        alt=""
        srcset=""
        @click="handelwxdisblay"
      />
      <transition enter-active-class="animated fadeIn">
        <div class="dsiblay" v-if="wxshow">
          <div class="title">绿洲活动</div>
          <div class="actiytycotent">
            <div class="headercotent">
              <p>活动内容</p>
              <p class="gray margintop rowheight">
                好生意优享低成本，福喵微信优惠费率活动 火热报名中。
                重磅优惠，尽早报名，尽早享受微信优惠费率。
              </p>
            </div>
            <div class="line"></div>
            <div class="bodyconetn">
              <p>活动规则</p>
              <p class="gray margintop rowheight">
                1.点击#我要报名#按钮，进入报名填写页面，按
                步骤填写，并上传所需照片；
              </p>
              <p class="gray margintop rowheight">
                2.申请报名后3个工作日内审核，敬请留意活动 页面报名状态提示；
              </p>
              <p class="gray margintop rowheight">
                3.如报名未成功，请按提示修改上传符合规则的
                资料或图片，重新报名；
              </p>
              <p class="gray margintop rowheight">
                4.本活动最终解释权归主办方所有。
              </p>
            </div>
            <div class="line"></div>
            <van-row type="flex" justify="center" class="top">
              <van-button
                round
                type="primary"
                class="btn"
                @click="wxbrouterlink"
                >报名</van-button
              >
            </van-row>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zfbshow: false,
      wxshow: false
    };
  },
  methods: {
    handelzfbdisblay() {
      this.zfbshow = !this.zfbshow;
    },
    handelwxdisblay() {
      this.wxshow = !this.wxshow;
    },
    zfbrouterlink() {
      this.$router.push({
        name: "Zfbactivity",
        query: {
          id: this.$route.query.id,
          user_info: this.$route.query.user_info
        }
      });
    },
    wxbrouterlink() {
      this.$router.push({
        name: "Wxactivity",
        query: {
          id: this.$route.query.id,
          user_info: this.$route.query.user_info
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  .wx {
    img {
      width: 100%;
    }
  }
  .zfb {
    img {
      width: 100%;
    }
    .dsiblay {
      .title {
        padding-left: 22px;
        font-size: 16px;
        height: 42px;
        line-height: 42px;
        background-color: #e9e9e9;
        color: #3e3e3e;
      }
      .actiytycotent {
        font-size: 16px;
        .headercotent {
          padding: 20px 22px 16px 22px;
        }
        .bodyconetn {
          padding: 20px 22px 10px 22px;
        }
      }
    }
  }
}
.gray {
  color: #b3b3b3;
  font-size: 14px;
}
.margintop {
  margin: 10px 0;
}
.rowheight {
  line-height: 20px;
}
.line {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    background-color: #e5e5e5;
    display: block;
    width: 100%;
    height: 1px; /*no*/
    transform: scale(1, 0.5);
    top: 0;
    left: 0;
  }
}
.btn {
  width: 329.5px;
  background-color: #ff9a2d;
  border: none;
  font-size: 19px;
}
.top {
  margin: 10px 0;
}
</style>
