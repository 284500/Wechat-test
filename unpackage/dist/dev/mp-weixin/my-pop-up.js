"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  data() {
    return {
      x: -1,
      y: -1,
      res: {},
      // maxX: 0,
      // maxY: 0,
      status: false
    };
  },
  methods: {
    show(x = -1, y = -1) {
      this.status = true;
      this.$nextTick(() => {
        this.x = x > this.maxX ? this.maxX : x;
        this.y = y > this.maxY ? this.maxY : y;
      });
    },
    hide() {
      this.status = false;
      this.$emit("hide");
    }
  },
  props: {
    //遮罩层颜色
    maskColor: {
      type: Boolean,
      default: false
    },
    //是否开启遮罩
    mask: {
      type: Boolean,
      default: true
    },
    //是否处于底部
    fixBottom: {
      type: Boolean,
      default: false
    },
    // 弹出层内容高度
    bodyHeight: {
      type: Number,
      default: 0
    },
    // 弹出层内容高度
    bodyWidth: {
      type: Number,
      default: 0
    },
    //背景颜色
    bodyBgColor: {
      type: String,
      default: "bg-white"
    },
    tabbarHeight: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    const res = common_vendor.index.getSystemInfoSync();
    this.res = res;
  },
  computed: {
    getMaskColor() {
      let color = this.maskColor ? 0.5 : 0;
      return `background-color:rgba(0,0,0,${color})`;
    },
    getBodyClass() {
      let fixBottom = this.fixBottom ? "left-0 right-0 bottom-0" : "rounded border";
      return fixBottom;
    },
    getBodyStyle() {
      let left = this.x > -1 ? `left:${this.x}px;` : "";
      let top = this.y > -1 ? `top:${this.y}px;` : "";
      return `${left}${top}`;
    },
    maxX() {
      return this.res.screenWidth - common_vendor.index.upx2px(this.bodyWidth);
    },
    maxY() {
      return this.res.screenHeight - common_vendor.index.upx2px(this.bodyHeight) - common_vendor.index.upx2px(this.tabbarHeight);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.status
  }, $data.status ? common_vendor.e({
    b: $props.mask
  }, $props.mask ? {
    c: common_vendor.o((...args) => $options.hide && $options.hide(...args)),
    d: common_vendor.s($options.getMaskColor)
  } : {}, {
    e: common_vendor.n($options.getBodyClass),
    f: common_vendor.n($props.bodyBgColor),
    g: common_vendor.s($options.getBodyStyle)
  }) : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-pop-up.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
