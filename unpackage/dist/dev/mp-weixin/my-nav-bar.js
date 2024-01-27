"use strict";
const common_vendor = require("./common/vendor.js");
const MyPopUp = () => "./compoents/my-ui/my-pop-up2.js";
const MyIconButton = () => "./compoents/my-ui/my-icon-button2.js";
const _sfc_main = {
  components: {
    MyIconButton,
    MyPopUp
  },
  props: {
    title: {
      type: [String, Boolean],
      default: false
    },
    fixed: {
      type: Boolean,
      default: true
    },
    noreadnum: {
      type: Number,
      default: 0
    },
    menus: {
      type: Array,
      default: []
    },
    isShowBack: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      statusBarHeight: 0,
      navBarHeight: 0,
      menu: [{
        name: "发起群聊",
        event: "setChat",
        icon: ""
      }, {
        name: "添加好友",
        event: "set",
        icon: ""
      }, {
        name: "扫一扫",
        event: "setTop",
        icon: ""
      }, {
        name: "收付款",
        event: "setTop",
        icon: ""
      }, {
        name: "帮助与反馈",
        event: "setTop",
        icon: ""
      }]
    };
  },
  onLoad() {
  },
  methods: {
    openExtend() {
      this.$refs.extend.show(common_vendor.index.upx2px(460), common_vendor.index.upx2px(100));
    },
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
  },
  computed: {
    getTitle() {
      this.onreadnum > 0 ? this.noreadnum : "";
      return `${this.title}(${this.noreadnum})`;
    },
    fixedStyle() {
      return `height:${this.navBarHeight}px`;
    }
  },
  mounted() {
    this.navBarHeight = this.statusBarHeight + common_vendor.index.upx2px(90);
  }
};
if (!Array) {
  const _component_my_icon_button = common_vendor.resolveComponent("my-icon-button");
  const _component_my_pop_up = common_vendor.resolveComponent("my-pop-up");
  (_component_my_icon_button + _component_my_pop_up)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.s("height:" + $data.statusBarHeight + "px"),
    b: $props.isShowBack
  }, $props.isShowBack ? {
    c: common_vendor.o($options.back),
    d: common_vendor.p({
      icon: ""
    })
  } : {}, {
    e: $props.title
  }, $props.title ? {
    f: common_vendor.t($options.getTitle)
  } : {}, {
    g: common_vendor.o(_ctx.a),
    h: common_vendor.p({
      icon: ""
    }),
    i: common_vendor.o($options.openExtend),
    j: common_vendor.p({
      icon: ""
    }),
    k: common_vendor.n($props.fixed ? "fixed-top" : "fixed"),
    l: $props.fixed
  }, $props.fixed ? {
    m: common_vendor.s($options.fixedStyle)
  } : {}, {
    n: common_vendor.f($data.menu, (item, index, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.t(item.name),
        c: common_vendor.o(($event) => _ctx.Click(item.event), index),
        d: index
      };
    }),
    o: common_vendor.sr("extend", "8392fc52-3"),
    p: common_vendor.p({
      ["body-height"]: 105,
      ["body-width"]: 300,
      ["body-bg-color"]: "bg-dark"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-nav-bar.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
