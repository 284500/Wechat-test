<template>
	<view class="view">
		<scroll-view scroll-y="true" class="emoji">
			<view class="delete" @tap="deleteEmoji">
				<image src="/static/images/delete.png" style="height: 32rpx;width: 32rpx;"></image>
			</view>
			<view class="row px-2 pt-1" v-for="(row, i) in emoji" :key="i">
				<view class="col px-1" v-for="(col, j) in row" :key="j">
					<text class="font-lg" @tap="clickEmoji(col)">{{ col }}</text>
				</view>
			</view>
			<view style="height: 200rpx;"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'emoji',
		data() {
			return {
				emoji: [
					['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆'],
					['😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙'],
					['😚', '🙂', '🙂', '🤗', '🤔', '😐', '😑', '😶'],
					['🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪'],
					['😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒'],
					['😓', '😔', '😕', '🙃', '🤑', '😲', '🤤', '🙁'],
					['😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧'],
					['😨', '😩', '😬', '😰', '😱', '😳', '😵', '😡'],
					['😠', '😷', '🤒', '🤕', '🤢', '🤧', '😇', '🤠'],
					['🤡', '🤥', '🤓', '😈', '👿', '👹', '👺', '💀'],
					['👻', '👽', '🤖', '💩', '😺', '😸', '😹', '😻'],
					['😼', '😽', '🙀', '😿', '😾', '🏻', '🏼', '🏽'],
					['🏾', '🏿', '🗣', '👤', '👥', '👫', '👬', '👭'],
					['👂', '👂🏻', '👂🏼', '👂🏽', '👂🏾', '👂🏿', '👃', '👃🏻'],
					['👃🏼', '👃🏽', '👃🏾', '👃🏿', '👣', '👀', '👁', '👅'],
					['👄', '👓', '🕶', '👔', '👕', '👖', '👗', '👘'],
					['👙', '👚', '👛', '👜', '👝', '🎒', '👞', '👟'],
					['👠', '👡', '👢', '👑', '👒', '🎩', '🎓', '✋'],
					['💄', '💍', '🌂', '💼', '🏁', '🚩', '🎌', '🏴']
				]
			};
		},
		methods: {
			//点击表情
			clickEmoji(emoji) {
				this.$emit('sendEmoji', emoji);
			},
			//删除表情
			deleteEmoji() {
				this.$emit('deleteEmoji');
			}
		}
	};
</script>

<style scoped>
	.view {

		height: 580rpx;
	}

	.emoji {
		display: flex;
		flex-direction: column;
	}

	.delete {
		z-index: 9999;
		width: 120rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		right: 30rpx;
		bottom: 30rpx;
		border-radius: 20rpx;
		background-color: #ffffff;
		position: fixed;
		opacity: 0.9;
	}

	.row {
		display: flex;
		justify-content: space-around;
	}

	.col {
		height: 80rpx;
	}
</style>