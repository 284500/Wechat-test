<template>
	<view>
		<!-- 中心页 -->
		<my-list-item img-url="/static/images/mail/friend.png" :image-size="120" :is-show-right="true">

			<template v-slot:title>
				<view class="flex flex-column">
					<!-- app端不需要加pt-1 -->
					<text class="text-dark font-lg font-weight-bold">XXXXX</text>
					<text class="text-light-muted font-sm mt-2">微信号：ada</text>
				</view>
			</template>
			<text slot="avatar" class="iconfont font-md pt-1">
				&#xe86d;
			</text>
		</my-list-item>
		<!-- 分割线 -->
		<my-divider></my-divider>
		<my-list-item title="支付" :is-show-right="true">
			<template v-slot:icon>
				<text class="iconfont font-md pt-1">
					&#xe66c;
				</text>
			</template>
		</my-list-item>
		<!-- 分割线 -->
		<my-divider></my-divider>
		<my-list-item title="收藏" :is-show-right="true">
			<template v-slot:icon>
				<!-- #ifdef APP -->
				<text class="iconfont font-md">
					&#xea2d;
				</text>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<text class="iconfont font-md pt-1">
					&#xea2d;
				</text>
				<!-- #endif -->

			</template>
		</my-list-item>
		<my-list-item title="相册" :is-show-right="true">
			<template v-slot:icon>
				<text class="iconfont font-md pt-1">
					&#xe608;
				</text>
			</template>
		</my-list-item>
		<my-list-item title="表情" :is-show-right="true">
			<template v-slot:icon>
				<text class="iconfont font-md pt-1">
					&#xe605;
				</text>
			</template>
		</my-list-item>
		<!-- 分割线 -->
		<my-divider></my-divider>
		<my-list-item title="设置" :is-show-right="true">
			<template v-slot:icon>
				<text class="iconfont font-md pt-1">
					&#xe612;
				</text>
			</template>
		</my-list-item>

	</view>
</template>

<script>
	import MyDivider from '@/compoents/my-ui/my-divider.vue'
	import MyListItem from '@/compoents/my-ui/my-list-item.vue'
	export default {
		components: {
			MyDivider,
			MyListItem
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>