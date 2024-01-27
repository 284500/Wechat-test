"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {},
  props: {
    size: {
      type: [String, Number],
      default: 95
    },
    src: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "rounded"
    }
  },
  computed: {
    getStyle() {
      return `height:${this.size}rpx;width:${this.size}rpx;`;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($props.type),
    b: $props.src,
    c: common_vendor.s($options.getStyle)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-avatar.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
