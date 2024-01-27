<template>
	<view>
		<!-- 顶部导航 -->
		<my-nav-bar>
			<text class="font-md ml-3">通讯录
			</text>
		</my-nav-bar>
		<!-- 通讯录列表 -->
		<my-list-item v-for="item1 in mailList" @click="click(item1.event)" :title="item1.title"
			:img-url="item1.imgUrl"></my-list-item>
		<view class="border-bottom" v-for="item in list">
			<view v-if="item.data.length>0">
				<view class="py-2 px-3 border-bottom bg-light">
					<text class="text-dark font-md">{{item.letter}}</text>
				</view>
				<my-list-item v-for="(item2,index2) in item.data" :key="index2" @click="click()" :title="item2"
					:not-bottom="index2!==(item.data.length-1)" img-url="/static/images/mail/friend.png"></my-list-item>
			</view>

		</view>

	</view>
</template>

<script>
	import MyListItem from '@/compoents/my-ui/my-list-item.vue'
	import MyNavBar from '@/compoents/my-ui/my-nav-bar.vue'
	import MyPopUp from '@/compoents/my-ui/my-pop-up.vue'
	export default {
		components: {
			MyNavBar,
			MyPopUp,
			MyListItem
		},
		data() {
			return {
				mailList: [{
						imgUrl: '/static/images/mail/friend.png',
						title: '新的朋友',
						event: "1"
					},
					{
						imgUrl: '/static/images/mail/group.png',
						title: '群聊',
						event: "2"
					},
					{
						imgUrl: '/static/images/mail/tag.png',
						title: '标签',
						event: "3"
					}
				],
				list: [{
						letter: 'A',
						data: ['ada']
					},
					{
						letter: 'B',
						data: []
					},
					{
						letter: 'C',
						data: ['ccc', 'cwea']
					},
					{
						letter: 'D',
						data: ['ccc', 'cwea']
					},
					{
						letter: 'E',
						data: ['ccc', 'cwea']
					},
					{
						letter: 'F',
						data: ['ccc', 'cwea']
					},
					{
						letter: 'G',
						data: ['ccc', 'cwea']
					}, {
						letter: 'H',
						data: ['ccc', 'cwea']
					},
					{
						letter: 'I',
						data: ['ccc', 'cwea']
					},
					{
						letter: 'J',
						data: ['ccc', 'cwea']
					},
					{
						letter: 'K',
						data: ['ccc', 'cwea']
					}
				]

			}
		},
		methods: {
			click(e) {
				console.log(e)
				switch (e) {
					case '':
						break;
					case '':
						break;
				}
			}
		}
	}
</script>

<style>

</style>