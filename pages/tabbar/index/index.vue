<template>
	<view>
		<!-- 导航栏 -->
		<my-nav-bar title="仿微信" noreadnum="10" :fixed="flag" :menus="menu"></my-nav-bar>
		<!-- 置顶用户列表 -->
		<block v-for="(item,index) in list" :key="index">
			<my-chat-list v-if="item.isTop" :item="item" :index="index" @Long="long"></my-chat-list>
		</block>
		<!-- 非置顶用户列表 -->
		<block v-for="(item,index) in list" :key="index">
			<my-chat-list v-if="!item.isTop" :item="item" :index="index" @Long="long"></my-chat-list>
		</block>
		<my-pop-up ref="mypopup" :body-height="getMenuHeight" :body-width="240">
			<view style="width: 240rpx;" class="flex flex-column" :style="getMenuStyle">
				<!-- 弹窗内容 -->
				<view @click="Click(item.event)" v-for="(item,index) in menu" :key="index"
					hover-class="bg-hover-secondary" class="flex-1 align-center flex justify-center">
					<text class="font-md">{{item.name}}</text>
				</view>

			</view>
		</my-pop-up>
	</view>
</template>

<script>
	import MyChatList from '@/compoents/my-ui/my-chat-list.vue'
	import MyNavBar from '@/compoents/my-ui/my-nav-bar.vue'
	import MyPopUp from '@/compoents/my-ui/my-pop-up.vue'
	export default {
		components: {
			MyNavBar,
			MyChatList,
			MyPopUp,
		},
		computed: {
			//动态获取菜单高度
			getMenuHeight() {
				let height = 100;
				return this.menu.length * height;
			},
			//动态获取菜单样式
			getMenuStyle() {
				return `height:${this.getMenuHeight}rpx;`
			},
		},
		methods: {
			search() {
				// this.$refs.mypopup.show(100, 100);
			},
			long({
				x,
				y,
				index
			}) {
				// console.log(index)
				this.chatIndex = index;
				let item = this.list[this.chatIndex];
				this.menu[0].name = item.isTop ? '取消置顶' : '设置置顶';
				this.$refs.mypopup.show(x - 50, y - 20);
			},
			Click(e) {
				switch (e) {
					case 'setTop':
						this.setTop();
						break;
					case 'deleteChat':
						this.deleteChat();
						break;
				}
				this.$refs.mypopup.hide();
			},
			setTop() {
				let item = this.list[this.chatIndex];
				item.isTop = !item.isTop;
			},
			deleteChat() {
				this.list.splice(this.chatIndex, 1)
			}
		},
		data() {
			return {
				chatIndex: -1,
				menu: [{
						name: "设置置顶",
						event: "setTop"
					},
					{
						name: "删除聊天",
						event: "deleteChat"
					},
				],
				list: [{
						avater: "/static/images/userpic.png",
						nickname: "昵称1",
						update_time: 1692845763,
						data: "哈哈哈哈",
						// 聊天数量
						num: 1,
						isTop: false
					},
					{
						avater: "/static/images/userpic.png",
						nickname: "昵称2",
						update_time: new Date().getTime(),
						data: "哈哈哈哈",
						num: 2,
						isTop: false
					},
					{
						avater: "/static/images/userpic.png",
						nickname: "昵称3",
						update_time: new Date().getTime(),
						data: "哈哈哈哈",
						num: 3,
						isTop: false
					},
					{
						avater: "/static/images/userpic.png",
						nickname: "昵称4",
						update_time: new Date().getTime(),
						data: "哈哈哈哈",
						num: 4,
						isTop: false
					}
				],
				flag: true,
			}
		}
	}
</script>

<style>
</style>