import { token } from "../until/cache";
const state = {
  userName: null, //用户信息
  token: token.getToken(), // 判断用户是否登录
  goodsDetails: {}, // 商品详情
  wxdoor: "", //门店照片
  wxinterior: "", // 内景照片
  wxcashier: "", //  收银台照片
  wxlicenese: "", // 营业执照照片
  wxdataimg: "", // 补充资料照片
  zfbdoor: "", //zfb门店照片
  zfbinterior: "", // zfb内景照片
  zfbcashier: "", //  zfb收银台照片
  zfblicenese: "", // zfb营业执照照片
  zfbdataim: "" // zfb补充资料照片
};

export default state;
