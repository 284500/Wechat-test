<template>
	<view @longpress="onLong">
		<!-- 时间显示 -->
		<view class=" flex align-center justify-center py-1">
			<text class="font-sm text-light-muted">{{showTime}}</text>
		</view>
		<!-- 撤回消息 -->
		<view v-if="item.isRemove" class=" flex align-center justify-center py-1 pb-3">
			<text class="font-sm text-light-muted">{{isSelf?"你":"对方"}}撤回了一条消息</text>
		</view>
		<!-- 聊天气泡 -->
		<!-- 左边好友栏 -->
		<view v-if="!isSelf" class="flex pl-2 pt-2 mb-1" style="position: relative;">
			<MyAvatar :src="item.avatar" size="70">
			</MyAvatar>
			<text v-if="item.type==='text'"
				class="chat-left-icon iconfont font-md text-white position-absolute">&#xe609;</text>
			<view class="bg-white rounded ml-3" style="max-width: 500rpx;max-height: 200rpx;" :class="labelClass">
				<text v-if="item.type==='text'" class="font-md">{{item.data}}</text>
				<MyImage v-if="item.type==='emoji'" :src="item.data" @click="preview(imgList,item.data)"></MyImage>
				<view v-if="item.type==='audio'" class="flex align-center">
					<text>
						4
					</text>
				</view>
			</view>
		</view>
		<!-- 右边用户栏 -->
		<view v-else class="flex pr-2 pt-2 mb-1 align-start justify-end position-relative" style="">
			<view class="bg-chat-item rounded mr-3" style="max-width: 500rpx;" :class="labelClass">
				<text v-if="item.type==='text'" class="font-md">{{item.data}}</text>
				<MyImage v-if="item.type==='emoji'" :src="item.data" @click="preview(imgList,item.data)"></MyImage>
				<view @click="playAudio" v-if="item.type==='audio'" class="flex align-center bg-dark">
					<text class="font">
						4
					</text>
				</view>
			</view>
			<text v-if="item.type==='text'"
				class="chat-right-icon iconfont font-md text-chat-item position-absolute">&#xe640;</text>
			<MyAvatar :src="item.avatar" size="70">
			</MyAvatar>
		</view>
	</view>

</template>

<script>
	import $T from '@/common/time.js'
	import MyImage from '@/compoents/my-ui/my-image.vue'
	import MyAvatar from '@/compoents/my-ui/my-avatar.vue'
	const innerAudioContext = uni.createInnerAudioContext();
	export default {
		components: {
			MyAvatar,
			MyImage
		},
		data() {
			return {}
		},
		// 销毁之前
		// beforeDestroy() {
		// 	console.log("组件销毁")
		// 	innerAudioContext.destroy();
		// },
		props: {
			item: {
				type: Object,
				default: ''
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
				//id为1是本人
				const id = 1;
				return this.item.user_id === id
			},
			showTime() {
				return $T.getChatTime(this.item.create_time, this.preTime)
			},
			hasLabel() {
				return this.item.type === 'text' || this.item.type === 'audio'
			},
			labelClass() {
				if (this.hasLabel) {
					return 'pd'
				} else {
					return ' '
				}
			},
			// 图片宽高
			imagestyle() {
				const height = this.h;
				const width = this.w;
				return `width:${width}px;height:${height}px; border-radius: 10rpx;`
			}
		},
		methods: {
			onLong(e) {
				// console.log(e)
				let x = 0;
				let y = 0;
				if (Array.isArray(e.changedTouches) && e.changedTouches.length > 0) {
					//微信小程序是client,h5是screen
					x = e.changedTouches[0].clientX || e.changedTouches[0].screenX;
					y = e.changedTouches[0].clientY || e.changedTouches[0].screenY;
				}
				this.$emit('Long', {
					x,
					y,
					index: this.index,
				});
				// console.log(x, y)
			},
			//预览图片
			preview(url, currentImage) {
				console.log(currentImage)
				uni.previewImage({
					current: currentImage,
					urls: url,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			//播放音频
			playAudio() {
				innerAudioContext.stop()
				innerAudioContext.src = this.item.data;
				innerAudioContext.play()
			},
		}
	}
</script>
<style scoped>
	.chat-left-icon {
		left: 95rpx;
		top: 40rpx;
	}

	.chat-right-icon {
		right: 95rpx;
		top: 40rpx;
	}

	.pd {
		padding: 15rpx;
	}

	/* 溢出image里的bottom */
	uni-image {
		display: block;
	}

	image {
		display: block;
	}
</style>