import { mapMutations, mapGetters, mapActions } from "vuex";
import BaseLoding from "../components/base/baseLoding";
export const vuexData = {
  data() {
    return {
      showFlag: true, //是否显示lodding
      valdataphone: /^1((3[\d])|(4[5,6,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[1-3,5-8])|(9[1,8,9]))\d{8}$/,
      valdatasms: /^[0-9]{4}$/
    };
  },
  components: {
    BaseLoding
  },
  computed: {
    ...mapGetters(["userName", "token", "goodsDetails"])
  },
  methods: {
    ...mapMutations({
      setName: "USERNAME",
      setGoodDetails: "GOODS_DETAILS"
    }),
    ...mapActions(["setToken", "clearToken"]),
    //返回上一页或者首页
    back() {
      this.$router.go(-1);
    },
    // 商品页详情
    detaisl(val) {
      this.setGoodDetails(val);
      this.$router.push({
        name: `Deatils`,
        query: { id: val.goodsId || val.id || val.cid }
      });
    }
  }
};
