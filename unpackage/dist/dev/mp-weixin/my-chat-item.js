"use strict";
const common_vendor = require("./common/vendor.js");
const common_time = require("./common/time.js");
const MyImage = () => "./compoents/my-ui/my-image.js";
const MyAvatar = () => "./compoents/my-ui/my-avatar2.js";
const innerAudioContext = common_vendor.index.createInnerAudioContext();
const _sfc_main = {
  components: {
    MyAvatar,
    MyImage
  },
  data() {
    return {};
  },
  // 销毁之前
  beforeDestroy() {
    innerAudioContext.destroy();
  },
  props: {
    item: {
      type: Object,
      default: ""
    },
    preTime: {
      type: [String, Number],
      default: 0
    },
    index: Number,
    imgList: {
      type: Array,
      default: ["/static/logo.png", "/static/images/0.gif"]
    }
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
    },
    // 图片宽高
    imagestyle() {
      const height = this.h;
      const width = this.w;
      return `width:${width}px;height:${height}px; border-radius: 10rpx;`;
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
    },
    //预览图片
    preview(url, currentImage) {
      console.log(currentImage);
      common_vendor.index.previewImage({
        current: currentImage,
        urls: url,
        longPressActions: {
          itemList: ["发送给朋友", "保存图片", "收藏"],
          success: function(data) {
            console.log("选中了第" + (data.tapIndex + 1) + "个按钮,第" + (data.index + 1) + "张图片");
          },
          fail: function(err) {
            console.log(err.errMsg);
          }
        }
      });
    },
    //播放音频
    playAudio() {
      innerAudioContext.stop();
      innerAudioContext.src = this.item.data;
      innerAudioContext.play();
    }
  }
};
if (!Array) {
  const _component_MyAvatar = common_vendor.resolveComponent("MyAvatar");
  const _component_MyImage = common_vendor.resolveComponent("MyImage");
  (_component_MyAvatar + _component_MyImage)();
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
    j: common_vendor.o(($event) => $options.preview($props.imgList, $props.item.data)),
    k: common_vendor.p({
      src: $props.item.data
    })
  } : {}, {
    l: $props.item.type === "audio"
  }, $props.item.type === "audio" ? {} : {}, {
    m: common_vendor.n($options.labelClass)
  }) : common_vendor.e({
    n: $props.item.type === "text"
  }, $props.item.type === "text" ? {
    o: common_vendor.t($props.item.data)
  } : {}, {
    p: $props.item.type === "emoji"
  }, $props.item.type === "emoji" ? {
    q: common_vendor.o(($event) => $options.preview($props.imgList, $props.item.data)),
    r: common_vendor.p({
      src: $props.item.data
    })
  } : {}, {
    s: $props.item.type === "audio"
  }, $props.item.type === "audio" ? {
    t: common_vendor.o((...args) => $options.playAudio && $options.playAudio(...args))
  } : {}, {
    v: common_vendor.n($options.labelClass),
    w: $props.item.type === "text"
  }, $props.item.type === "text" ? {} : {}, {
    x: common_vendor.p({
      src: $props.item.avatar,
      size: "70"
    })
  }), {
    y: common_vendor.o((...args) => $options.onLong && $options.onLong(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ca41c7ef"], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-chat-item.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
