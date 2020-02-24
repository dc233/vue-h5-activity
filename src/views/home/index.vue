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
            name: 'Dooruplod',
            params: {
              url: this.doorimg,
              user: this.$route.query.user_info
            }
          }"
          :value="wxdoor == '' ? showuplod : '已上传'"
        />
        <van-cell
          title="内景照片"
          is-link
          :to="{
            name: 'Interioruplod',
            params: { url: this.interiorimg, user: this.$route.query.user_info }
          }"
          :value="wxinterior == '' ? showuplod : '已上传'"
        />
        <van-cell
          title="收银台照片"
          is-link
          :to="{
            name: 'Cashieruplod',
            params: { url: this.cashierimg, user: this.$route.query.user_info }
          }"
          :value="wxcashier == '' ? showuplod : '已上传'"
        />
        <van-cell
          title="营业执照"
          is-link
          :to="{
            name: 'Licenseuplod',
            params: { url: this.licenseimg, user: this.$route.query.user_info }
          }"
          :value="wxlicenese == '' ? showuplod : '已上传'"
        />
        <van-cell
          title="补充资料"
          is-link
          :to="{
            name: 'Datauplod',
            params: { url: this.dataimg, user: this.$route.query.user_info }
          }"
          :value="wxdataimg == '' ? showuplod : '已上传'"
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
      "wxdoor",
      "wxinterior",
      "wxcashier",
      "wxlicenese",
      "wxdataimg"
    ]),
    appmenucnum() {
      return this.$route.query.id;
    }
  },
  created() {
    this.checkGTeacitivity();
  },
  methods: {
    onClickLeft() {},
    onClickRight() {},
    // 判断用户是参加过绿洲
    /* eslint-disable */
    async checkGTeacitivity() {
      const { data } = await this.$Npost("activity/is_activity", {
        merchant_id: this.$route.query.id,
        user_info: this.$route.query.user_info,
        type: "02"
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
        this.setwxdoor(this.doorimg.replace(/http:\/\/[^\/]*/, ""));
        this.setwxinterior(this.interiorimg.replace(/http:\/\/[^\/]*/, ""));
        this.stewxcashier(this.cashierimg.replace(/http:\/\/[^\/]*/, ""));
        this.setwxdataimg(this.dataimg.replace(/http:\/\/[^\/]*/, ""));
        this.setwxlicenese(this.licenseimg.replace(/http:\/\/[^\/]*/, ""))
        }
      } else if (data.code === 1) {
        // 此商户可以参加蓝海绿洲
        this.id =  this.$route.query.id;
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
        // this.$toast(data.msg);
      }else {

      }
    },
    // 提交活动报名申请
    async handelSunbmit() {
      this.show = true
      const { data } = await this.$Npost("activity/add_activity", {
        id: this.actid,
        user_info: this.$route.query.user_info,
        merchant_id: this.$route.query.id,
        activityType: "02",
        email: "chenjiaqiang@fumiao6.com",
        actStoreSalesmanPic: this.wxdoor,
        actInsideScenePic: this.wxinterior,
        actCounterSalesmanPic: this.wxcashier,
        actMerchantShowPic: this.wxdataimg,
        actLicense: this.wxlicenese
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
      stewxcashier: "WXCASHIER",
      setwxdataimg: "WXDATAIMG",
      setwxdoor: "WXDOOR",
      setwxinterior: "WXINTERIOR",
      setwxlicenese: "WXLICENESE"
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
.potastion {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
