"use strict";
const common_vendor = require("../../../common/vendor.js");
const MyDivider = () => "../../../compoents/my-ui/my-divider.js";
const MyListItem = () => "../../../compoents/my-ui/my-list-item.js";
const _sfc_main = {
  components: {
    MyDivider,
    MyListItem
  },
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _component_my_list_item = common_vendor.resolveComponent("my-list-item");
  const _component_my_divider = common_vendor.resolveComponent("my-divider");
  (_component_my_list_item + _component_my_divider)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["img-url"]: "/static/images/mail/friend.png",
      ["image-size"]: 120,
      ["is-show-right"]: true
    }),
    b: common_vendor.p({
      title: "支付",
      ["is-show-right"]: true
    }),
    c: common_vendor.p({
      title: "收藏",
      ["is-show-right"]: true
    }),
    d: common_vendor.p({
      title: "相册",
      ["is-show-right"]: true
    }),
    e: common_vendor.p({
      title: "表情",
      ["is-show-right"]: true
    }),
    f: common_vendor.p({
      title: "设置",
      ["is-show-right"]: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/uniapp/仿微信/pages/tabbar/my/my.vue"]]);
wx.createPage(MiniProgramPage);
