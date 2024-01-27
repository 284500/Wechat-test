const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
app.use(bodyParser.urlencoded({
	extended: false
}));
// 解析 application/json
app.use(bodyParser.json());
app.use(express.json());
//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/user');
const db = mongoose.connection;
//连接成功设置回调
db.once('open', () => {
	console.log("启动成功")
	//创建结构对象
});
//失败回调
db.on('error', () => {
	console.log("启动失败")
})
//关闭回调
db.on('close', () => {
	console.log("关闭成功")
})
let BookSchema = new mongoose.Schema({
	name: String,
	author: String
})
//创建模型对象 对文档进行操作
let BookModel = mongoose.model('books', BookSchema);
//添加
BookModel.create({
	name: 'ada',
	author: 'ada'
});