<script>
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS-NVUE
			const domModule = weex.requireModule('dom');
			domModule.addRule('fontFace', {
				fontFamily: 'iconfont',
				src: "url('/static/font.ttf')"
			});
			// #endif
			console.log('App Launch');
		},
	};
</script>

<style>
	/*每个页面公共css */
	@import "./common/free.css";
	@import "./common/common.css";
	@import "./common/free-icon.css";
</style>