"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  computed: {
    getIamgeStyle() {
      return `width:${this.imageSize}rpx;height:${this.imageSize}rpx;`;
    }
  },
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    isShowRight: {
      type: Boolean,
      default: false
    },
    imageSize: {
      type: Number,
      default: 75
    },
    notBottom: {
      type: Boolean,
      default: true
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.imgUrl
  }, $props.imgUrl ? {
    b: $props.imgUrl,
    c: common_vendor.s($options.getIamgeStyle)
  } : {}, {
    d: common_vendor.t($props.title),
    e: $props.isShowRight
  }, $props.isShowRight ? {} : {}, {
    f: $props.notBottom ? 1 : "",
    g: common_vendor.o(($event) => _ctx.$emit("click"))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-list-item.vue"]]);
wx.createComponent(Component);
