module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ["Android >= 4.0", "iOS >= 7"]
    },
    "postcss-pxtorem": {
      rootValue: 37.5, //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      propList: ["*"], //对哪些属性生效，未被匹配的属性不会把px替换为rem
      unitPrecision: 2 //px变为rem后保留的小数位数
      // minPixelValue: 12 //px小于6px时不替换为rem
    }
  }
};
