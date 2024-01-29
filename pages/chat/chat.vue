<template>
	<view>
		<!-- 顶部导航 -->
		<my-nav-bar is-show-back title="昵称" noreadnum="1">
			<my-icon-button slot="right" :icon="'\ue6fd'"></my-icon-button>
		</my-nav-bar>
		<!-- 底部导航 -->
		<view class="position-fixed left-0 right-0 border-top flex align-center"
			style="background-color: #f7f7f6;height: 105rpx;" :style="getKeyBoardHeight">
			<my-icon-button :icon="'\ue606'"></my-icon-button>
			<view class="flex-1">
				<textarea v-model="message" @focus="focus" @blur="blur" adjust-position="false" fixed
					class="font-md bg-white rounded pt-1 pl-1"
					style="height: 60rpx;width: 100%;box-sizing: border-box;"></textarea>
			</view>
			<!-- 表情 -->
			<my-icon-button :icon="'\ue605'" @click="handleEmoticon"></my-icon-button>
			<!-- 拓展菜单 -->
			<my-icon-button v-if="!message" :icon="'\ue603'" @click="handleAction"></my-icon-button>
			<view v-else class=" main-bg-color rounded mr-2 px-2 py-1" @click="send('text')">
				<text class="font text-white">发送</text>
			</view>
		</view>
		<!-- 聊天内容区域 -->
		<scroll-view :show-scrollbar="false" scroll-y="true" class=" position-fixed left-0 right-0 bg-light"
			style="bottom: 105rpx;" :style="chatBody" :scroll-into-view="scrollIntoView">
			<!-- 聊天列表 -->
			<view v-for="(item,index) in list" :key="index" :id="'chatItem_'+index">
				<my-chat-item ref="chatItem" :index="index" :item="item" :pre-time="index>0?list[index-1].create_time:0"
					:img-list="imageList" @Long="long"></my-chat-item>
			</view>

		</scroll-view>
		<!-- 消息弹出框 -->
		<my-pop-up ref="mypopup" :tabbar-height="260" :body-height="getMenuHeight" :body-width="240">
			<view style="width: 240rpx;" class="flex flex-column" :style="getMenuStyle">
				<!-- 弹窗内容 -->
				<view v-for="(item,index) in getMenuList" :key="index" hover-class="bg-hover-secondary"
					class="flex-1 align-center flex justify-center" @click="click(item.event)">
					<text class="font-md">{{item.name}}</text>
				</view>
			</view>
		</my-pop-up>
		<!-- 功能弹出框 -->

		<my-pop-up ref="action" fix-bottom @hide="KeyboardHeight=0" :mask="false">
			<!-- 扩展菜单 -->
			<view v-if="mode==='action'" style="height: 580rpx;" class=" border-top border-light-secondary flex-column">
				<swiper :indicator-dots="actionList.length>1" class="" style="height: 510rpx;">
					<swiper-item class="flex flex-wrap" v-for="(item,index) in actionList">
						<view v-for="(item2,index2) in item" class="flex flex-column align-center justify-center"
							style="height: 255rpx;width: 25%;" @click="actionEvent(item2.event)">
							<image :src="item2.icon" mode="widthFix" style="height: 100rpx;width: 100rpx;"></image>
							<text class="font-sm text-dark">{{item2.name}}</text>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 表情包 -->
			<view v-if="mode==='emoticon'" class="border-top border-light-secondary bg-light" style="height: 580rpx;">
				<!-- 点击切换表情包 -->
				<view class="emoji" style="height: 80rpx;">
					<text class="iconfont font-lg ml-2 size" :class="{isActive:isActive1}"
						@click="changeActive">{{'\ue605'}}</text>
					<image v-for="(item,index) in emojiUrl" :key="index" :src="item.url+'0.gif'" class="ml-s size"
						:class="{isActive:activeIndex===index}" @tap="changeActive2(index,item.url,item.total)"
						style="height: 60rpx;width: 60rpx;">
					</image>
					<!-- <image src="http://192.168.3.238:5050/images/emoji/0.gif" style="width: 50rpx;height: 50rpx;">
					</image> -->
				</view>
				<view v-if="isActive1" style="overflow: auto;">
					<emoji @sendEmoji="sendEmoji" @deleteEmoji="deleteEmoji"></emoji>
				</view>
				<scroll-view scroll-y="true" v-if="isActive2" style="height: 500rpx;">
					<view v-for="(item,index) in 2" v-show="index===activeIndex">
						<view v-for="(num,index2) in (emojiUrl[index].total/4)" class="flex justify-between px-4 py-2">
							<image style="height: 120rpx;width: 120rpx;;" v-for="nums in 4"
								:src="emojiUrl[index].url+`${index2*4+nums-1}.gif`"
								@tap="send('emoji',(emojiUrl[index].url+`${index2*4+nums-1}.gif`))"></image>
						</view>
					</view>
				</scroll-view>
			</view>
		</my-pop-up>
	</view>
</template>

<script>
	import MyPopUp from '@/compoents/my-ui/my-pop-up.vue'
	import MyChatItem from '@/compoents/my-ui/my-chat-item.vue'
	import MyAvatar from '@/compoents/my-ui/my-avatar.vue'
	import MyIconButton from '@/compoents/my-ui/my-icon-button.vue'
	import MyNavBar from '@/compoents/my-ui/my-nav-bar.vue'
	import emoji from '@/compoents/emoji.vue'
	import $C from '@/common/lib/config.js'
	export default {
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
				emojiUrl: $C.emojiUrl,
				scrollIntoView: null,
				statusBarHeight: 0,
				navBarHeight: 0, //导航栏高度
				KeyboardHeight: 0, //键盘高度
				keyboardH: 0,
				//高度的变化
				chatIndex: -1, //聊天信息下标
				message: '', //输入文本
				mode: "text", //模式 text audio emoji action
				bianhao: 1,
				preImage: [],
				actionList: [
					[{
						name: '相册',
						icon: '/static/images/extends/pic.png',
						event: 'uploadImage'
					}, {
						name: '拍摄',
						icon: '/static/images/extends/video.png',
						event: 'uploadImage'
					}, {
						name: '收藏',
						icon: '/static/images/extends/shoucan.png',
						event: 'uploadImage'
					}, {
						name: '名片',
						icon: '/static/images/extends/man.png',
						event: 'uploadImage'
					}, {
						name: '语音通话',
						icon: '/static/images/extends/phone.png',
						event: 'uploadImage'
					}, {
						name: '视频通话',
						icon: '/static/images/extends/phone.png',
						event: 'uploadImage'
					}, {
						name: '位置',
						icon: '/static/images/extends/path.png',
						event: 'uploadImage'
					}, ]
				],
				menu: [{
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
					},


				],
				list: [{
						avatar: "/static/images/mail/friend.png",
						user_id: 1,
						nickname: "ada",
						type: "text",
						data: "哈哈哈哈哈",
						isRemove: false,
						create_time: new Date().getTime() - 1000 * 60 * 2400
					}, {
						avatar: "/static/images/mail/friend.png",
						user_id: 1,
						nickname: "ada",
						type: "text",
						data: "哈哈哈哈哈",
						isRemove: false,
						create_time: new Date().getTime() - 1000 * 1 * 60
					}, {
						avatar: "/static/images/mail/friend.png",
						user_id: 0,
						nickname: "ada",
						type: "text",
						data: "哈哈哈哈哈哈",
						isRemove: true,
						create_time: new Date().getTime() - 2 * 60 * 1000
					}, {
						avatar: "/static/images/mail/friend.png",
						user_id: 1,
						nickname: "ada",
						type: "text",
						data: "哈哈哈哈哈",
						isRemove: false,
						create_time: new Date().getTime() - 1000 * 60 * 4
					},
					{
						avatar: "/static/images/mail/friend.png",
						user_id: 1,
						nickname: "ada",
						type: "text",
						data: "哈哈哈哈哈",
						isRemove: false,
						create_time: new Date().getTime() - 1000 * 60 * 4
					},
					{
						avatar: "/static/images/mail/friend.png",
						user_id: 1,
						nickname: "ada",
						type: "text",
						data: "哈哈哈哈哈",
						isRemove: false,
						create_time: new Date().getTime() - 1000 * 60 * 4
					},
					{
						avatar: "/static/images/mail/friend.png",
						user_id: 1,
						nickname: "ada",
						type: "text",
						data: "哈哈哈哈哈",
						isRemove: false,
						create_time: new Date().getTime() - 1000 * 60 * 4
					},
					{
						avatar: "/static/images/mail/friend.png",
						user_id: 1,
						nickname: "ada",
						type: "text",
						data: "哈哈哈哈哈",
						isRemove: false,
						create_time: new Date().getTime() - 1000 * 60 * 4
					},
					{
						avatar: "/static/images/mail/friend.png",
						user_id: 0,
						nickname: "ada",
						type: "text",
						data: "哈哈哈哈哈",
						isRemove: false,
						create_time: new Date().getTime() - 1000 * 60 * 4
					},
					{
						avatar: "/static/images/mail/friend.png",
						user_id: 1,
						nickname: "ada",
						type: "audio",
						data: '/static/1.mp3',
						isRemove: false,
						create_time: new Date().getTime() - 1000 * 60 * 4
					},
					{
						avatar: "/static/images/mail/friend.png",
						user_id: 1,
						nickname: "ada",
						type: "audio",
						data: '/static/2.mp3',
						isRemove: false,
						create_time: new Date().getTime() - 1000 * 60 * 4
					},
				],
				imageList: []
			}
		},
		methods: {
			deleteEmojid() {
				//将字符串拆分成数组
				let strArr = Array.from(this.message);
				strArr.pop();
				this.message = strArr.join('');
			},
			sendEmoji(emoji) {
				console.log("aad")
				this.message = this.message + emoji;
			},
			//改变点击状态
			changeActive() {
				this.isActive1 = true;
				this.isActive2 = false;
				this.activeIndex = -1;
				this.emojiUrl.forEach(item => {
					this.$set(item, 'isActive', false)
				})
			},
			//改变点击状态2
			changeActive2(index, url, total) {
				this.isActive2 = true;
				this.isActive1 = false;
				this.activeIndex = index
				// this._init(index, url, total)
			},
			// 点击打开拓展菜单
			handleAction() {
				this.$refs.action.show();
				this.mode = 'action';
				uni.hideKeyboard();
				//将键盘弹起
				this.KeyboardHeight = uni.upx2px(580);
				this.pageToBottom();
			},
			handleEmoticon() {
				this.$refs.action.show();
				this.mode = 'emoticon';
				uni.hideKeyboard()
				//将键盘弹起
				this.KeyboardHeight = uni.upx2px(580)
				this.pageToBottom();
			},
			// 拓展菜单事件
			actionEvent(event) {
				console.log(event)
				switch (event) {
					case 'uploadImage':
						// uni.chooseMedia({
						// 	count: 9,
						// 	mediaType: ['image', 'video'],
						// 	sourceType: ['album', 'camera'],
						// 	maxDuration: 30,
						// 	camera: 'back',
						// 	success: (res) => {
						// 		//临时路径
						// 		const images = res.tempFiles
						// 		//发送到服务器
						// 		//渲染到界面
						// 		// console.log(images)
						// 		images.forEach(item => {
						// 			this.send('emoji', item.tempFilePath)
						// 			console.log(item.tempFilePath)
						// 		})
						// 	}
						// })
						uni.chooseImage({
							count: 9, //默认9
							sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
							sourceType: ['album'], //从相册选择
							success: (res) => {
								const images = res.tempFilePaths
								//发送到服务器
								//渲染到界面
								images.forEach(item => {

									this.send('emoji', item)
									console.log(item)
								})
								// console.log(images)
							}
						})
						break;
				}
			},
			//发送消息
			send(type, data) {
				const time = new Date().getTime()
				const obj = {
					avatar: "/static/images/mail/friend.png",
					user_id: 1,
					nickname: "ada",
					type: type,
					data: "哈哈哈哈哈",
					isRemove: false,
					create_time: time
				}
				switch (type) {
					case 'text':
						obj.data = this.message;
						this.list.push(obj);
						break;
					case 'emoji':
						obj.data = data;
						this.list.push(obj);
						this.imageList.push(data);
						break;
				}
				this.$nextTick(() => {
					this.pageToBottom();
					this.message = '';
				})

			},
			//跳转底部
			pageToBottom() {
				this.$nextTick(() => {
					// #ifdef APP-PLUS-NVUE
					let chatItem = this.$refs.chatItem
					let lastIndexs = chatItem.length > 0 ? chatItem.length - 1 : 0
					let last = chatItem[lastIndexs]
					if (last) {
						dom.scrollToElement(last, {})
					}
					// #endif
					// #ifndef APP-PLUS-NVUE
					console.log("跳转底部")
					let lastIndex = this.list.length - 1;
					this.scrollIntoView = 'chatItem_' + lastIndex
					// #endif
				})

			},
			//键盘事件
			focus(e) {
				this.mode = "text"
				this.pageToBottom()
				//监听键盘高度
				// uni.onKeyboardHeightChange(res => {
				// 	console.log('log', res);
				// 	this.pageToBottom()
				// })
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
					case 'removeChat':
						//拿到当前被操作的消息
						this.list[this.chatIndex].isRemove = true
						break;
					case 'deleteChat':
						this.deleteChat();
						break;
				}
				//关闭菜单
				this.$refs.mypopup.hide();
			}
		},
		watch: {
			mode(newValue, oldValue) {
				console.log(this.mode)
				if (newValue === 'text') {
					this.$refs.action.hide()
				}
			},
			KeyboardH(newValue, oldValue) {
				if (newValue > 0) {
					this.mode = 'text'
					this.KeyboardHeight = newValue;
					this.pageToBottom()
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
				return `height:${this.getMenuHeight}rpx;`
			},
			//获取键盘高度
			getKeyBoardHeight() {
				return `bottom:${this.KeyboardHeight}px;'`
			},
			//聊天区域bottom和top
			chatBody() {
				const bottom = uni.upx2px(105) + this.KeyboardHeight;
				return `bottom:${bottom}px;top:${this.navBarHeight}px;`
			},
			fixedStyle() {
				return `top:${this.navBarHeight}px;`
			},
			isDoSelf() {
				//id为1是本人
				const id = 1;
				return this.bianhao === id
			},
			getMenuList() {
				return this.menu.filter(v => {
					if (v.name === '撤回' && !this.isDoSelf) {
						return false
					} else {
						return true
					}
				})
			}
		},
		mounted() {
			// #ifdef APP-PLUS-NVUE
			this.statusBarHeight = plus.navigator.getStatusbarHeight();
			//#endif
			this.navBarHeight = this.statusBarHeight + uni.upx2px(90);
			//监听键盘高度
			uni.onKeyboardHeightChange(res => {
				// if (this.mode !== "action") {
				// 	this.KeyboardHeight = res.height
				// }
				this.KeyboardH = res.height

			})
		}
	}
</script>

<style scoped lang="scss">
	.emoji {
		height: 80rpx;
		background-color: #e8e8e8;
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: center;

		.size {
			padding: 10rpx;
		}
	}

	.isActive {
		background-color: #fff;
	}
</style>