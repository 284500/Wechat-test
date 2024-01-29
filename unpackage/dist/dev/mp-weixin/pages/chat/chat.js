"use strict";
const common_vendor = require("../../common/vendor.js");
const common_lib_config = require("../../common/lib/config.js");
const MyPopUp = () => "../../compoents/my-ui/my-pop-up2.js";
const MyChatItem = () => "../../compoents/my-ui/my-chat-item2.js";
const MyAvatar = () => "../../compoents/my-ui/my-avatar2.js";
const MyIconButton = () => "../../compoents/my-ui/my-icon-button2.js";
const MyNavBar = () => "../../compoents/my-ui/my-nav-bar2.js";
const emoji = () => "../../compoents/emoji.js";
const _sfc_main = {
  components: {
    MyNavBar,
    MyIconButton,
    MyAvatar,
    MyChatItem,
    MyPopUp,
    emoji
  },
  data() {
    return {
      isActive1: true,
      isActive2: false,
      activeIndex: -1,
      emojiUrl: common_lib_config.$C.emojiUrl,
      scrollIntoView: null,
      statusBarHeight: 0,
      navBarHeight: 0,
      //导航栏高度
      KeyboardHeight: 0,
      //键盘高度
      keyboardH: 0,
      //高度的变化
      chatIndex: -1,
      //聊天信息下标
      message: "",
      //输入文本
      mode: "text",
      //模式 text audio emoji action
      bianhao: 1,
      preImage: [],
      actionList: [
        [{
          name: "相册",
          icon: "/static/images/extends/pic.png",
          event: "uploadImage"
        }, {
          name: "拍摄",
          icon: "/static/images/extends/video.png",
          event: "uploadImage"
        }, {
          name: "收藏",
          icon: "/static/images/extends/shoucan.png",
          event: "uploadImage"
        }, {
          name: "名片",
          icon: "/static/images/extends/man.png",
          event: "uploadImage"
        }, {
          name: "语音通话",
          icon: "/static/images/extends/phone.png",
          event: "uploadImage"
        }, {
          name: "视频通话",
          icon: "/static/images/extends/phone.png",
          event: "uploadImage"
        }, {
          name: "位置",
          icon: "/static/images/extends/path.png",
          event: "uploadImage"
        }]
      ],
      menu: [
        {
          name: "复制",
          event: "copy"
        },
        {
          name: "发送给朋友",
          event: "send"
        },
        {
          name: "收藏",
          event: "send"
        },
        {
          name: "删除",
          event: "send"
        },
        {
          name: "多选",
          event: "send"
        },
        {
          name: "撤回",
          event: "removeChat"
        }
      ],
      list: [
        {
          avatar: "/static/images/mail/friend.png",
          user_id: 1,
          nickname: "ada",
          type: "text",
          data: "哈哈哈哈哈",
          isRemove: false,
          create_time: (/* @__PURE__ */ new Date()).getTime() - 1e3 * 60 * 2400
        },
        {
          avatar: "/static/images/mail/friend.png",
          user_id: 1,
          nickname: "ada",
          type: "text",
          data: "哈哈哈哈哈",
          isRemove: false,
          create_time: (/* @__PURE__ */ new Date()).getTime() - 1e3 * 1 * 60
        },
        {
          avatar: "/static/images/mail/friend.png",
          user_id: 0,
          nickname: "ada",
          type: "text",
          data: "哈哈哈哈哈哈",
          isRemove: true,
          create_time: (/* @__PURE__ */ new Date()).getTime() - 2 * 60 * 1e3
        },
        {
          avatar: "/static/images/mail/friend.png",
          user_id: 1,
          nickname: "ada",
          type: "text",
          data: "哈哈哈哈哈",
          isRemove: false,
          create_time: (/* @__PURE__ */ new Date()).getTime() - 1e3 * 60 * 4
        },
        {
          avatar: "/static/images/mail/friend.png",
          user_id: 1,
          nickname: "ada",
          type: "text",
          data: "哈哈哈哈哈",
          isRemove: false,
          create_time: (/* @__PURE__ */ new Date()).getTime() - 1e3 * 60 * 4
        },
        {
          avatar: "/static/images/mail/friend.png",
          user_id: 1,
          nickname: "ada",
          type: "text",
          data: "哈哈哈哈哈",
          isRemove: false,
          create_time: (/* @__PURE__ */ new Date()).getTime() - 1e3 * 60 * 4
        },
        {
          avatar: "/static/images/mail/friend.png",
          user_id: 1,
          nickname: "ada",
          type: "text",
          data: "哈哈哈哈哈",
          isRemove: false,
          create_time: (/* @__PURE__ */ new Date()).getTime() - 1e3 * 60 * 4
        },
        {
          avatar: "/static/images/mail/friend.png",
          user_id: 1,
          nickname: "ada",
          type: "text",
          data: "哈哈哈哈哈",
          isRemove: false,
          create_time: (/* @__PURE__ */ new Date()).getTime() - 1e3 * 60 * 4
        },
        {
          avatar: "/static/images/mail/friend.png",
          user_id: 0,
          nickname: "ada",
          type: "text",
          data: "哈哈哈哈哈",
          isRemove: false,
          create_time: (/* @__PURE__ */ new Date()).getTime() - 1e3 * 60 * 4
        },
        {
          avatar: "/static/images/mail/friend.png",
          user_id: 1,
          nickname: "ada",
          type: "audio",
          data: "/static/1.mp3",
          isRemove: false,
          create_time: (/* @__PURE__ */ new Date()).getTime() - 1e3 * 60 * 4
        },
        {
          avatar: "/static/images/mail/friend.png",
          user_id: 1,
          nickname: "ada",
          type: "audio",
          data: "/static/2.mp3",
          isRemove: false,
          create_time: (/* @__PURE__ */ new Date()).getTime() - 1e3 * 60 * 4
        }
      ],
      imageList: []
    };
  },
  methods: {
    deleteEmojid() {
      let strArr = Array.from(this.message);
      strArr.pop();
      this.message = strArr.join("");
    },
    sendEmoji(emoji2) {
      console.log("aad");
      this.message = this.message + emoji2;
    },
    //改变点击状态
    changeActive() {
      this.isActive1 = true;
      this.isActive2 = false;
      this.activeIndex = -1;
      this.emojiUrl.forEach((item) => {
        this.$set(item, "isActive", false);
      });
    },
    //改变点击状态2
    changeActive2(index, url, total) {
      this.isActive2 = true;
      this.isActive1 = false;
      this.activeIndex = index;
    },
    // 点击打开拓展菜单
    handleAction() {
      this.$refs.action.show();
      this.mode = "action";
      common_vendor.index.hideKeyboard();
      this.KeyboardHeight = common_vendor.index.upx2px(580);
      this.pageToBottom();
    },
    handleEmoticon() {
      this.$refs.action.show();
      this.mode = "emoticon";
      common_vendor.index.hideKeyboard();
      this.KeyboardHeight = common_vendor.index.upx2px(580);
      this.pageToBottom();
    },
    // 拓展菜单事件
    actionEvent(event) {
      console.log(event);
      switch (event) {
        case "uploadImage":
          common_vendor.index.chooseImage({
            count: 9,
            //默认9
            sizeType: ["original", "compressed"],
            //可以指定是原图还是压缩图，默认二者都有
            sourceType: ["album"],
            //从相册选择
            success: (res) => {
              const images = res.tempFilePaths;
              images.forEach((item) => {
                this.send("emoji", item);
                console.log(item);
              });
            }
          });
          break;
      }
    },
    //发送消息
    send(type, data) {
      const time = (/* @__PURE__ */ new Date()).getTime();
      const obj = {
        avatar: "/static/images/mail/friend.png",
        user_id: 1,
        nickname: "ada",
        type,
        data: "哈哈哈哈哈",
        isRemove: false,
        create_time: time
      };
      switch (type) {
        case "text":
          obj.data = this.message;
          this.list.push(obj);
          break;
        case "emoji":
          obj.data = data;
          this.list.push(obj);
          this.imageList.push(data);
          break;
      }
      this.$nextTick(() => {
        this.pageToBottom();
        this.message = "";
      });
    },
    //跳转底部
    pageToBottom() {
      this.$nextTick(() => {
        console.log("跳转底部");
        let lastIndex = this.list.length - 1;
        this.scrollIntoView = "chatItem_" + lastIndex;
      });
    },
    //键盘事件
    focus(e) {
      this.mode = "text";
      this.pageToBottom();
    },
    blur() {
      this.scrollIntoView = null;
    },
    //长按触发事件
    long({
      x,
      y,
      index
    }) {
      this.chatIndex = index;
      this.bianhao = this.list[this.chatIndex].user_id;
      this.$refs.mypopup.show(x - 50, y - 20);
    },
    click(e) {
      switch (e) {
        case "removeChat":
          this.list[this.chatIndex].isRemove = true;
          break;
        case "deleteChat":
          this.deleteChat();
          break;
      }
      this.$refs.mypopup.hide();
    }
  },
  watch: {
    mode(newValue, oldValue) {
      console.log(this.mode);
      if (newValue === "text") {
        this.$refs.action.hide();
      }
    },
    KeyboardH(newValue, oldValue) {
      if (newValue > 0) {
        this.mode = "text";
        this.KeyboardHeight = newValue;
        this.pageToBottom();
      }
    }
  },
  computed: {
    //动态获取菜单高度
    getMenuHeight() {
      let height = 100;
      return this.getMenuList.length * height;
    },
    //动态获取菜单样式
    getMenuStyle() {
      return `height:${this.getMenuHeight}rpx;`;
    },
    //获取键盘高度
    getKeyBoardHeight() {
      return `bottom:${this.KeyboardHeight}px;'`;
    },
    //聊天区域bottom和top
    chatBody() {
      const bottom = common_vendor.index.upx2px(105) + this.KeyboardHeight;
      return `bottom:${bottom}px;top:${this.navBarHeight}px;`;
    },
    fixedStyle() {
      return `top:${this.navBarHeight}px;`;
    },
    isDoSelf() {
      const id = 1;
      return this.bianhao === id;
    },
    getMenuList() {
      return this.menu.filter((v) => {
        if (v.name === "撤回" && !this.isDoSelf) {
          return false;
        } else {
          return true;
        }
      });
    }
  },
  mounted() {
    this.navBarHeight = this.statusBarHeight + common_vendor.index.upx2px(90);
    common_vendor.index.onKeyboardHeightChange((res) => {
      this.KeyboardH = res.height;
    });
  }
};
if (!Array) {
  const _component_my_icon_button = common_vendor.resolveComponent("my-icon-button");
  const _component_my_nav_bar = common_vendor.resolveComponent("my-nav-bar");
  const _component_my_chat_item = common_vendor.resolveComponent("my-chat-item");
  const _component_my_pop_up = common_vendor.resolveComponent("my-pop-up");
  const _component_emoji = common_vendor.resolveComponent("emoji");
  (_component_my_icon_button + _component_my_nav_bar + _component_my_chat_item + _component_my_pop_up + _component_emoji)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      icon: ""
    }),
    b: common_vendor.p({
      ["is-show-back"]: true,
      title: "昵称",
      noreadnum: "1"
    }),
    c: common_vendor.p({
      icon: ""
    }),
    d: common_vendor.o((...args) => $options.focus && $options.focus(...args)),
    e: common_vendor.o((...args) => $options.blur && $options.blur(...args)),
    f: $data.message,
    g: common_vendor.o(($event) => $data.message = $event.detail.value),
    h: common_vendor.o($options.handleEmoticon),
    i: common_vendor.p({
      icon: ""
    }),
    j: !$data.message
  }, !$data.message ? {
    k: common_vendor.o($options.handleAction),
    l: common_vendor.p({
      icon: ""
    })
  } : {
    m: common_vendor.o(($event) => $options.send("text"))
  }, {
    n: common_vendor.s($options.getKeyBoardHeight),
    o: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.sr("chatItem", "0a633310-5-" + i0, {
          "f": 1
        }),
        b: common_vendor.o($options.long, index),
        c: "0a633310-5-" + i0,
        d: common_vendor.p({
          index,
          item,
          ["pre-time"]: index > 0 ? $data.list[index - 1].create_time : 0,
          ["img-list"]: $data.imageList
        }),
        e: index,
        f: "chatItem_" + index
      };
    }),
    p: common_vendor.s($options.chatBody),
    q: $data.scrollIntoView,
    r: common_vendor.f($options.getMenuList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.o(($event) => $options.click(item.event), index)
      };
    }),
    s: common_vendor.s($options.getMenuStyle),
    t: common_vendor.sr("mypopup", "0a633310-6"),
    v: common_vendor.p({
      ["tabbar-height"]: 260,
      ["body-height"]: $options.getMenuHeight,
      ["body-width"]: 240
    }),
    w: $data.mode === "action"
  }, $data.mode === "action" ? {
    x: common_vendor.f($data.actionList, (item, index, i0) => {
      return {
        a: common_vendor.f(item, (item2, index2, i1) => {
          return {
            a: item2.icon,
            b: common_vendor.t(item2.name),
            c: common_vendor.o(($event) => $options.actionEvent(item2.event))
          };
        })
      };
    }),
    y: $data.actionList.length > 1
  } : {}, {
    z: $data.mode === "emoticon"
  }, $data.mode === "emoticon" ? common_vendor.e({
    A: common_vendor.t(""),
    B: $data.isActive1 ? 1 : "",
    C: common_vendor.o((...args) => $options.changeActive && $options.changeActive(...args)),
    D: common_vendor.f($data.emojiUrl, (item, index, i0) => {
      return {
        a: index,
        b: item.url + "0.gif",
        c: $data.activeIndex === index ? 1 : "",
        d: common_vendor.o(($event) => $options.changeActive2(index, item.url, item.total), index)
      };
    }),
    E: $data.isActive1
  }, $data.isActive1 ? {
    F: common_vendor.o($options.sendEmoji),
    G: common_vendor.o(_ctx.deleteEmoji)
  } : {}, {
    H: $data.isActive2
  }, $data.isActive2 ? {
    I: common_vendor.f(2, (item, index, i0) => {
      return {
        a: common_vendor.f($data.emojiUrl[index].total / 4, (num, index2, i1) => {
          return {
            a: common_vendor.f(4, (nums, k2, i2) => {
              return {
                a: $data.emojiUrl[index].url + `${index2 * 4 + nums - 1}.gif`,
                b: common_vendor.o(($event) => $options.send("emoji", $data.emojiUrl[index].url + `${index2 * 4 + nums - 1}.gif`))
              };
            })
          };
        }),
        b: index === $data.activeIndex
      };
    })
  } : {}) : {}, {
    J: common_vendor.sr("action", "0a633310-7"),
    K: common_vendor.o(($event) => $data.KeyboardHeight = 0),
    L: common_vendor.p({
      ["fix-bottom"]: true,
      mask: false
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0a633310"], ["__file", "F:/uniapp/仿微信/pages/chat/chat.vue"]]);
wx.createPage(MiniProgramPage);
