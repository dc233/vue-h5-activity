import * as types from "./mutation-types";
const mutations = {
  [types.USERNAME](state, userName) {
    state.userName = userName;
  },
  [types.TOKEN](state, token) {
    state.token = token;
  },
  [types.GOODS_DETAILS](state, goodsDetails) {
    state.goodsDetails = goodsDetails;
  },
  // 微信
  [types.WXDOOR](state, wxdoor) {
    state.wxdoor = wxdoor;
  },
  [types.WXINTERIOR](state, wxinterior) {
    state.wxinterior = wxinterior;
  },
  [types.WXCASHIER](state, wxcashier) {
    state.wxcashier = wxcashier;
  },
  [types.WXLICENESE](state, wxlicenese) {
    state.wxlicenese = wxlicenese;
  },
  [types.WXDATAIMG](state, wxdataimg) {
    state.wxdataimg = wxdataimg;
  },
  // 支付宝
  [types.ZFBDOOR](state, zfbdoor) {
    state.zfbdoor = zfbdoor;
  },
  [types.ZFBINTERIOR](state, zfbinterior) {
    state.zfbinterior = zfbinterior;
  },
  [types.ZFBCASHIER](state, zfbcashier) {
    state.zfbcashier = zfbcashier;
  },
  [types.ZFBLICENESE](state, zfblicenese) {
    state.zfblicenese = zfblicenese;
  },
  [types.ZFBDATAIMG](state, zfbdataim) {
    state.zfbdataim = zfbdataim;
  }
};

export default mutations;
