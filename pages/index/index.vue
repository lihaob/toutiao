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
			<swiper-item v-for="(item1,index1) in tabBars" :key="index1">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'">
					<template v-if="news_list[index1].list.return_count>0">
						<block v-for="(item2,index2) in news_list[index1].list.data" :key="index2">
							<common-list :item="item2" :index="index2"></common-list>
							<divider></divider>
						</block>
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
	import commonList from '@/components/custom/common-list/common-list.vue'
	import divider from '@/components/custom/divider/divider.vue'
	import noThing from '@/components/custom/no-thing/no-thing.vue'
	export default {
		components:{
			commonList,
			divider,
			noThing
		},
		data() {
			return {
				//窗口高度
				scrollH:600,
				scrollInto:"",
				//当前选项卡
				tabIndex:0,
				//顶部选项卡
				tabBars:[{
					name:"热点",
					type:"news_hot"
				},{
					name:"社会",
					type:"news_society"
				},{
					name:"娱乐",
					type:"news_entertainment"
				},{
					name:"科技",
					type:"news_tech"
				},{
					name:"军事",
					type:"news_military"
				},{
					name:"体育",
					type:"news_sports"
				},{
					name:"汽车",
					type:"news_car"
				},{
					name:"财经",
					type:"news_finance"
				},{
					name:"国际",
					type:"news_world"
				},{
					name:"时尚",
					type:"news_fashion"
				},{
					name:"旅游",
					type:"news_travel"
				},{
					name:"探索",
					type:"news_discovery"
				},{
					name:"育儿",
					type:"news_baby"
				},{
					name:"养生",
					type:"news_regimen"
				},{
					name:"故事",
					type:"news_story"
				},{
					name:"美文",
					type:"news_essay"
				},{
					name:"游戏",
					type:"news_game"
				},{
					name:"历史",
					type:"news_history"
				},{
					name:"美食",
					type:"news_food"
				}],
				news_list: []
			}
		},
		onLoad() {
			var res=uni.getSystemInfo({
				success:res=>{
					this.scrollH=res.windowHeight-uni.upx2px(100);
				}
			})
			var arr = []
			for (let i = 0; i < this.tabBars.length; i++) {
				arr.push({
					loadmore: "上拉加载更多",
					list: [],
					firstLoad: false
				})
			}
			this.news_list = arr
			this.getData();
		},
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url:'../search/search'
			})
		},
		methods: {
			onChangeTab(e){
				this.changeTab(e.detail.current);
			},
			changeTab(index){
				if (this.tabIndex === index){
					return ;
				}
				this.tabIndex = index;
				this.scrollInto = 'tab' + index;
				this.getData();
			},
			getData(){
 				//console.log("https://m.toutiao.com/list/?ac=wap&format=json_raw&tag="+this.tabBars[this.tabIndex].type+"&as=A175ADC1C1BAE7E&cp=5D118A3E877E8E1&_signature=f60bLAAAIr6R60RntmQLRn-tGz")
				let i = this.tabIndex
				if (this.news_list[i].firstLoad == false) {
					uni.showLoading({
						title: "加载中...",
						mask: false
					})
					this.$H.get("/?ac=wap&format=json_raw&tag="+this.tabBars[i].type+"&as=A175ADC1C1BAE7E").then(
						res=>{
							//console.log("/?ac=wap&format=json_raw&tag="+this.tabBars[i].type+"&as=A175ADC1C1BAE7E")
							let [err,result] = res
							this.news_list[i].list = result.data
							uni.hideLoading()
						})
				}
				this.news_list[i].firstLoad = true

			}
		}
	}
</script>

<style>
	
</style>
