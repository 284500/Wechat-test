<template>
	<image :src="props.src" mode="widthFix" :class="imageClass" :style="imageStyle" @load="loadImage"
		@click="$emit('click')"></image>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue';
	const h = ref('100')
	const w = ref('100')
	const props = defineProps(['src', 'imageClass'])

	const imageStyle = computed(() => {
		const height = h.value;
		const width = w.value;
		return `width:${width}px;height:${height}px; border-radius: 10rpx;`
	})

	const loadImage = (e) => {
		const {
			width,
			height
		} = e.detail;
		console.log(e.detail)
		//最大宽度和高度
		const maxW = uni.upx2px(500)
		const maxH = uni.upx2px(500)
		if (height < maxH) {
			w.value = w.value <= maxW ? width : maxW;
			h.value = height;
			return
		}
		h.value = maxH;
		const width2 = maxH * (width / height)
		w.value = width2 < width ? width2 : maxW;
		console.log(h.value, w.value)
	}
</script>

<style>
</style>