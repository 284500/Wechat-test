"use strict";
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
exports.$T = $T;
