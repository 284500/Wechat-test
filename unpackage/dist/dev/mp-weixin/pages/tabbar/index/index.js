"use strict";
const common_vendor = require("../../../common/vendor.js");
const MyChatList = () => "../../../compoents/my-ui/my-chat-list2.js";
const MyNavBar = () => "../../../compoents/my-ui/my-nav-bar2.js";
const MyPopUp = () => "../../../compoents/my-ui/my-pop-up2.js";
const _sfc_main = {
  components: {
    MyNavBar,
    MyChatList,
    MyPopUp
  },
  computed: {
    //动态获取菜单高度
    getMenuHeight() {
      let height = 100;
      return this.menu.length * height;
    },
    //动态获取菜单样式
    getMenuStyle() {
      return `height:${this.getMenuHeight}rpx;`;
    }
  },
  methods: {
    search() {
    },
    long({
      x,
      y,
      index
    }) {
      this.chatIndex = index;
      let item = this.list[this.chatIndex];
      this.menu[0].name = item.isTop ? "取消置顶" : "设置置顶";
      this.$refs.mypopup.show(x - 50, y - 20);
    },
    Click(e) {
      switch (e) {
        case "setTop":
          this.setTop();
          break;
        case "deleteChat":
          this.deleteChat();
          break;
      }
      this.$refs.mypopup.hide();
    },
    setTop() {
      let item = this.list[this.chatIndex];
      item.isTop = !item.isTop;
    },
    deleteChat() {
      this.list.splice(this.chatIndex, 1);
    }
  },
  data() {
    return {
      chatIndex: -1,
      menu: [
        {
          name: "设置置顶",
          event: "setTop"
        },
        {
          name: "删除聊天",
          event: "deleteChat"
        }
      ],
      list: [
        {
          avater: "/static/images/userpic.png",
          nickname: "昵称1",
          update_time: 1692845763,
          data: "哈哈哈哈",
          // 聊天数量
          num: 1,
          isTop: false
        },
        {
          avater: "/static/images/userpic.png",
          nickname: "昵称2",
          update_time: (/* @__PURE__ */ new Date()).getTime(),
          data: "哈哈哈哈",
          num: 2,
          isTop: false
        },
        {
          avater: "/static/images/userpic.png",
          nickname: "昵称3",
          update_time: (/* @__PURE__ */ new Date()).getTime(),
          data: "哈哈哈哈",
          num: 3,
          isTop: false
        },
        {
          avater: "/static/images/userpic.png",
          nickname: "昵称4",
          update_time: (/* @__PURE__ */ new Date()).getTime(),
          data: "哈哈哈哈",
          num: 4,
          isTop: false
        }
      ],
      flag: true
    };
  }
};
if (!Array) {
  const _component_my_nav_bar = common_vendor.resolveComponent("my-nav-bar");
  const _component_my_chat_list = common_vendor.resolveComponent("my-chat-list");
  const _component_my_pop_up = common_vendor.resolveComponent("my-pop-up");
  (_component_my_nav_bar + _component_my_chat_list + _component_my_pop_up)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "仿微信",
      noreadnum: "10",
      fixed: $data.flag,
      menus: $data.menu
    }),
    b: common_vendor.f($data.list, (item, index, i0) => {
      return common_vendor.e({
        a: item.isTop
      }, item.isTop ? {
        b: common_vendor.o($options.long, index),
        c: "45da8546-1-" + i0,
        d: common_vendor.p({
          item,
          index
        })
      } : {}, {
        e: index
      });
    }),
    c: common_vendor.f($data.list, (item, index, i0) => {
      return common_vendor.e({
        a: !item.isTop
      }, !item.isTop ? {
        b: common_vendor.o($options.long, index),
        c: "45da8546-2-" + i0,
        d: common_vendor.p({
          item,
          index
        })
      } : {}, {
        e: index
      });
    }),
    d: common_vendor.f($data.menu, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.o(($event) => $options.Click(item.event), index),
        c: index
      };
    }),
    e: common_vendor.s($options.getMenuStyle),
    f: common_vendor.sr("mypopup", "45da8546-3"),
    g: common_vendor.p({
      ["body-height"]: $options.getMenuHeight,
      ["body-width"]: 240
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/uniapp/仿微信/pages/tabbar/index/index.vue"]]);
wx.createPage(MiniProgramPage);
