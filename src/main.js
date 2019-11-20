import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "amfe-flexible";
import "normalize.css";
import "./assets/style/index.scss";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
// 解决移动端click事件300毫秒延迟方法
import FastClick from "fastclick";
FastClick.attach(document.body);
import { post, get, Npost } from "./until/http";
import animated from "animate.css";
Vue.use(animated);
import {
  Button,
  Row,
  Col,
  Icon,
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  List,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  NavBar,
  Loading,
  Cell,
  CellGroup,
  Field,
  Toast,
  Tag,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Uploader,
  NoticeBar
} from "vant";
import "vant/lib/index.css";
Vue.config.productionTip = false;
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$Npost = Npost;
Vue.use(Button)
  .use(Col)
  .use(Row)
  .use(Icon)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(VueAwesomeSwiper)
  .use(List)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(NavBar)
  .use(Loading)
  .use(Cell)
  .use(CellGroup)
  .use(Field)
  .use(Toast)
  .use(Tag)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Uploader)
  .use(NoticeBar);
Vue.filter("toFixed", function(val) {
  val = Number(val);
  return val.toFixed(2);
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
