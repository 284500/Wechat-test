<template>
	<view :class="item.isTop?'bg-light':'bg-white'" class="flex align-center; " hover-class="bg-hover-light"
		@click="onClick" @longpress="onLong">
		<!-- 头像 -->
		<view class="flex align-center justify-center position-relative" style="width: 145rpx;height: 135rpx;">
			<my-avatar :src="item.avater"></my-avatar>
			<!-- 消息角标 -->
			<!-- <my-badge v-if="item.num>0" badge-class="position-absolute"
				badge-style="right:15rpx;top:14rpx">{{item.num ||index+1}}</my-badge> -->
		</view>
		<!-- 信息栏 -->
		<view class="position-relative flex flex-column border-bottom flex-1 py-3 pr-3 border-light-secondary">
			<view class="flex justify-between align-center mb-1">
				<text class="font-md">{{item.nickname}}</text>
				<text class="font-sm text-light-muted">{{showTime}}</text>
			</view>
			<text class="font text-ellipsis text-light-muted">{{item.data}}</text>
			<my-badge v-if="item.num>0" badge-class="position-absolute"
				badge-style="right:30rpx;bottom:30rpx">{{item.num ||index+1}}</my-badge>
		</view>
	</view>
</template>

<script>
	import MyAvatar from '@/compoents/my-ui/my-avatar.vue'
	import MyBadge from '@/compoents/my-ui/my-badge.vue'
	import mixin from '@/common/mixin/base.js'
	import $T from '@/common/time.js'
	export default {
		components: {
			MyAvatar,
			MyBadge
		},
		data() {
			return {

			}
		},
		methods: {
			onClick() {
				// this.$emit('click');
				uni.navigateTo({
					url: '/pages/chat/chat'
				})
				// console.log("ada")
			},
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
				console.log(x, y)
			}
		},
		props: {
			item: Object,
			index: Number,
		},
		computed: {
			showTime() {
				return $T.gettime(this.item.update_time)
			}
		}

	}
</script>

<style scoped>
</style>