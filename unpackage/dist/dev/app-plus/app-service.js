if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$f = {
    data() {
      return {};
    },
    methods: {},
    props: {
      size: {
        type: [String, Number],
        default: 95
      },
      src: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "rounded"
      }
    },
    computed: {
      getStyle() {
        return `height:${this.size}rpx;width:${this.size}rpx;`;
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("image", {
      class: vue.normalizeClass($props.type),
      src: $props.src,
      mode: "widthFix",
      style: vue.normalizeStyle($options.getStyle)
    }, null, 14, ["src"]);
  }
  const CompoentsMyUiMyAvatar = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-avatar.vue"]]);
  const _sfc_main$e = {
    data() {
      return {};
    },
    methods: {},
    props: {
      badgeClass: {
        type: String,
        default: ""
      },
      badgeStyle: {
        type: String,
        default: ""
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        class: vue.normalizeClass(["my-badge bg-danger text-white font-sm rounded-circle", $props.badgeClass]),
        style: vue.normalizeStyle($props.badgeStyle)
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const CompoentsMyUiMyBadge = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-1d866686"], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-badge.vue"]]);
  const $T = {
    // 计算当前日期星座
    getHoroscope(date) {
      let c = ["摩羯", "水瓶", "双鱼", "白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "摩羯"];
      date = new Date(date);
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let startMonth = month - (day - 14 < "865778999988".charAt(month));
      return c[startMonth] + "座";
    },
    // 计算指定时间与当前的时间差
    sumAge(data) {
      let dateBegin = new Date(data.replace(/-/g, "/"));
      let dateEnd = /* @__PURE__ */ new Date();
      let dateDiff = dateEnd.getTime() - dateBegin.getTime();
      let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1e3));
      let leave1 = dateDiff % (24 * 3600 * 1e3);
      let hours = Math.floor(leave1 / (3600 * 1e3));
      return dayDiff + "天 " + hours + "小时 ";
    },
    // 获取聊天时间（相差300s内的信息不会显示时间）
    getChatTime(v1, v2) {
      v1 = v1.toString().length < 13 ? v1 * 1e3 : v1;
      v2 = v2.toString().length < 13 ? v2 * 1e3 : v2;
      if ((parseInt(v1) - parseInt(v2)) / 1e3 > 300) {
        return this.gettime(v1);
      }
    },
    // 人性化时间格式
    gettime(shorttime) {
      shorttime = shorttime.toString().length < 13 ? shorttime * 1e3 : shorttime;
      let now = (/* @__PURE__ */ new Date()).getTime();
      let cha = (now - parseInt(shorttime)) / 1e3;
      if (cha < 43200) {
        return this.dateFormat(new Date(shorttime), "{A} {t}:{ii}");
      } else if (cha < 518400) {
        return this.dateFormat(new Date(shorttime), "{Mon}月{DD}日 {A} {t}:{ii}");
      } else {
        return this.dateFormat(new Date(shorttime), "{Y}-{MM}-{DD} {A} {t}:{ii}");
      }
    },
    parseNumber(num) {
      return num < 10 ? "0" + num : num;
    },
    dateFormat(date, formatStr) {
      let dateObj = {}, rStr = /\{([^}]+)\}/, mons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      dateObj["Y"] = date.getFullYear();
      dateObj["M"] = date.getMonth() + 1;
      dateObj["MM"] = this.parseNumber(dateObj["M"]);
      dateObj["Mon"] = mons[dateObj["M"] - 1];
      dateObj["D"] = date.getDate();
      dateObj["DD"] = this.parseNumber(dateObj["D"]);
      dateObj["h"] = date.getHours();
      dateObj["hh"] = this.parseNumber(dateObj["h"]);
      dateObj["t"] = dateObj["h"] > 12 ? dateObj["h"] - 12 : dateObj["h"];
      dateObj["tt"] = this.parseNumber(dateObj["t"]);
      dateObj["A"] = dateObj["h"] > 12 ? "下午" : "上午";
      dateObj["i"] = date.getMinutes();
      dateObj["ii"] = this.parseNumber(dateObj["i"]);
      dateObj["s"] = date.getSeconds();
      dateObj["ss"] = this.parseNumber(dateObj["s"]);
      while (rStr.test(formatStr)) {
        formatStr = formatStr.replace(rStr, dateObj[RegExp.$1]);
      }
      return formatStr;
    },
    // 获取年龄
    getAgeByBirthday(data) {
      let birthday = new Date(data.replace(/-/g, "/"));
      let d = /* @__PURE__ */ new Date();
      return d.getFullYear() - birthday.getFullYear() - (d.getMonth() < birthday.getMonth() || d.getMonth() == birthday.getMonth() && d.getDate() < birthday.getDate() ? 1 : 0);
    }
  };
  const _sfc_main$d = {
    components: {
      MyAvatar: CompoentsMyUiMyAvatar,
      MyBadge: CompoentsMyUiMyBadge
    },
    data() {
      return {};
    },
    methods: {
      onClick() {
        uni.navigateTo({
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
        formatAppLog("log", "at compoents/my-ui/my-chat-list.vue:61", x, y);
      }
    },
    props: {
      item: Object,
      index: Number
    },
    computed: {
      showTime() {
        return $T.gettime(this.item.update_time);
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_my_avatar = vue.resolveComponent("my-avatar");
    const _component_my_badge = vue.resolveComponent("my-badge");
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass([$props.item.isTop ? "bg-light" : "bg-white", "flex align-center;"]),
        "hover-class": "bg-hover-light",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
        onLongpress: _cache[1] || (_cache[1] = (...args) => $options.onLong && $options.onLong(...args))
      },
      [
        vue.createCommentVNode(" 头像 "),
        vue.createElementVNode("view", {
          class: "flex align-center justify-center position-relative",
          style: { "width": "145rpx", "height": "135rpx" }
        }, [
          vue.createVNode(_component_my_avatar, {
            src: $props.item.avater
          }, null, 8, ["src"]),
          vue.createCommentVNode(" 消息角标 "),
          vue.createCommentVNode(' <my-badge v-if="item.num>0" badge-class="position-absolute"\r\n				badge-style="right:15rpx;top:14rpx">{{item.num ||index+1}}</my-badge> ')
        ]),
        vue.createCommentVNode(" 信息栏 "),
        vue.createElementVNode("view", { class: "position-relative flex flex-column border-bottom flex-1 py-3 pr-3 border-light-secondary" }, [
          vue.createElementVNode("view", { class: "flex justify-between align-center mb-1" }, [
            vue.createElementVNode(
              "text",
              { class: "font-md" },
              vue.toDisplayString($props.item.nickname),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              { class: "font-sm text-light-muted" },
              vue.toDisplayString($options.showTime),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode(
            "text",
            { class: "font text-ellipsis text-light-muted" },
            vue.toDisplayString($props.item.data),
            1
            /* TEXT */
          ),
          $props.item.num > 0 ? (vue.openBlock(), vue.createBlock(_component_my_badge, {
            key: 0,
            "badge-class": "position-absolute",
            "badge-style": "right:30rpx;bottom:30rpx"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(
                vue.toDisplayString($props.item.num || $props.index + 1),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : vue.createCommentVNode("v-if", true)
        ])
      ],
      34
      /* CLASS, HYDRATE_EVENTS */
    );
  }
  const CompoentsMyUiMyChatList = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-chat-list.vue"]]);
  const _sfc_main$c = {
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
      const res = uni.getSystemInfoSync();
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
        return this.res.screenWidth - uni.upx2px(this.bodyWidth);
      },
      maxY() {
        return this.res.screenHeight - uni.upx2px(this.bodyHeight) - uni.upx2px(this.tabbarHeight);
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 弹出层 "),
        $data.status ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "",
          style: { "z-index": "9999", "overflow": "hidden" }
        }, [
          vue.createCommentVNode(" 遮罩层 "),
          $props.mask ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              onClick: _cache[0] || (_cache[0] = (...args) => $options.hide && $options.hide(...args)),
              class: "position-fixed top-0 right-0 left-0 bottom-0",
              style: vue.normalizeStyle($options.getMaskColor)
            },
            null,
            4
            /* STYLE */
          )) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["position-fixed", [$options.getBodyClass, $props.bodyBgColor]]),
              style: vue.normalizeStyle($options.getBodyStyle)
            },
            [
              vue.renderSlot(_ctx.$slots, "default")
            ],
            6
            /* CLASS, STYLE */
          )
        ])) : vue.createCommentVNode("v-if", true)
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  const CompoentsMyUiMyPopUp = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-pop-up.vue"]]);
  const _sfc_main$b = {
    props: {
      icon: {
        type: String,
        default: ""
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        class: "flex justify-center align-center",
        style: { "height": "90rpx", "width": "90rpx" },
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
      }, [
        vue.createElementVNode(
          "text",
          { class: "iconfont font-md" },
          vue.toDisplayString($props.icon),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  const CompoentsMyUiMyIconButton = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-icon-button.vue"]]);
  const _sfc_main$a = {
    components: {
      MyIconButton: CompoentsMyUiMyIconButton,
      MyPopUp: CompoentsMyUiMyPopUp
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
        this.$refs.extend.show(uni.upx2px(460), uni.upx2px(100));
      },
      back() {
        uni.navigateBack({
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
      this.navBarHeight = this.statusBarHeight + uni.upx2px(90);
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_my_icon_button = vue.resolveComponent("my-icon-button");
    const _component_my_pop_up = vue.resolveComponent("my-pop-up");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 导航栏 "),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["bg-light", $props.fixed ? "fixed-top" : "fixed"])
        },
        [
          vue.createCommentVNode(" 状态栏 "),
          vue.createElementVNode(
            "view",
            {
              class: "",
              style: vue.normalizeStyle("height:" + $data.statusBarHeight + "px")
            },
            null,
            4
            /* STYLE */
          ),
          vue.createCommentVNode(" 导航 "),
          vue.createElementVNode("view", {
            class: "w-100 flex justify-between align-center",
            style: { "height": "90rpx" }
          }, [
            vue.createCommentVNode(" 左边 "),
            vue.createElementVNode("view", { class: "flex align-center" }, [
              $props.isShowBack ? (vue.openBlock(), vue.createBlock(_component_my_icon_button, {
                key: 0,
                class: "pt-1",
                onClick: $options.back,
                icon: ""
              }, null, 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                $props.title ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "font-md ml-3"
                  },
                  vue.toDisplayString($options.getTitle),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ]),
              vue.createCommentVNode(' <text class="iconfont">&#xe719;</text> ')
            ]),
            vue.createCommentVNode(" 右边 "),
            vue.createElementVNode("view", { class: "flex align-center" }, [
              vue.renderSlot(_ctx.$slots, "right", {}, () => [
                vue.createVNode(_component_my_icon_button, {
                  icon: "",
                  onClick: _ctx.a
                }, null, 8, ["onClick"]),
                vue.createVNode(_component_my_icon_button, {
                  icon: "",
                  onClick: $options.openExtend
                }, null, 8, ["onClick"])
              ])
            ])
          ])
        ],
        2
        /* CLASS */
      ),
      vue.createCommentVNode(" 占位 "),
      $props.fixed ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          style: vue.normalizeStyle($options.fixedStyle)
        },
        null,
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 拓展菜单 "),
      vue.createVNode(
        _component_my_pop_up,
        {
          ref: "extend",
          "body-height": 105,
          "body-width": 300,
          "body-bg-color": "bg-dark"
        },
        {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              style: { "width": "280rpx", "height": "400rpx" },
              class: "flex flex-column"
            }, [
              vue.createCommentVNode(" 弹窗内容 "),
              vue.createCommentVNode(' <view class="bg-dark"></view> '),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.menu, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    onClick: ($event) => _ctx.Click(item.event),
                    key: index,
                    "hover-class": "bg-hover-secondary",
                    class: "flex-1 align-center flex"
                  }, [
                    vue.createElementVNode(
                      "text",
                      { class: "text-white iconfont font-md pl-3 pt-2 pr-2" },
                      vue.toDisplayString(item.icon),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "font-md text-white" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    )
                  ], 8, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const CompoentsMyUiMyNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-nav-bar.vue"]]);
  const _sfc_main$9 = {
    components: {
      MyNavBar: CompoentsMyUiMyNavBar,
      MyChatList: CompoentsMyUiMyChatList,
      MyPopUp: CompoentsMyUiMyPopUp
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
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_my_nav_bar = vue.resolveComponent("my-nav-bar");
    const _component_my_chat_list = vue.resolveComponent("my-chat-list");
    const _component_my_pop_up = vue.resolveComponent("my-pop-up");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 导航栏 "),
      vue.createVNode(_component_my_nav_bar, {
        title: "仿微信",
        noreadnum: "10",
        fixed: $data.flag,
        menus: $data.menu
      }, null, 8, ["fixed", "menus"]),
      vue.createCommentVNode(" 置顶用户列表 "),
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: index },
            [
              item.isTop ? (vue.openBlock(), vue.createBlock(_component_my_chat_list, {
                key: 0,
                item,
                index,
                onLong: $options.long
              }, null, 8, ["item", "index", "onLong"])) : vue.createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      vue.createCommentVNode(" 非置顶用户列表 "),
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: index },
            [
              !item.isTop ? (vue.openBlock(), vue.createBlock(_component_my_chat_list, {
                key: 0,
                item,
                index,
                onLong: $options.long
              }, null, 8, ["item", "index", "onLong"])) : vue.createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      vue.createVNode(_component_my_pop_up, {
        ref: "mypopup",
        "body-height": $options.getMenuHeight,
        "body-width": 240
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle([{ "width": "240rpx" }, $options.getMenuStyle]),
              class: "flex flex-column"
            },
            [
              vue.createCommentVNode(" 弹窗内容 "),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.menu, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    onClick: ($event) => $options.Click(item.event),
                    key: index,
                    "hover-class": "bg-hover-secondary",
                    class: "flex-1 align-center flex justify-center"
                  }, [
                    vue.createElementVNode(
                      "text",
                      { class: "font-md" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    )
                  ], 8, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            4
            /* STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["body-height"])
    ]);
  }
  const PagesTabbarIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "F:/uniapp/仿微信/pages/tabbar/index/index.vue"]]);
  const _sfc_main$8 = {
    computed: {
      getIamgeStyle() {
        return `width:${this.imageSize}rpx;height:${this.imageSize}rpx;`;
      }
    },
    props: {
      imgUrl: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      isShowRight: {
        type: Boolean,
        default: false
      },
      imageSize: {
        type: Number,
        default: 75
      },
      notBottom: {
        type: Boolean,
        default: true
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "bg-white flex align-stretch",
      "hover-class": "bg-light",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
    }, [
      vue.createElementVNode("view", { class: "flex align-center justify-between py-2 px-3" }, [
        vue.renderSlot(_ctx.$slots, "icon"),
        $props.imgUrl ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          src: $props.imgUrl,
          mode: "withFix",
          style: vue.normalizeStyle($options.getIamgeStyle)
        }, null, 12, ["src"])) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass([{ "border-bottom": $props.notBottom }, "flex-1 flex align-center justify-between pr-1"])
        },
        [
          vue.renderSlot(_ctx.$slots, "title", {}, () => [
            vue.createElementVNode(
              "text",
              { class: "font-md text-dark" },
              vue.toDisplayString($props.title),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "flex align-center" }, [
            vue.createCommentVNode(" 头像 "),
            vue.renderSlot(_ctx.$slots, "avatar"),
            vue.createCommentVNode(" 右箭头 "),
            $props.isShowRight ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "font-md text-light-muted iconfont"
            }, "  ")) : vue.createCommentVNode("v-if", true)
          ])
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const MyListItem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-list-item.vue"]]);
  const _sfc_main$7 = {};
  function _sfc_render$6(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { style: { "height": "18rpx", "background-color": "#efede9" } });
  }
  const MyDivider = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-divider.vue"]]);
  const _sfc_main$6 = {
    components: {
      MyNavBar: CompoentsMyUiMyNavBar,
      MyPopUp: CompoentsMyUiMyPopUp,
      MyListItem,
      MyAvatar: CompoentsMyUiMyAvatar,
      MyDivider
    },
    data() {
      return {};
    },
    methods: {
      showTip() {
        uni.showToast({
          title: "敬请期待"
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_my_nav_bar = vue.resolveComponent("my-nav-bar");
    const _component_my_avatar = vue.resolveComponent("my-avatar");
    const _component_my_list_item = vue.resolveComponent("my-list-item");
    const _component_my_divider = vue.resolveComponent("my-divider");
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createCommentVNode(" 顶部导航 "),
      vue.createVNode(_component_my_nav_bar, null, {
        default: vue.withCtx(() => [
          vue.createElementVNode("text", { class: "font-md ml-3" }, " 发现 ")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_my_list_item, {
        title: "朋友圈",
        "is-show-right": true,
        onClick: $options.showTip
      }, {
        icon: vue.withCtx(() => [
          vue.createElementVNode("text", { class: "iconfont font-md py-1" }, "  ")
        ]),
        avatar: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "position-relative py-1" }, [
            vue.createVNode(_component_my_avatar, {
              size: "55",
              src: "/static/images/mail/friend.png"
            }),
            vue.createElementVNode("text", {
              class: "rounded-circle bg-danger position-absolute",
              style: { "width": "20rpx", "height": "20rpx", "right": "-5rpx", "top": "5rpx" }
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      vue.createVNode(_component_my_divider),
      vue.createVNode(_component_my_list_item, {
        title: "扫一扫",
        "is-show-right": true,
        onClick: $options.showTip
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("text", {
            slot: "icon",
            class: "iconfont font-md pt-1"
          }, "  ")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      vue.createVNode(_component_my_list_item, {
        title: "摇一摇",
        "is-show-right": true,
        onClick: $options.showTip
      }, {
        icon: vue.withCtx(() => [
          vue.createElementVNode("text", { class: "iconfont font-md pt-1" }, "  ")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      vue.createVNode(_component_my_divider),
      vue.createVNode(_component_my_list_item, {
        title: "搜一搜",
        "is-show-right": true,
        onClick: $options.showTip
      }, {
        icon: vue.withCtx(() => [
          vue.createElementVNode("text", { class: "iconfont font-md pt-1" }, "  ")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      vue.createVNode(_component_my_list_item, {
        title: "看一看",
        "is-show-right": true,
        onClick: $options.showTip
      }, {
        icon: vue.withCtx(() => [
          vue.createElementVNode("text", { class: "iconfont font-md pt-1" }, "  ")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      vue.createVNode(_component_my_divider),
      vue.createVNode(_component_my_list_item, {
        title: "购物",
        "is-show-right": true,
        onClick: $options.showTip
      }, {
        icon: vue.withCtx(() => [
          vue.createElementVNode("text", { class: "iconfont font-md pt-1" }, "  ")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"])
    ]);
  }
  const PagesTabbarFindFind = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "F:/uniapp/仿微信/pages/tabbar/find/find.vue"]]);
  const _sfc_main$5 = {
    components: {
      MyDivider,
      MyListItem
    },
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_my_list_item = vue.resolveComponent("my-list-item");
    const _component_my_divider = vue.resolveComponent("my-divider");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 中心页 "),
      vue.createVNode(_component_my_list_item, {
        "img-url": "/static/images/mail/friend.png",
        "image-size": 120,
        "is-show-right": true
      }, {
        title: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "flex flex-column" }, [
            vue.createCommentVNode(" app端不需要加pt-1 "),
            vue.createElementVNode("text", { class: "text-dark font-lg font-weight-bold" }, "XXXXX"),
            vue.createElementVNode("text", { class: "text-light-muted font-sm mt-2" }, "微信号：ada")
          ])
        ]),
        default: vue.withCtx(() => [
          vue.createElementVNode("text", {
            slot: "avatar",
            class: "iconfont font-md pt-1"
          }, "  ")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createCommentVNode(" 分割线 "),
      vue.createVNode(_component_my_divider),
      vue.createVNode(_component_my_list_item, {
        title: "支付",
        "is-show-right": true
      }, {
        icon: vue.withCtx(() => [
          vue.createElementVNode("text", { class: "iconfont font-md pt-1" }, "  ")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createCommentVNode(" 分割线 "),
      vue.createVNode(_component_my_divider),
      vue.createVNode(_component_my_list_item, {
        title: "收藏",
        "is-show-right": true
      }, {
        icon: vue.withCtx(() => [
          vue.createElementVNode("text", { class: "iconfont font-md" }, "  ")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_my_list_item, {
        title: "相册",
        "is-show-right": true
      }, {
        icon: vue.withCtx(() => [
          vue.createElementVNode("text", { class: "iconfont font-md pt-1" }, "  ")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_my_list_item, {
        title: "表情",
        "is-show-right": true
      }, {
        icon: vue.withCtx(() => [
          vue.createElementVNode("text", { class: "iconfont font-md pt-1" }, "  ")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createCommentVNode(" 分割线 "),
      vue.createVNode(_component_my_divider),
      vue.createVNode(_component_my_list_item, {
        title: "设置",
        "is-show-right": true
      }, {
        icon: vue.withCtx(() => [
          vue.createElementVNode("text", { class: "iconfont font-md pt-1" }, "  ")
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesTabbarMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "F:/uniapp/仿微信/pages/tabbar/my/my.vue"]]);
  const _sfc_main$4 = {
    components: {
      MyNavBar: CompoentsMyUiMyNavBar,
      MyPopUp: CompoentsMyUiMyPopUp,
      MyListItem
    },
    data() {
      return {
        mailList: [
          {
            imgUrl: "/static/images/mail/friend.png",
            title: "新的朋友",
            event: "1"
          },
          {
            imgUrl: "/static/images/mail/group.png",
            title: "群聊",
            event: "2"
          },
          {
            imgUrl: "/static/images/mail/tag.png",
            title: "标签",
            event: "3"
          }
        ],
        list: [
          {
            letter: "A",
            data: ["ada"]
          },
          {
            letter: "B",
            data: []
          },
          {
            letter: "C",
            data: ["ccc", "cwea"]
          },
          {
            letter: "D",
            data: ["ccc", "cwea"]
          },
          {
            letter: "E",
            data: ["ccc", "cwea"]
          },
          {
            letter: "F",
            data: ["ccc", "cwea"]
          },
          {
            letter: "G",
            data: ["ccc", "cwea"]
          },
          {
            letter: "H",
            data: ["ccc", "cwea"]
          },
          {
            letter: "I",
            data: ["ccc", "cwea"]
          },
          {
            letter: "J",
            data: ["ccc", "cwea"]
          },
          {
            letter: "K",
            data: ["ccc", "cwea"]
          }
        ]
      };
    },
    methods: {
      click(e) {
        formatAppLog("log", "at pages/tabbar/mail/mail.vue:102", e);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_my_nav_bar = vue.resolveComponent("my-nav-bar");
    const _component_my_list_item = vue.resolveComponent("my-list-item");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 顶部导航 "),
      vue.createVNode(_component_my_nav_bar, null, {
        default: vue.withCtx(() => [
          vue.createElementVNode("text", { class: "font-md ml-3" }, "通讯录 ")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createCommentVNode(" 通讯录列表 "),
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.mailList, (item1) => {
          return vue.openBlock(), vue.createBlock(_component_my_list_item, {
            onClick: ($event) => $options.click(item1.event),
            title: item1.title,
            "img-url": item1.imgUrl
          }, null, 8, ["onClick", "title", "img-url"]);
        }),
        256
        /* UNKEYED_FRAGMENT */
      )),
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.list, (item) => {
          return vue.openBlock(), vue.createElementBlock("view", { class: "border-bottom" }, [
            item.data.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
              vue.createElementVNode("view", { class: "py-2 px-3 border-bottom bg-light" }, [
                vue.createElementVNode(
                  "text",
                  { class: "text-dark font-md" },
                  vue.toDisplayString(item.letter),
                  1
                  /* TEXT */
                )
              ]),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(item.data, (item2, index2) => {
                  return vue.openBlock(), vue.createBlock(_component_my_list_item, {
                    key: index2,
                    onClick: _cache[0] || (_cache[0] = ($event) => $options.click()),
                    title: item2,
                    "not-bottom": index2 !== item.data.length - 1,
                    "img-url": "/static/images/mail/friend.png"
                  }, null, 8, ["title", "not-bottom"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : vue.createCommentVNode("v-if", true)
          ]);
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]);
  }
  const PagesTabbarMailMail = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "F:/uniapp/仿微信/pages/tabbar/mail/mail.vue"]]);
  const _sfc_main$3 = {
    components: {
      MyAvatar: CompoentsMyUiMyAvatar
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
        return $T.getChatTime(this.item.create_time, this.preTime);
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
      },
      //预览图片
      preview(url, currentImage) {
        formatAppLog("log", "at compoents/my-ui/my-chat-item.vue:110", currentImage);
        uni.previewImage({
          current: currentImage,
          urls: url,
          longPressActions: {
            itemList: ["发送给朋友", "保存图片", "收藏"],
            success: function(data) {
              formatAppLog("log", "at compoents/my-ui/my-chat-item.vue:117", "选中了第" + (data.tapIndex + 1) + "个按钮,第" + (data.index + 1) + "张图片");
            },
            fail: function(err) {
              formatAppLog("log", "at compoents/my-ui/my-chat-item.vue:120", err.errMsg);
            }
          }
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_MyAvatar = vue.resolveComponent("MyAvatar");
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        onLongpress: _cache[2] || (_cache[2] = (...args) => $options.onLong && $options.onLong(...args))
      },
      [
        vue.createCommentVNode(" 时间显示 "),
        vue.createElementVNode("view", { class: "flex align-center justify-center py-1" }, [
          vue.createElementVNode(
            "text",
            { class: "font-sm text-light-muted" },
            vue.toDisplayString($options.showTime),
            1
            /* TEXT */
          )
        ]),
        vue.createCommentVNode(" 撤回消息 "),
        $props.item.isRemove ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "flex align-center justify-center py-1 pb-3"
        }, [
          vue.createElementVNode(
            "text",
            { class: "font-sm text-light-muted" },
            vue.toDisplayString($options.isSelf ? "你" : "对方") + "撤回了一条消息",
            1
            /* TEXT */
          )
        ])) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" 聊天气泡 "),
        vue.createCommentVNode(" 左边好友栏 "),
        !$options.isSelf ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "flex pl-2 pt-2 mb-1",
          style: { "position": "relative" }
        }, [
          vue.createVNode(_component_MyAvatar, {
            src: $props.item.avatar,
            size: "70"
          }, null, 8, ["src"]),
          $props.item.type === "text" ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            class: "chat-left-icon iconfont font-md text-white position-absolute"
          }, "")) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["bg-white rounded ml-3", $options.labelClass]),
              style: { "max-width": "500rpx", "max-height": "200rpx" }
            },
            [
              $props.item.type === "text" ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 0,
                  class: "font-md"
                },
                vue.toDisplayString($props.item.data),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(` <image v-if="item.type==='emoji'" :src="item.data" lazy-load></image> `),
              $props.item.type === "emoji" ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 1,
                src: $props.item.data,
                mode: "widthFix",
                "lazy-load": "",
                style: { "width": "300rpx", "height": "300rpx", "border-radius": "10rpx" },
                onClick: _cache[0] || (_cache[0] = ($event) => $options.preview($props.imgList, $props.item.data))
              }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ])) : (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 2 },
          [
            vue.createCommentVNode(" 右边用户栏 "),
            vue.createElementVNode("view", {
              class: "flex pr-2 pt-2 mb-1 align-start justify-end position-relative",
              style: {}
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["bg-chat-item rounded mr-3", $options.labelClass]),
                  style: { "max-width": "500rpx" }
                },
                [
                  $props.item.type === "text" ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: "font-md"
                    },
                    vue.toDisplayString($props.item.data),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true),
                  $props.item.type === "emoji" ? (vue.openBlock(), vue.createElementBlock("image", {
                    key: 1,
                    src: $props.item.data,
                    mode: "widthFix",
                    "lazy-load": "",
                    style: { "width": "300rpx", "height": "300rpx", "border-radius": "10rpx" },
                    onClick: _cache[1] || (_cache[1] = ($event) => $options.preview($props.imgList, $props.item.data))
                  }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
                ],
                2
                /* CLASS */
              ),
              $props.item.type === "text" ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "chat-right-icon iconfont font-md text-chat-item position-absolute"
              }, "")) : vue.createCommentVNode("v-if", true),
              vue.createVNode(_component_MyAvatar, {
                src: $props.item.avatar,
                size: "70"
              }, null, 8, ["src"])
            ])
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        ))
      ],
      32
      /* HYDRATE_EVENTS */
    );
  }
  const CompoentsMyUiMyChatItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-ca41c7ef"], ["__file", "F:/uniapp/仿微信/compoents/my-ui/my-chat-item.vue"]]);
  const _sfc_main$2 = {
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
      clickEmoji(emoji2) {
        this.$emit("sendEmoji", emoji2);
      },
      //删除表情
      deleteEmoji() {
        this.$emit("deleteEmoji");
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "view" }, [
      vue.createElementVNode("scroll-view", {
        "scroll-y": "true",
        class: "emoji"
      }, [
        vue.createElementVNode("view", {
          class: "delete",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.deleteEmoji && $options.deleteEmoji(...args))
        }, [
          vue.createElementVNode("image", {
            src: "/static/images/delete.png",
            style: { "height": "32rpx", "width": "32rpx" }
          })
        ]),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.emoji, (row, i) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "row px-2 pt-1",
              key: i
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(row, (col, j) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "col px-1",
                    key: j
                  }, [
                    vue.createElementVNode("text", {
                      class: "font-lg",
                      onClick: ($event) => $options.clickEmoji(col)
                    }, vue.toDisplayString(col), 9, ["onClick"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        vue.createElementVNode("view", { style: { "height": "200rpx" } })
      ])
    ]);
  }
  const emoji = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-7eefac38"], ["__file", "F:/uniapp/仿微信/compoents/emoji.vue"]]);
  const $C = {
    emojiUrl: [{
      // url: "http://192.168.3.238:5050/images/emoji/",
      url: "/static/images/emoji/",
      total: 20,
      isActive: false
    }, {
      // url: "http://192.168.3.238:5050/images/ggb/",
      url: "/static/images/ggb/",
      total: 32,
      isActive: false
    }]
  };
  const _sfc_main$1 = {
    components: {
      MyNavBar: CompoentsMyUiMyNavBar,
      MyIconButton: CompoentsMyUiMyIconButton,
      MyAvatar: CompoentsMyUiMyAvatar,
      MyChatItem: CompoentsMyUiMyChatItem,
      MyPopUp: CompoentsMyUiMyPopUp,
      emoji
    },
    data() {
      return {
        isActive1: true,
        isActive2: false,
        activeIndex: -1,
        emojiUrl: $C.emojiUrl,
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
        formatAppLog("log", "at pages/chat/chat.vue:273", "aad");
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
        uni.hideKeyboard();
        this.KeyboardHeight = uni.upx2px(580);
        this.pageToBottom();
      },
      handleEmoticon() {
        this.$refs.action.show();
        this.mode = "emoticon";
        uni.hideKeyboard();
        this.KeyboardHeight = uni.upx2px(580);
        this.pageToBottom();
      },
      // 拓展菜单事件
      actionEvent(event) {
        formatAppLog("log", "at pages/chat/chat.vue:311", event);
        switch (event) {
          case "uploadImage":
            uni.chooseImage({
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
                  formatAppLog("log", "at pages/chat/chat.vue:343", item);
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
          formatAppLog("log", "at pages/chat/chat.vue:392", "跳转底部");
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
        formatAppLog("log", "at pages/chat/chat.vue:438", this.mode);
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
        const bottom = uni.upx2px(105) + this.KeyboardHeight;
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
      this.navBarHeight = this.statusBarHeight + uni.upx2px(90);
      uni.onKeyboardHeightChange((res) => {
        this.KeyboardH = res.height;
      });
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_my_icon_button = vue.resolveComponent("my-icon-button");
    const _component_my_nav_bar = vue.resolveComponent("my-nav-bar");
    const _component_my_chat_item = vue.resolveComponent("my-chat-item");
    const _component_my_pop_up = vue.resolveComponent("my-pop-up");
    const _component_emoji = vue.resolveComponent("emoji");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 顶部导航 "),
      vue.createVNode(_component_my_nav_bar, {
        "is-show-back": "",
        title: "昵称",
        noreadnum: "1"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_my_icon_button, {
            slot: "right",
            icon: ""
          })
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createCommentVNode(" 底部导航 "),
      vue.createElementVNode(
        "view",
        {
          class: "position-fixed left-0 right-0 border-top flex align-center",
          style: vue.normalizeStyle([{ "background-color": "#f7f7f6", "height": "105rpx" }, $options.getKeyBoardHeight])
        },
        [
          vue.createVNode(_component_my_icon_button, { icon: "" }),
          vue.createElementVNode("view", { class: "flex-1" }, [
            vue.withDirectives(vue.createElementVNode(
              "textarea",
              {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.message = $event),
                onFocus: _cache[1] || (_cache[1] = (...args) => $options.focus && $options.focus(...args)),
                onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
                "adjust-position": "false",
                fixed: "",
                class: "font-md bg-white rounded pt-1 pl-1",
                style: { "height": "60rpx", "width": "100%", "box-sizing": "border-box" }
              },
              null,
              544
              /* HYDRATE_EVENTS, NEED_PATCH */
            ), [
              [vue.vModelText, $data.message]
            ])
          ]),
          vue.createCommentVNode(" 表情 "),
          vue.createVNode(_component_my_icon_button, {
            icon: "",
            onClick: $options.handleEmoticon
          }, null, 8, ["onClick"]),
          vue.createCommentVNode(" 拓展菜单 "),
          !$data.message ? (vue.openBlock(), vue.createBlock(_component_my_icon_button, {
            key: 0,
            icon: "",
            onClick: $options.handleAction
          }, null, 8, ["onClick"])) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "main-bg-color rounded mr-2 px-2 py-1",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.send("text"))
          }, [
            vue.createElementVNode("text", { class: "font text-white" }, "发送")
          ]))
        ],
        4
        /* STYLE */
      ),
      vue.createCommentVNode(" 聊天内容区域 "),
      vue.createElementVNode("scroll-view", {
        "show-scrollbar": false,
        "scroll-y": "true",
        class: "position-fixed left-0 right-0 bg-light",
        style: vue.normalizeStyle([{ "bottom": "105rpx" }, $options.chatBody]),
        "scroll-into-view": $data.scrollIntoView
      }, [
        vue.createCommentVNode(" 聊天列表 "),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.list, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              id: "chatItem_" + index
            }, [
              vue.createVNode(_component_my_chat_item, {
                ref_for: true,
                ref: "chatItem",
                index,
                item,
                "pre-time": index > 0 ? $data.list[index - 1].create_time : 0,
                "img-list": $data.imageList,
                onLong: $options.long
              }, null, 8, ["index", "item", "pre-time", "img-list", "onLong"])
            ], 8, ["id"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 12, ["scroll-into-view"]),
      vue.createCommentVNode(" 消息弹出框 "),
      vue.createVNode(_component_my_pop_up, {
        ref: "mypopup",
        "tabbar-height": 260,
        "body-height": $options.getMenuHeight,
        "body-width": 240
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle([{ "width": "240rpx" }, $options.getMenuStyle]),
              class: "flex flex-column"
            },
            [
              vue.createCommentVNode(" 弹窗内容 "),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($options.getMenuList, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    "hover-class": "bg-hover-secondary",
                    class: "flex-1 align-center flex justify-center",
                    onClick: ($event) => $options.click(item.event)
                  }, [
                    vue.createElementVNode(
                      "text",
                      { class: "font-md" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    )
                  ], 8, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            4
            /* STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["body-height"]),
      vue.createCommentVNode(" 功能弹出框 "),
      vue.createVNode(
        _component_my_pop_up,
        {
          ref: "action",
          "fix-bottom": "",
          onHide: _cache[5] || (_cache[5] = ($event) => $data.KeyboardHeight = 0),
          mask: false
        },
        {
          default: vue.withCtx(() => [
            vue.createCommentVNode(" 扩展菜单 "),
            $data.mode === "action" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              style: { "height": "580rpx" },
              class: "border-top border-light-secondary flex-column"
            }, [
              vue.createElementVNode("swiper", {
                "indicator-dots": $data.actionList.length > 1,
                class: "",
                style: { "height": "510rpx" }
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.actionList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("swiper-item", { class: "flex flex-wrap" }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(item, (item2, index2) => {
                          return vue.openBlock(), vue.createElementBlock("view", {
                            class: "flex flex-column align-center justify-center",
                            style: { "height": "255rpx", "width": "25%" },
                            onClick: ($event) => $options.actionEvent(item2.event)
                          }, [
                            vue.createElementVNode("image", {
                              src: item2.icon,
                              mode: "widthFix",
                              style: { "height": "100rpx", "width": "100rpx" }
                            }, null, 8, ["src"]),
                            vue.createElementVNode(
                              "text",
                              { class: "font-sm text-dark" },
                              vue.toDisplayString(item2.name),
                              1
                              /* TEXT */
                            )
                          ], 8, ["onClick"]);
                        }),
                        256
                        /* UNKEYED_FRAGMENT */
                      ))
                    ]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ], 8, ["indicator-dots"])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 表情包 "),
            $data.mode === "emoticon" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "border-top border-light-secondary bg-light",
              style: { "height": "580rpx" }
            }, [
              vue.createCommentVNode(" 点击切换表情包 "),
              vue.createElementVNode("view", {
                class: "emoji",
                style: { "height": "80rpx" }
              }, [
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["iconfont font-lg ml-2 size", { isActive: $data.isActive1 }]),
                    onClick: _cache[4] || (_cache[4] = (...args) => $options.changeActive && $options.changeActive(...args))
                  },
                  vue.toDisplayString(""),
                  2
                  /* CLASS */
                ),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.emojiUrl, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("image", {
                      key: index,
                      src: item.url + "0.gif",
                      class: vue.normalizeClass(["ml-s size", { isActive: $data.activeIndex === index }]),
                      onClick: ($event) => $options.changeActive2(index, item.url, item.total),
                      style: { "height": "60rpx", "width": "60rpx" }
                    }, null, 10, ["src", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                vue.createCommentVNode(' <image src="http://192.168.3.238:5050/images/emoji/0.gif" style="width: 50rpx;height: 50rpx;">\r\n					</image> ')
              ]),
              $data.isActive1 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                style: { "overflow": "auto" }
              }, [
                vue.createVNode(_component_emoji, {
                  onSendEmoji: $options.sendEmoji,
                  onDeleteEmoji: _ctx.deleteEmoji
                }, null, 8, ["onSendEmoji", "onDeleteEmoji"])
              ])) : vue.createCommentVNode("v-if", true),
              $data.isActive2 ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
                key: 1,
                "scroll-y": "true",
                style: { "height": "500rpx" }
              }, [
                (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(2, (item, index) => {
                    return vue.withDirectives(vue.createElementVNode(
                      "view",
                      null,
                      [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList($data.emojiUrl[index].total / 4, (num, index2) => {
                            return vue.openBlock(), vue.createElementBlock("view", { class: "flex justify-between px-4 py-2" }, [
                              (vue.openBlock(), vue.createElementBlock(
                                vue.Fragment,
                                null,
                                vue.renderList(4, (nums) => {
                                  return vue.createElementVNode("image", {
                                    style: { "height": "120rpx", "width": "120rpx" },
                                    src: $data.emojiUrl[index].url + `${index2 * 4 + nums - 1}.gif`,
                                    onClick: ($event) => $options.send("emoji", $data.emojiUrl[index].url + `${index2 * 4 + nums - 1}.gif`)
                                  }, null, 8, ["src", "onClick"]);
                                }),
                                64
                                /* STABLE_FRAGMENT */
                              ))
                            ]);
                          }),
                          256
                          /* UNKEYED_FRAGMENT */
                        ))
                      ],
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vShow, index === $data.activeIndex]
                    ]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true)
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesChatChat = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-0a633310"], ["__file", "F:/uniapp/仿微信/pages/chat/chat.vue"]]);
  __definePage("pages/tabbar/index/index", PagesTabbarIndexIndex);
  __definePage("pages/tabbar/find/find", PagesTabbarFindFind);
  __definePage("pages/tabbar/my/my", PagesTabbarMyMy);
  __definePage("pages/tabbar/mail/mail", PagesTabbarMailMail);
  __definePage("compoents/my-ui/my-icon-button", CompoentsMyUiMyIconButton);
  __definePage("compoents/my-ui/my-nav-bar", CompoentsMyUiMyNavBar);
  __definePage("compoents/my-ui/my-avatar", CompoentsMyUiMyAvatar);
  __definePage("compoents/my-ui/my-badge", CompoentsMyUiMyBadge);
  __definePage("compoents/my-ui/my-chat-list", CompoentsMyUiMyChatList);
  __definePage("compoents/my-ui/my-pop-up", CompoentsMyUiMyPopUp);
  __definePage("pages/chat/chat", PagesChatChat);
  __definePage("compoents/my-ui/my-chat-item", CompoentsMyUiMyChatItem);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:11", "App Launch");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/uniapp/仿微信/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
