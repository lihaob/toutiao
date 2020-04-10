<template>
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="scroll-row border-bottom" :scroll-into-view="scrollInto" scroll-with-animation="" style="height: 100rpx;">
			<view v-for="(item,index) in tabBars" :key="index" 
			class="scroll-row-item px-3 py-2 font-md" :id="'tab'+index"
			:class="tabIndex === index ? 'text-main font-lg font-weight-bold':''"
			@click="changeTab(index)">{{item.name}}</view>
		</scroll-view>
		<!-- 内容块滑动 -->
		<swiper :duration="150" :current="tabIndex" @change="onChangeTab"
		:style="'height:'+scrollH+'px;'">
			<swiper-item v-for="(item,index) in newList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'"
				@scrolltolower="loadmore(index)">
					<template v-if="item.list.length>0">
						<block v-for="(item2,index2) in item.list" :key="index2">
							<common-list :item="item2" :index="index2" @follow="follow"
							@doSupport="doSupport"></common-list>
							<divider></divider>
						</block>
						<!-- 上拉加载 -->
						<load-more :loadmore="item.loadmore"></load-more>
					</template>
					<template v-else>
						<no-thing></no-thing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex:0,
				tabBars:[{
					name:"关注"
				},{
					name:"推荐"
				},{
					name:"热点"
				},{
					name:"财经"
				},{
					name:"娱乐"
				},{
					name:"军事"
				},{
					name:"历史"
				},{
					name:"本地"
				},{
					name:"体育"
				}]
			}
		},
		onLoad() {

		},
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url:'../search/search'
			})
		},
		methods: {
			changeTab(index){
				if (this.tabIndex === index){
					return ;
				}
				this.tabIndex = index;
				this.scrollInto = 'tab' + index;
			}
		}
	}
</script>

<style>
	
</style>
