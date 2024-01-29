"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "my-image",
  props: ["src", "imageClass"],
  setup(__props) {
    const props = __props;
    const h = common_vendor.ref("100");
    const w = common_vendor.ref("100");
    const imageStyle = common_vendor.computed(() => {
      const height = h.value;
      const width = w.value;
      return `width:${width}px;height:${height}px; border-radius: 10rpx;`;
    });
    const loadImage = (e) => {
      const {
        width,
        height
      } = e.detail;
      console.log(e.detail);
      const maxW = common_vendor.index.upx2px(500);
      const maxH = common_vendor.index.upx2px(500);
      if (height < maxH) {
        w.value = w.value <= maxW ? width : maxW;
        h.value = height;
        return;
      }
      h.value = maxH;
      const width2 = maxH * (width / height);
      w.value = width2 < width ? width2 : maxW;
      console.log(h.value, w.value);
    };
    return (_ctx, _cache) => {
      return {
        a: props.src,
        b: common_vendor.n(__props.imageClass),
        c: common_vendor.s(common_vendor.unref(imageStyle)),
        d: common_vendor.o(loadImage),
        e: common_vendor.o(($event) => _ctx.$emit("click"))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/uniapp/仿微信/compoents/my-ui/my-image.vue"]]);
wx.createComponent(Component);
