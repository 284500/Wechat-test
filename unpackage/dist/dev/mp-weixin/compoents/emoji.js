"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "emoji",
  data() {
    return {
      emoji: [
        ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆"],
        ["😉", "😊", "😋", "😎", "😍", "😘", "😗", "😙"],
        ["😚", "🙂", "🙂", "🤗", "🤔", "😐", "😑", "😶"],
        ["🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪"],
        ["😫", "😴", "😌", "😛", "😜", "😝", "🤤", "😒"],
        ["😓", "😔", "😕", "🙃", "🤑", "😲", "🤤", "🙁"],
        ["😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧"],
        ["😨", "😩", "😬", "😰", "😱", "😳", "😵", "😡"],
        ["😠", "😷", "🤒", "🤕", "🤢", "🤧", "😇", "🤠"],
        ["🤡", "🤥", "🤓", "😈", "👿", "👹", "👺", "💀"],
        ["👻", "👽", "🤖", "💩", "😺", "😸", "😹", "😻"],
        ["😼", "😽", "🙀", "😿", "😾", "🏻", "🏼", "🏽"],
        ["🏾", "🏿", "🗣", "👤", "👥", "👫", "👬", "👭"],
        ["👂", "👂🏻", "👂🏼", "👂🏽", "👂🏾", "👂🏿", "👃", "👃🏻"],
        ["👃🏼", "👃🏽", "👃🏾", "👃🏿", "👣", "👀", "👁", "👅"],
        ["👄", "👓", "🕶", "👔", "👕", "👖", "👗", "👘"],
        ["👙", "👚", "👛", "👜", "👝", "🎒", "👞", "👟"],
        ["👠", "👡", "👢", "👑", "👒", "🎩", "🎓", "✋"],
        ["💄", "💍", "🌂", "💼", "🏁", "🚩", "🎌", "🏴"]
      ]
    };
  },
  methods: {
    //点击表情
    clickEmoji(emoji) {
      this.$emit("sendEmoji", emoji);
    },
    //删除表情
    deleteEmoji() {
      this.$emit("deleteEmoji");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.deleteEmoji && $options.deleteEmoji(...args)),
    b: common_vendor.f($data.emoji, (row, i, i0) => {
      return {
        a: common_vendor.f(row, (col, j, i1) => {
          return {
            a: common_vendor.t(col),
            b: common_vendor.o(($event) => $options.clickEmoji(col), j),
            c: j
          };
        }),
        b: i
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7eefac38"], ["__file", "F:/uniapp/仿微信/compoents/emoji.vue"]]);
wx.createComponent(Component);
