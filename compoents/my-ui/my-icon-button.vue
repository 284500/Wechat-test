<template>
	<view>
		<view class=" flex justify-center align-center" style="height: 90rpx;width: 90rpx;" @click="$emit('click')">
			<text class="iconfont font-md">
				{{icon}}
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			icon: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style>

</style>