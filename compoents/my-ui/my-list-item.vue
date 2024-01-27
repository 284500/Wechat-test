<template>
	<view class="bg-white flex align-stretch" hover-class="bg-light" @click="$emit('click')">
		<view class="flex align-center justify-between py-2 px-3">
			<slot name='icon'></slot>
			<image v-if="imgUrl" :src="imgUrl" mode="withFix" :style="getIamgeStyle"></image>
		</view>
		<view :class="{'border-bottom':notBottom}" class="flex-1 flex align-center justify-between pr-1">
			<slot name='title'>
				<text class="font-md text-dark">{{title}}</text>
			</slot>
			<view class="flex align-center">
				<!-- 头像 -->
				<slot name="avatar">
				</slot>
				<!-- 右箭头 -->
				<text v-if="isShowRight" class="font-md text-light-muted iconfont">
					&#xe60c;
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		computed: {
			getIamgeStyle() {
				return `width:${this.imageSize}rpx;height:${this.imageSize}rpx;`
			}
		},
		props: {
			imgUrl: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
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
	}
</script>

<style>
</style>