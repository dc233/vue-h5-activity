<template>
  <!-- 商品列表组件 -->
  <ul>
    <li v-for="item in oldlist" :key="item.id">
      <div class="imge-left">
        <img :src="item.image" alt="" />
      </div>
      <div>
        <p class="p1">{{ item.name }}</p>
        <p class="p2">
          <span class="pic" v-if="isOrder"
            >￥{{ (item.present_price * item.count).toFixed(2) }}</span
          >
          <span class="pic" v-else>￥{{ item.present_price }}</span>
          <span class="orl-pic">{{ item.orl_price }}</span>
          <span class="count" v-if="isOrder">x{{ item.count }}</span>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: null,
      default: () => {
        return [];
      }
    },
    isOrder: {
      type: Boolean,
      default: false
    },
    searchVal: {
      type: null,
      default: ""
    }
  },
  data() {
    return {
      oldlist: this.list
    };
  },
  watch: {
    list: {
      handler(newval) {
        this.oldlist = newval;
      },
      deep: true
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  background: #fff;
  li {
    height: 100px;
    display: flex;
    padding: 10px 15px;
    font-size: 12px;
    box-sizing: border-box;
    position: relative;
    justify-content: flex-start;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #eaeaea;
      opacity: 0.5;
    }
    img {
      width: 80px;
    }
    .p1 {
      padding-left: 20px;
      text-align: left;
      line-height: 20px;
    }
    .p2 {
      text-align: left;
      padding-left: 20px;
      .pic {
        color: red;
        font-weight: 700;
        margin-right: 1.333vw;
      }
      .orl-pic {
        text-decoration: line-through;
      }
    }
  }
}
</style>
