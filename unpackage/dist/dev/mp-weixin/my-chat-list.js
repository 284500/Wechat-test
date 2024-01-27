"use strict";
const common_vendor = require("./common/vendor.js");
const common_time = require("./common/time.js");
const MyAvatar = () => "./compoents/my-ui/my-avatar2.js";
const MyBadge = () => "./compoents/my-ui/my-badge2.js";
const _sfc_main = {
  components: {
    MyAvatar,
    MyBadge
  },
  data() {
    return {};
  },
  methods: {
    onClick() {
      common_vendor.index.navigateTo({
        url: "/pages/chat/chat"
      });
    },
    onLong(e) {
      let x = 0;
      let y = 0;
      if (Array.isArray(e.changedTouches) && e.changedTouches.length > 0) {
        x = e.changedTouches[0].clientX || e.changedTouches[0].screenX;
        y = e.changedTouches[0].clientY || e.changedTouches[0].screenY;
      }
      this.$emit("Long", {
        x,
        y,
        index: this.index
      });
      console.log(x, y);
    }
  },
  props: {
    item: Object,
    index: Number
  },
  computed: {
    showTime() {
      return common_time.$T.gettime(this.item.update_time);
    }
  }
};
if (!Array) {
  const _component_my_avatar = common_vendor.resolveComponent("my-avatar");
  const _component_my_badge = common_vendor.resolveComponent("my-badge");
  (_component_my_avatar + _component_my_badge)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      src: $props.item.avater
    }),
    b: common_vendor.t($props.item.nickname),
    c: common_vendor.t($options.showTime),
    d: common_vendor.t($props.item.data),
    e: $props.item.num > 0
  }, $props.item.num > 0 ? {
    f: common_vendor.t($props.item.num || $props.index + 1),
    g: common_vendor.p({
      ["badge-class"]: "position-absolute",
      ["badge-style"]: "right:30rpx;bottom:30rpx"
    })
  } : {}, {
    h: common_vendor.n($props.item.isTop ? "bg-light" : "bg-white"),
    i: common_vendor.o((...args) => $options.onClick && $options.onClick(...args)),
    j: common_vendor.o((...args) => $options.onLong && $options.onLong(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-chat-list.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
