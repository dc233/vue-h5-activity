<template>
  <!-- 数据加载提示loadding -->
  <div class="loader31 loader" v-show="showFlag">
    <van-loading type="spinner" />
  </div>
</template>
<script>
export default {
  props: {
    showFlag: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style lang="scss" scoped>
.loader {
  width: 40px;
  height: 40px;
  margin: auto;
  float: left;
  justify-content: center;
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 13%;
  transform: translateX(-50%);
}
</style>
