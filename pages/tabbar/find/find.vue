<template>
	<view class="page">
		<!-- 顶部导航 -->
		<my-nav-bar>
			<text class="font-md ml-3">
				发现
			</text>
		</my-nav-bar>
		<my-list-item title="朋友圈" :is-show-right="true" @click="showTip">
			<template v-slot:icon>
				<text class="iconfont font-md py-1">
					&#xe667;
				</text>
			</template>
			<template v-slot:avatar>
				<view class="position-relative py-1">
					<my-avatar size="55" src="/static/images/mail/friend.png"></my-avatar>
					<text class="rounded-circle bg-danger position-absolute"
						style="width: 20rpx; height: 20rpx;right:-5rpx;top:5rpx;">
					</text>
				</view>
			</template>
		</my-list-item>
		<my-divider></my-divider>
		<my-list-item title="扫一扫" :is-show-right="true" @click="showTip">
			<text slot="icon" class="iconfont font-md pt-1">
				&#xe86d;
			</text>
		</my-list-item>
		<my-list-item title="摇一摇" :is-show-right="true" @click="showTip">
			<template v-slot:icon>
				<text class="iconfont font-md pt-1">
					&#xe63d;
				</text>
			</template>
		</my-list-item>
		<my-divider></my-divider>
		<my-list-item title="搜一搜" :is-show-right="true" @click="showTip">
			<template v-slot:icon>
				<text class="iconfont font-md pt-1">
					&#xe667;
				</text>
			</template>
		</my-list-item>
		<my-list-item title="看一看" :is-show-right="true" @click="showTip">
			<template v-slot:icon>
				<text class="iconfont font-md pt-1">
					&#xe611;
				</text>
			</template>
		</my-list-item>
		<my-divider></my-divider>
		<my-list-item title="购物" :is-show-right="true" @click="showTip">
			<template v-slot:icon>
				<text class="iconfont font-md pt-1">
					&#xe658;
				</text>
			</template>
		</my-list-item>
	</view>
</template>

<script>
	import MyAvatar from '@/compoents/my-ui/my-avatar.vue'
	import MyListItem from '@/compoents/my-ui/my-list-item.vue'
	import MyNavBar from '@/compoents/my-ui/my-nav-bar.vue'
	import MyDivider from '@/compoents/my-ui/my-divider.vue'
	import MyPopUp from '@/compoents/my-ui/my-pop-up.vue'
	export default {
		components: {
			MyNavBar,
			MyPopUp,
			MyListItem,
			MyAvatar,
			MyDivider
		},
		data() {
			return {}
		},
		methods: {
			showTip() {
				uni.showToast({
					title: '敬请期待'
				})
			}
		}
	}
</script>

<style>

</style>