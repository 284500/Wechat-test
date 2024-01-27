"use strict";
const common_vendor = require("../../../common/vendor.js");
const MyListItem = () => "../../../compoents/my-ui/my-list-item.js";
const MyNavBar = () => "../../../compoents/my-ui/my-nav-bar2.js";
const MyPopUp = () => "../../../compoents/my-ui/my-pop-up2.js";
const _sfc_main = {
  components: {
    MyNavBar,
    MyPopUp,
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
      console.log(e);
    }
  }
};
if (!Array) {
  const _component_my_nav_bar = common_vendor.resolveComponent("my-nav-bar");
  const _component_my_list_item = common_vendor.resolveComponent("my-list-item");
  (_component_my_nav_bar + _component_my_list_item)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.mailList, (item1, k0, i0) => {
      return {
        a: common_vendor.o(($event) => $options.click(item1.event)),
        b: "79bd2617-1-" + i0,
        c: common_vendor.p({
          title: item1.title,
          ["img-url"]: item1.imgUrl
        })
      };
    }),
    b: common_vendor.f($data.list, (item, k0, i0) => {
      return common_vendor.e({
        a: item.data.length > 0
      }, item.data.length > 0 ? {
        b: common_vendor.t(item.letter),
        c: common_vendor.f(item.data, (item2, index2, i1) => {
          return {
            a: index2,
            b: common_vendor.o(($event) => $options.click(), index2),
            c: "79bd2617-2-" + i0 + "-" + i1,
            d: common_vendor.p({
              title: item2,
              ["not-bottom"]: index2 !== item.data.length - 1,
              ["img-url"]: "/static/images/mail/friend.png"
            })
          };
        })
      } : {});
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/uniapp/仿微信/pages/tabbar/mail/mail.vue"]]);
wx.createPage(MiniProgramPage);
