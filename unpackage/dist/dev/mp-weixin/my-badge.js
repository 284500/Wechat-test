"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {},
  props: {
    badgeClass: {
      type: String,
      default: ""
    },
    badgeStyle: {
      type: String,
      default: ""
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($props.badgeClass),
    b: common_vendor.s($props.badgeStyle)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1d866686"], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-badge.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
