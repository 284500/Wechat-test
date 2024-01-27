//引入express第三方模块
const express = require("express");
//引入自带path模块
const path = require("path");
//创建web服务器
const app = express();
//设置端口
app.listen(5050, () => {
	console.log(`服务器启动成功,浏览器打开:localhost: 3000`);
});

//托管了的静态资源访问时不要带上/public http://localhost:3000/images/ggb/1.gif
app.use(express.static(path.join(__dirname, "/public")));