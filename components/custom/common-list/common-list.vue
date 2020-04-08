<template>
	<view>
		<view class="p-2">
			<!-- 头像 -->
			<view class="flex align-center justify-between">
				<view class="flex align-center">
					<image :src="item.userpic" class="mr-2 rounded-circle" style="width: 65rpx;height: 65rpx;" lazy-load @click="openSpace"></image>
					<view>
						<view class="font" style="line-height: 1.3;">{{item.username}}</view>
						<text class="font-sm" style="color: #9D9589;line-height: 1.3;">{{item.newstime}}</text>
					</view>
				</view>
				<view class="flex align-center justify-center rounded bg-main text-white animated faster" 
				style="width: 90rpx;height: 50rpx;" hover-class="jello" @click="follow" v-if="!item.isFollow">关注</view>
			</view>
			<!-- 标题 -->
			<view class="font-md my-1">{{item.title}}</view>
			<!-- 图片 -->
			<image v-if="item.titlepic" :src="item.titlepic" style="
			height: 350rpx;" class="rounded w-100"></image>
			<!-- 按钮 -->
			<view class="flex align-center">
				<!-- 顶 -->
				<view class="flex align-center justify-center flex-1 animated faster" hover-class="jello text-main"
				:class="item.support.type === 'support' ? 'support-active' : '' ">
					<text class="iconfont icon-dianzan2 mr-2" @click="doSupport('support')"></text>
					<text>{{item.support.support_count >0 ? item.support.support_count: '支持'}}</text>
				</view>
				<!-- 踩 -->
				<view class="flex align-center justify-center flex-1 animated faster" hover-class="jello text-main"
				:class="item.support.type === 'unsupport' ? 'support-active' : '' ">
					<text class="iconfont icon-cai mr-2" @click="doSupport('unsupport')"></text>
					<text>{{item.support.unsupport_count >0 ? item.support.unsupport_count: '踩'}}</text>
				</view>
				<view class="flex align-center justify-center flex-1 animated faster" hover-class="jello text-main">
					<text class="iconfont icon-pinglun2 mr-2" @click="openDetail"></text>
					<text>{{item.support.comment_count >0 ? item.support.comment_count: '评论'}}</text>
				</view>
				<view class="flex align-center justify-center flex-1 animated faster" hover-class="jello text-main">
					<text class="iconfont icon-fenxiang mr-2" @click="openDetail"></text>
					<text>{{item.support.share_num >0 ? item.support.share_num: '评论'}}</text>
				</view>
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
			item:Object,
			index:Number
		},
		methods:{
			openSpace(){
				console.log("打开个人空间");
			},
			follow(){
				this.$emit('follow',this.index);
			},
			openDetail(){
				console.log("打开详情");
			},
			doSupport(type){
				this.$emit('doSupport',{
					type:type,
					index:this.index
				});
			}
		}
	}
</script>

<style>
	.support-active{
		color:#FF4A6A;
	}
</style>
