<template>
	<image :class="type" :src="src" mode="widthFix" :style="getStyle"></image>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		props: {
			size: {
				type: [String, Number],
				default: 95
			},
			src: {
				type: String,
				default: ""
			},
			type: {
				type: String,
				default: "rounded"
			}
		},
		computed: {
			getStyle() {
				return `height:${this.size}rpx;width:${this.size}rpx;`;
			}
		}
	}
</script>

<style>

</style>