<template>
	<view>
		<!-- 导航栏 -->
		<view class="bg-light" :class="fixed?'fixed-top':'fixed'">
			<!-- 状态栏 -->
			<view class="" :style="'height:'+statusBarHeight+'px'"></view>
			<!-- 导航 -->
			<view class="w-100 flex justify-between align-center" style="height: 90rpx;">
				<!-- 左边 -->
				<view class="flex align-center">
					<my-icon-button class="pt-1" v-if="isShowBack" @click="back" :icon="'\ue60d'"></my-icon-button>
					<slot>
						<text v-if="title" class="font-md ml-3">{{getTitle}}
						</text>
					</slot>
					<!-- <text class="iconfont">&#xe719;</text> -->
				</view>
				<!-- 右边 -->
				<view class="flex align-center">
					<slot name="right">
						<my-icon-button :icon="'\ue6e3'" @click="a"></my-icon-button>
						<my-icon-button :icon="'\ue682'" @click="openExtend"></my-icon-button>
					</slot>
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<view v-if="fixed" :style="fixedStyle">
		</view>
		<!-- 拓展菜单 -->
		<my-pop-up ref="extend" :body-height="105" :body-width="300" body-bg-color="bg-dark">
			<view style="width: 280rpx;height: 400rpx;" class="flex flex-column">
				<!-- 弹窗内容 -->
				<!-- <view class="bg-dark"></view> -->
				<view @click="Click(item.event)" v-for="(item,index) in menu" :key="index"
					hover-class="bg-hover-secondary" class="flex-1 align-center flex">
					<text class="text-white iconfont font-md pl-3 pt-2 pr-2">{{item.icon}}</text>
					<text class="font-md text-white">{{item.name}}</text>
				</view>
			</view>
		</my-pop-up>
	</view>
</template>

<script>
	import MyPopUp from '@/compoents/my-ui/my-pop-up.vue'
	import MyIconButton from '@/compoents/my-ui/my-icon-button.vue'
	export default {
		components: {
			MyIconButton,
			MyPopUp
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
					icon: '\ue633'
				}, {
					name: "添加好友",
					event: "set",
					icon: '\ue65d'
				}, {
					name: "扫一扫",
					event: "setTop",
					icon: '\ue614'
				}, {
					name: "收付款",
					event: "setTop",
					icon: '\ue667'
				}, {
					name: "帮助与反馈",
					event: "setTop",
					icon: '\ue61c'
				}]
			}
		},
		onLoad() {

		},
		methods: {
			openExtend() {
				this.$refs.extend.show(uni.upx2px(460), uni.upx2px(100));
			},
			back() {
				uni.navigateBack({
					delta: 1,
				})
			}
		},
		computed: {
			getTitle() {
				let noreadnum = this.onreadnum > 0 ? this.noreadnum : '';
				return `${this.title}(${this.noreadnum})`;
			},
			fixedStyle() {
				return `height:${this.navBarHeight}px`;
			}
		},
		mounted() {
			// #ifdef APP-PLUS-NVUE
			this.statusBarHeight = plus.navigator.getStatusbarHeight();
			//#endif
			this.navBarHeight = this.statusBarHeight + uni.upx2px(90);
		}
	}
</script>

<style>
</style>