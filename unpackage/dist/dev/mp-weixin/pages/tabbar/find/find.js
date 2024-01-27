"use strict";
const common_vendor = require("../../../common/vendor.js");
const MyAvatar = () => "../../../compoents/my-ui/my-avatar2.js";
const MyListItem = () => "../../../compoents/my-ui/my-list-item.js";
const MyNavBar = () => "../../../compoents/my-ui/my-nav-bar2.js";
const MyDivider = () => "../../../compoents/my-ui/my-divider.js";
const MyPopUp = () => "../../../compoents/my-ui/my-pop-up2.js";
const _sfc_main = {
  components: {
    MyNavBar,
    MyPopUp,
    MyListItem,
    MyAvatar,
    MyDivider
  },
  data() {
    return {};
  },
  methods: {
    showTip() {
      common_vendor.index.showToast({
        title: "敬请期待"
      });
    }
  }
};
if (!Array) {
  const _component_my_nav_bar = common_vendor.resolveComponent("my-nav-bar");
  const _component_my_avatar = common_vendor.resolveComponent("my-avatar");
  const _component_my_list_item = common_vendor.resolveComponent("my-list-item");
  const _component_my_divider = common_vendor.resolveComponent("my-divider");
  (_component_my_nav_bar + _component_my_avatar + _component_my_list_item + _component_my_divider)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      size: "55",
      src: "/static/images/mail/friend.png"
    }),
    b: common_vendor.o($options.showTip),
    c: common_vendor.p({
      title: "朋友圈",
      ["is-show-right"]: true
    }),
    d: common_vendor.o($options.showTip),
    e: common_vendor.p({
      title: "扫一扫",
      ["is-show-right"]: true
    }),
    f: common_vendor.o($options.showTip),
    g: common_vendor.p({
      title: "摇一摇",
      ["is-show-right"]: true
    }),
    h: common_vendor.o($options.showTip),
    i: common_vendor.p({
      title: "搜一搜",
      ["is-show-right"]: true
    }),
    j: common_vendor.o($options.showTip),
    k: common_vendor.p({
      title: "看一看",
      ["is-show-right"]: true
    }),
    l: common_vendor.o($options.showTip),
    m: common_vendor.p({
      title: "购物",
      ["is-show-right"]: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/uniapp/仿微信/pages/tabbar/find/find.vue"]]);
wx.createPage(MiniProgramPage);
