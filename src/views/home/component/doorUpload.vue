<template>
  <div class="content">
    <!-- <van-nav-bar title="门店照片" left-arrow @click-left="onClickLeft">
      <van-icon slot="left" name="arrow-left" color="#3C3C3C" size="20px" />
    </van-nav-bar> -->
    <div class="upload">
      <van-uploader
        v-model="fileList"
        multiple
        :max-count="1"
        :after-read="afterRead"
        :before-read="beforeRead"
      >
        <div class="uploadfirst">
          <img src="../../../assets/img/upload1.png" alt="" />
        </div>
      </van-uploader>
    </div>
    <div class="contentbody">
      <strong>示例图：</strong>
      <span>门头与业务员合照，要求门头照拍摄清晰、招牌完整可见。</span>
      <div v-for="(image, index) in images" :key="index">
        <img :src="image" alt="" @click="getImg(images, index)" />
      </div>
    </div>
    <van-row type="flex" justify="center" class="top">
      <van-button round type="primary" class="btn" @click="onClickLeft"
        >返回上一步</van-button
      >
    </van-row>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      fileList: [],
      images: [require("../../../assets/img/door.jpg")],
      res: null
    };
  },
  computed: {},
  created() {
    this.handelcheckimg();
  },
  mounted() {},
  methods: {
    handelcheckimg() {
      if (this.$route.params.url == "") {
        this.fileList = [];
      } else {
        this.fileList.push(this.$route.params);
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    beforeRead(file) {
      if (file.length == undefined) {
        return true;
      } else if (file.length >= 2) {
        this.$toast("一次只能上传一张图片请重新上传");
        return false;
      } else {
        return true;
      }
    },
    afterRead(file) {
      // 如果图片大于2M压缩后再上传
      const that = this;
      if (file.file.size > 2000000) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const img = new Image();
        img.src = file.content;
        img.onload = () => {
          let canvasWidth = img.width / 2;
          let canvasHeight = img.height / 2;
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;
          context.drawImage(img, 0, 0, canvasWidth, canvasHeight);
          file.content = canvas.toDataURL("image/jpeg", 0.52);
          let myFile = this.dataURLtoBlob(file.content);
          let data = this.blobToFile(myFile, "filename.jpg");
          var formData = new FormData();
          formData.append("upimgs", data, data.name);
          formData.append("user_info", this.$route.params.user);
          that.uploadimg(formData);
        };
      } else {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const img = new Image();
        img.src = file.content;
        img.onload = () => {
          let canvasWidth = img.width;
          let canvasHeight = img.height;
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;
          context.drawImage(img, 0, 0, canvasWidth, canvasHeight);
          file.content = canvas.toDataURL("image/jpeg", 0.52);
          let myFile = this.dataURLtoBlob(file.content);
          let data = this.blobToFile(myFile, "filename.jpg");
          var formData = new FormData();
          formData.append("upimgs", data, data.name);
          formData.append("user_info", this.$route.params.user);
          that.uploadimg(formData);
        };
      }
    },
    async uploadimg(formData) {
      const { data } = await this.$post("merchant/upimg", formData);
      if (!!data.status && data.code === 1) {
        this.$toast("图片上传成功");
        this.setwxdoor(data.data.src);
      } else {
        this.$toast(data.msg);
      }
    },
    getImg(images, index) {
      ImagePreview({
        images: images,
        showIndex: true,
        loop: false,
        startPosition: index
      });
    },
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(",");
      var mime = arr[0].match(/:(.*?);/)[1];
      var bstr = atob(arr[1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    dataURLtoBlob(toDataURL) {
      var arr = toDataURL.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },
    blobToFile(Blob, fileName) {
      Blob.lastModifiedDate = new Date();
      Blob.name = fileName;
      return Blob;
    },
    ...mapMutations({
      setwxdoor: "WXDOOR"
    })
  }
};
</script>
<style lang="scss" scoped>
.upload {
  padding: 20px 20px;
  border-bottom: 1px solid #ebedf0;
}
.uploadfirst {
  width: 73px;
  height: 73px;
  img {
    width: 73px;
  }
}
.contentbody {
  padding: 20px;
  border-bottom: 1px solid #ebedf0;
  text-align: left;
  line-height: 24px;
  font-size: 16px;
  span {
    color: #8c8c8c;
  }
  img {
    width: 73px;
    margin-top: 38px;
    border: 1px dashed #ccc;
  }
}
.top {
  margin-top: 100px;
}
.btn {
  width: 229.5px;
  background-color: #ff9a2d;
  border: none;
  font-size: 19px;
}
</style>
