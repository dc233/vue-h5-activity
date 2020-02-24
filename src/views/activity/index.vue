<!-- home -->
<template>
  <div>
    <div class="content">
      <van-field
        v-model="appmenucnum"
        clearable
        label="商户编号："
        placeholder="与营业执照上的信息一致"
        disabled
      />
      <van-field
        v-model="linescardname"
        clearable
        label="营业执照名称："
        disabled
      />
      <van-field v-model="name" clearable label="商户名称：" disabled />
      <van-field
        v-model="aderess"
        clearable
        label="经营地址："
        type="textarea"
        disabled
        autosize
      />
      <van-cell-group class="upload">
        <van-cell
          title="门店照片"
          is-link
          :to="{
            name: 'Adooruplod',
            params: { url: this.doorimg, user: this.$route.query.user_info }
          }"
          :value="zfbdoor == '' ? showuplod : '已上传'"
        />
        <van-cell
          title="内景照片"
          is-link
          :to="{
            name: 'Ainterioruplod',
            params: { url: this.interiorimg, user: this.$route.query.user_info }
          }"
          :value="zfbinterior == '' ? showuplod : '已上传'"
        />
        <van-cell
          title="收银台照片"
          is-link
          :to="{
            name: 'Acashieruplod',
            params: { url: this.cashierimg, user: this.$route.query.user_info }
          }"
          :value="zfbcashier == '' ? showuplod : '已上传'"
        />
        <van-cell
          title="营业执照"
          is-link
          :to="{
            name: 'Alicenseuplod',
            params: { url: this.licenseimg, user: this.$route.query.user_info }
          }"
          :value="zfblicenese == '' ? showuplod : '已上传'"
        />
        <van-cell
          title="补充资料"
          is-link
          :to="{
            name: 'Adatauplod',
            params: { url: this.dataimg, user: this.$route.query.user_info }
          }"
          :value="zfbdataim == '' ? showuplod : '已上传'"
        />
      </van-cell-group>
    </div>
    <div class="rejectmsg" v-if="rejectmsg">
      <van-notice-bar wrapable :scrollable="false">
        {{ rejectmsg }}
      </van-notice-bar>
    </div>
    <van-row type="flex" justify="center" class="top">
      <van-button round type="primary" class="btn" @click="handelSunbmit"
        >提交</van-button
      >
    </van-row>
    <div class="potastion" v-if="show">
      <van-loading type="spinner" color="#ff9a2d" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      mchennum: "",
      mchenname: "",
      doorname: "",
      rejectmsg: "",
      doorimg: "",
      interiorimg: "",
      cashierimg: "",
      licenseimg: "",
      dataimg: "",
      showuplod: "去上传",
      name: "",
      linescardname: "",
      aderess: "",
      id: "",
      actid: "",
      show: false
    };
  },
  computed: {
    ...mapGetters([
      "zfbdoor",
      "zfbinterior",
      "zfbcashier",
      "zfblicenese",
      "zfbdataim"
    ]),
    appmenucnum() {
      return this.$route.query.id;
    }
  },
  created() {
    this.checkGTeacitivity();
  },
  mounted() {},
  methods: {
    onClickLeft() {},
    onClickRight() {},
    // 判断用户是参加过蓝海
    /* eslint-disable */
    async checkGTeacitivity() {
      const { data } = await this.$Npost("activity/is_activity", {
        merchant_id: this.$route.query.id,
        user_info: this.$route.query.user_info,
        type: "01"
      });
      // 驳回
      if (data.code === 0) {
        this.rejectmsg = data.data.info.activity_verify_info;
        if(data.data.length === 0) {
          this.$router.push({ path: "/participated" });
        }else {
        this.linescardname = data.data.incoming_parts_content.cprRegNmCn;
        this.name = data.data.incoming_parts_content.actNm;
        this.aderess = data.data.incoming_parts_content.cprRegAddr;
        this.doorimg = data.data.info.actStoreSalesmanPic;
        this.interiorimg = data.data.info.actInsideScenePic;
        this.cashierimg = data.data.info.actCounterSalesmanPic;
        this.licenseimg = data.data.info.actLicense;
        this.dataimg = data.data.info.actMerchantShowPic;
        this.actid = data.data.info.id;
        this.id = this.$route.query.id;
        this.setzfbdoor(this.doorimg.replace(/http:\/\/[^\/]*/, ""));
        this.setzfbinterior(this.interiorimg.replace(/http:\/\/[^\/]*/, ""));
        this.setzfbcashier(this.cashierimg.replace(/http:\/\/[^\/]*/, ""));
        this.setzfbdataim(this.dataimg.replace(/http:\/\/[^\/]*/, ""));
        this.setzfblicenese(this.licenseimg.replace(/http:\/\/[^\/]*/, ""))
        }
      } else if (data.code === 1) {
        this.id = this.$route.query.id;
        this.name = data.data.incoming_parts_content.actNm;
        this.linescardname = data.data.incoming_parts_content.cprRegNmCn;
        this.aderess = data.data.incoming_parts_content.cprRegAddr;
      } else if (data.code === 2) {
         // 正在审核中
         this.$router.push({ path: "/check" });
      } else if (data.code === 3) {
        // 待审核
        this.$router.push({ path: "/loacheck" });
      } else if(data.code === 200) {
        // 审核通过
        this.$router.push({ path: "/checkpass" });
      }else {
        // this.$toast(data.msg);
      }
    },
    // 提交活动报名申请
    async handelSunbmit() {
      this.show = true
      const { data } = await this.$Npost("activity/add_activity", {
        id: this.actid,
        merchant_id: this.$route.query.id,
        user_info: this.$route.query.user_info,
        activityType: "01",
        email: "chenjiaqiang@fumiao6.com",
        actStoreSalesmanPic: this.zfbdoor,
        actInsideScenePic: this.zfbinterior,
        actCounterSalesmanPic: this.zfbcashier,
        actMerchantShowPic: this.zfbdataim,
        actLicense: this.zfblicenese
      });
      if (data.code === 1) {
        this.show = false
        this.$router.push({ path: "/success" });
      } else {
        this.show = false
        this.$toast(data.msg);
      }
    },
    ...mapMutations({
      setzfbcashier: "ZFBCASHIER",
      setzfbdataim: "ZFBDATAIMG",
      setzfbdoor: "ZFBDOOR",
      setzfbinterior: "ZFBINTERIOR",
      setzfblicenese: "ZFBLICENESE"
    })
  }
};
</script>
<style lang="scss" scoped>
.content {
  background-color: #eeeeee;
  .upload {
    margin-top: 10px;
  }
  .van-field__label {
    width: 100px;
  }
}
.btn {
  width: 329.5px;
  background-color: #ff9a2d;
  border: none;
  font-size: 19px;
}
.top {
  margin-top: 50px;
}
.rejectmsg {
  font-size: 14px;
  text-align: center;
}
h1 {
  background: red;
  width: 375px;
}
.potastion {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
