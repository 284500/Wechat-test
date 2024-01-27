"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/tabbar/index/index.js";
  "./pages/tabbar/find/find.js";
  "./pages/tabbar/my/my.js";
  "./pages/tabbar/mail/mail.js";
  "./compoents/my-ui/my-icon-button.js";
  "./compoents/my-ui/my-nav-bar.js";
  "./compoents/my-ui/my-avatar.js";
  "./compoents/my-ui/my-badge.js";
  "./compoents/my-ui/my-chat-list.js";
  "./compoents/my-ui/my-pop-up.js";
  "./pages/chat/chat.js";
  "./compoents/my-ui/my-chat-item.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/uniapp/仿微信/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
