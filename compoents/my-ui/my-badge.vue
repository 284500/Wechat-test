<template>
	<text class="my-badge bg-danger text-white font-sm rounded-circle " :class="badgeClass" :style="badgeStyle">
		<slot>

		</slot>

	</text>
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
			badgeClass: {
				type: String,
				default: ""
			},
			badgeStyle: {
				type: String,
				default: ""
			},
		}
	}
</script>

<style scoped>
	.my-badge {
		padding-left: 13rpx;
		padding-right: 13rpx;
		padding-top: 3rpx;
		padding-bottom: 3rpx;
	}
</style>