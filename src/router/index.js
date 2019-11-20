import Vue from "vue";
import Router from "vue-router";
// import getTitle from "@/until/getTitle";
Vue.use(Router);
export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/views/activitylist.vue"),
    meta: {
      title: "活动列表"
    }
  },
  {
    path: "/wxactivity",
    name: "Wxactivity",
    component: () => import("@/views/home/index"),
    meta: {
      keepAlive: true,
      title: "微信活动报名"
    }
  },
  {
    path: "/dooruplod",
    name: "Dooruplod",
    component: () => import("@/views/home/component/doorUpload"),
    meta: {
      keepAlive: true,
      title: "门店照片"
    }
  },
  {
    path: "/interioruplod",
    name: "Interioruplod",
    component: () => import("@/views/home/component/InteriorUpload"),
    meta: {
      keepAlive: true,
      title: "内景照片"
    }
  },
  {
    path: "/cashieruplod",
    name: "Cashieruplod",
    component: () => import("@/views/home/component/CashierUpload"),
    meta: {
      keepAlive: true,
      title: "收银台照片"
    }
  },
  {
    path: "/licenseuplod",
    name: "Licenseuplod",
    component: () => import("@/views/home/component/LicenseUpload"),
    meta: {
      keepAlive: true,
      title: "营业执照照片"
    }
  },
  {
    path: "/datauplod",
    name: "Datauplod",
    component: () => import("@/views/home/component/DataUpload"),
    meta: {
      keepAlive: true,
      title: "补充资料"
    }
  },
  {
    path: "/zfbactivity",
    name: "Zfbactivity",
    component: () => import("@/views/activity/index"),
    meta: {
      keepAlive: true,
      title: "支付宝活动报名"
    }
  },
  {
    path: "/adooruplod",
    name: "Adooruplod",
    component: () => import("@/views/activity/component/doorUpload"),
    meta: {
      keepAlive: true,
      title: "门店照片"
    }
  },
  {
    path: "/ainterioruplod",
    name: "Ainterioruplod",
    component: () => import("@/views/activity/component/InteriorUpload"),
    meta: {
      keepAlive: true,
      title: "内景照片"
    }
  },
  {
    path: "/acashieruplod",
    name: "Acashieruplod",
    component: () => import("@/views/activity/component/CashierUpload"),
    meta: {
      keepAlive: true,
      title: "收银台照片"
    }
  },
  {
    path: "/alicenseuplod",
    name: "Alicenseuplod",
    component: () => import("@/views/activity/component/LicenseUpload"),
    meta: {
      keepAlive: true,
      title: "营业执照照片"
    }
  },
  {
    path: "/adatauplod",
    name: "Adatauplod",
    component: () => import("@/views/activity/component/DataUpload"),
    meta: {
      keepAlive: true,
      title: "补充资料"
    }
  },
  {
    path: "/success",
    name: "Success",
    component: () => import("@/views/success.vue"),
    meta: {
      title: "提交成功"
    }
  },
  {
    path: "/participated",
    name: "Participated",
    component: () => import("@/views/participated.vue"),
    meta: {
      title: "participated"
    }
  },
  {
    path: "/check",
    name: "Check",
    component: () => import("@/views/check.vue"),
    meta: {
      title: "check"
    }
  },
  {
    path: "/loacheck",
    name: "Loacheck",
    component: () => import("@/views/loacheck.vue"),
    meta: {
      title: "loacheck"
    }
  },
  {
    path: "/checkpass",
    name: "Checkpass",
    component: () => import("@/views/checkpass.vue"),
    meta: {
      title: "checkpass"
    }
  }
];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    base: "/activity/",
    routes: constantRoutes
  });
export default createRouter();
