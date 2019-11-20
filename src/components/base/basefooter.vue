<template>
  <van-tabbar active-color="#e60181" inactive-color="#999" v-model="active">
    <van-tabbar-item
      @click="$router.push({ name: val.page })"
      v-for="val of tabArr"
      :key="val.id"
      :icon="val.icon"
      :class="{ active }"
      >{{ val.title }}</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
export default {
  props: {
    actives: {
      type: null,
      default: 0
    }
  },
  data() {
    return {
      tabArr: [
        { id: 1, title: "商城", icon: "wap-home", page: "home" },
        { id: 2, title: "分类", icon: "wap-nav", page: "Category" },
        { id: 3, title: "购物车", icon: "shopping-cart", page: "ShoppingCart" },
        { id: 4, title: "我的", icon: "contact", page: "My" }
      ],
      active: this.actives
    };
  }
};
</script>
