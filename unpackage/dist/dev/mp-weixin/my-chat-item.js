"use strict";
const common_time = require("./common/time.js");
const common_vendor = require("./common/vendor.js");
const MyAvatar = () => "./compoents/my-ui/my-avatar2.js";
const _sfc_main = {
  components: {
    MyAvatar
  },
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default: ""
    },
    preTime: {
      tyepe: [String, Number],
      default: 0
    },
    index: Number
  },
  computed: {
    //是否是本人
    isSelf() {
      const id = 1;
      return this.item.user_id === id;
    },
    showTime() {
      return common_time.$T.getChatTime(this.item.create_time, this.preTime);
    },
    hasLabel() {
      return this.item.type === "text" || this.item.type === "audio";
    },
    labelClass() {
      if (this.hasLabel) {
        return "pd";
      } else {
        return " ";
      }
    }
  },
  methods: {
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
    }
  }
};
if (!Array) {
  const _component_MyAvatar = common_vendor.resolveComponent("MyAvatar");
  _component_MyAvatar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($options.showTime),
    b: $props.item.isRemove
  }, $props.item.isRemove ? {
    c: common_vendor.t($options.isSelf ? "你" : "对方")
  } : {}, {
    d: !$options.isSelf
  }, !$options.isSelf ? common_vendor.e({
    e: common_vendor.p({
      src: $props.item.avatar,
      size: "70"
    }),
    f: $props.item.type === "text"
  }, $props.item.type === "text" ? {} : {}, {
    g: $props.item.type === "text"
  }, $props.item.type === "text" ? {
    h: common_vendor.t($props.item.data)
  } : {}, {
    i: $props.item.type === "emoji"
  }, $props.item.type === "emoji" ? {
    j: $props.item.data
  } : {}, {
    k: common_vendor.n($options.labelClass)
  }) : common_vendor.e({
    l: $props.item.type === "text"
  }, $props.item.type === "text" ? {
    m: common_vendor.t($props.item.data)
  } : {}, {
    n: $props.item.type === "emoji"
  }, $props.item.type === "emoji" ? {
    o: $props.item.data
  } : {}, {
    p: common_vendor.n($options.labelClass),
    q: $props.item.type === "text"
  }, $props.item.type === "text" ? {} : {}, {
    r: common_vendor.p({
      src: $props.item.avatar,
      size: "70"
    })
  }), {
    s: common_vendor.o((...args) => $options.onLong && $options.onLong(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ca41c7ef"], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-chat-item.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
