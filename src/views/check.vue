<template>
  <div class="content">
    <van-row type="flex" justify="center" class="top">
      <van-icon name="clock" color="#ff9a2d" />
    </van-row>
    <div class="text">此商户正在审核中,请耐心等待</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  text-align: center;
}
.top {
  font-size: 100px;
  margin-top: 50%;
}
.text {
  padding-top: 20px;
  font-size: 16px;
}
</style>
