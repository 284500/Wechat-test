<template>
	<!-- 弹出层 -->
	<view class="" style="z-index: 9999; overflow:hidden;" v-if="status">
		<!-- 遮罩层 -->
		<view v-if="mask" @click="hide" class="position-fixed top-0 right-0 left-0 bottom-0" :style="getMaskColor">
		</view>
		<view class="position-fixed" :class="[getBodyClass,bodyBgColor]" :style="getBodyStyle">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				x: -1,
				y: -1,
				res: {},
				// maxX: 0,
				// maxY: 0,
				status: false
			}
		},
		methods: {
			show(x = -1, y = -1) {
				//设置最大值，防止弹窗溢出
				this.status = true;
				this.$nextTick(() => {
					this.x = x > this.maxX ? this.maxX : x;
					this.y = y > this.maxY ? this.maxY : y;
				})
			},
			hide() {
				this.status = false;
				this.$emit('hide');
			}
		},
		props: {
			//遮罩层颜色
			maskColor: {
				type: Boolean,
				default: false,
			},
			//是否开启遮罩
			mask: {
				type: Boolean,
				default: true
			},
			//是否处于底部
			fixBottom: {
				type: Boolean,
				default: false
			},
			// 弹出层内容高度
			bodyHeight: {
				type: Number,
				default: 0
			},
			// 弹出层内容高度
			bodyWidth: {
				type: Number,
				default: 0
			},
			//背景颜色
			bodyBgColor: {
				type: String,
				default: 'bg-white'
			},
			tabbarHeight: {
				type: Number,
				default: 0
			}
		},
		mounted() {
			const res = uni.getSystemInfoSync();
			this.res = res;
			// this.maxY = res.screenHeight - uni.upx2px(this.bodyHeight) - uni.upx2px(this.tabbarHeight);
			// this.maxX = res.screenWidth - uni.upx2px(this.bodyWidth);
			// console.log(res);
		},
		computed: {
			getMaskColor() {
				let color = this.maskColor ? 0.5 : 0;
				return `background-color:rgba(0,0,0,${color})`;
			},
			getBodyClass() {
				let fixBottom = this.fixBottom ? 'left-0 right-0 bottom-0' : 'rounded border';
				return fixBottom;
			},

			getBodyStyle() {
				let left = this.x > -1 ? `left:${this.x}px;` : '';
				let top = this.y > -1 ? `top:${this.y}px;` : '';
				// return 'left:20rpx;bottom:20rpx;right:20rpx;'
				return `${left}${top}`;
			},
			maxX() {
				return this.res.screenWidth - uni.upx2px(this.bodyWidth);
			},
			maxY() {
				return this.res.screenHeight - uni.upx2px(this.bodyHeight) - uni.upx2px(this.tabbarHeight);
			}
		}
	}
</script>

<style>

</style>