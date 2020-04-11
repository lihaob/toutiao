<template>
	<view>
		<view class="p-2 animated fast fadeIn">
			<!-- 标题 -->
			<view class="font my-1" style="line-height: 1.4;">{{item.title}}</view>
			<!-- 图片 -->
			<template v-if="item.has_video===false&&item.image_list.length===0"></template>
			<template v-if="item.has_video===false&&item.image_list.length===1">
				<image v-for="image in item.image_list" :src="image.url"
				style="height: 360rpx;" class="rounded w-100"></image>
			</template>
			<template v-else-if="item.has_video===false&&item.image_list.length===3">
				<image v-for="image in item.image_list" :src="image.url"
				style="height: 360rpx;" class="rounded w-100"></image>
			</template>
			<template v-else>
				<!-- 视频图片 -->
				<image :src="item.large_image_url"
				style="height: 360rpx;" class="rounded w-100"></image>
				
			</template>
			<!-- <image v-if="item.titlepic" :src="item.titlepic" style="
			height: 350rpx;" class="rounded w-100"></image> -->
			<!-- 新闻来源信息 -->
			<view class="flex align-center justify-start">
				<view class="font-sm mr-2" style="color: #999999;line-height: 1.3;">{{item.media_name}}</view>
				<view class="font-sm mr-2" style="color: #999999;line-height: 1.3;">{{item.comment_count}}评论</view>
				<text class="font-sm" style="color: #999999;line-height: 1.3;">{{item.datetime}}</text>		
			</view>			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			item:Object
		},
		methods:{
			
		}
	}
</script>

<style>
	.support-active{
		color:#ED4040;
	}
</style>
