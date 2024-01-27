"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  props: {
    icon: {
      type: String,
      default: ""
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.icon),
    b: common_vendor.o(($event) => _ctx.$emit("click"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-icon-button.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
