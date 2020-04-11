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
		
		<block v-for="(item1,index1) in demo">
			<common-list :item="item1"></common-list>
			<divider></divider>
		</block>
		

	</view>
</template>

<script>
	import commonList from '@/components/custom/common-list/common-list.vue'
	import divider from '@/components/custom/divider/divider.vue'
	export default {
		components:{
			commonList,
			divider
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
				}],
					demo: [{
						"media_name": "懒熊体育",
						"ban_comment": 0,
						"abstract": "截至北京时间4月11日5点40分，全球新冠肺炎累计确诊人数为1594315，加中国确诊人数在内，全球累计确诊将近170万，其中美国确诊人数超过49万，法国、德国确诊人数超过12万。",
						"image_list": [
							 
						],
						"datetime": "2020-04-11 09:42",
						"article_type": 0,
						"tag": "news_sports",
						"has_m3u8_video": 0,
						"display_dt": 1586557084,
						"has_mp4_video": 0,
						"aggr_type": 1,
						"cell_type": 0,
						"article_sub_type": 0,
						"bury_count": 0,
						"title": "NBA无限期暂停球员交易 日本一篮球队大规模感染丨全球体育疫情早报",
						"source_icon_style": 1,
						"tip": 0,
						"has_video": false,
						"share_url": "http://toutiao.com/group/6814210793093988872/?app=news_article&is_hit_share_recommend=0",
						"source": "懒熊体育",
						"comment_count": 9,
						"article_url": "http://www.lanxiongsports.com/?c=posts&a=view&id=18639",
						"large_mode": true,
						"large_image_url": "http://p29-tt.byteimg.com/img/pgc-image/RvnVEqIEKpBCaJ~tplv-tt-cs0:640:360.jpg",
						"publish_time": 1586557084,
						"group_flags": 0,
						"gallary_image_count": 3,
						"action_extra": "{\"channel_id\": 3189398957}",
						"tag_id": "6814210793093988872",
						"source_url": "/i6814210793093988872/",
						"display_url": "http://toutiao.com/group/6814210793093988872/",
						"is_stick": false,
						"item_id": "6814210793093988872",
						"repin_count": 88,
						"cell_flag": 262155,
						"source_open_url": "sslocal://profile?uid=3405367810",
						"level": 0,
						"digg_count": 107,
						"behot_time": 1586569350,
						"hot": 0,
						"cursor": 1586569350999,
						"url": "http://www.lanxiongsports.com/?c=posts&a=view&id=18639",
						"user_repin": 0,
						"has_image": true,
						"video_style": 0,
						"media_info": {
						"avatar_url": "http://p8.pstatp.com/large/dc0f0000d70e1113f6e1",
						"media_id": 3405401991,
						"name": "懒熊体育",
						"user_verified": true
						},
						"group_id": "6814210793093988872"
					},
					{
						"media_name": "懒熊体育",
						"ban_comment": 0,
						"abstract": "截至北京时间4月11日5点40分，全球新冠肺炎累计确诊人数为1594315，加中国确诊人数在内，全球累计确诊将近170万，其中美国确诊人数超过49万，法国、德国确诊人数超过12万。",
						"image_list": [
							{
							"url": "https://p3.pstatp.com/list/pgc-image/7ba835f4aa844f3790a3eb7cac2ea0ad",
							"width": 640,
							"height": 360
							}
						],
						"datetime": "2020-04-11 09:42",
						"article_type": 0,
						"tag": "news_sports",
						"has_m3u8_video": 0,
						"display_dt": 1586557084,
						"has_mp4_video": 0,
						"aggr_type": 1,
						"cell_type": 0,
						"article_sub_type": 0,
						"bury_count": 0,
						"title": "NBA无限期暂停球员交易 日本一篮球队大规模感染丨全球体育疫情早报",
						"source_icon_style": 1,
						"tip": 0,
						"has_video": true,
						"share_url": "http://toutiao.com/group/6814210793093988872/?app=news_article&is_hit_share_recommend=0",
						"source": "懒熊体育",
						"comment_count": 9,
						"article_url": "http://www.lanxiongsports.com/?c=posts&a=view&id=18639",
						"large_mode": true,
						"large_image_url": "http://p29-tt.byteimg.com/img/pgc-image/RvnVEqIEKpBCaJ~tplv-tt-cs0:640:360.jpg",
						"publish_time": 1586557084,
						"group_flags": 0,
						"gallary_image_count": 3,
						"action_extra": "{\"channel_id\": 3189398957}",
						"tag_id": "6814210793093988872",
						"source_url": "/i6814210793093988872/",
						"display_url": "http://toutiao.com/group/6814210793093988872/",
						"is_stick": false,
						"item_id": "6814210793093988872",
						"repin_count": 88,
						"cell_flag": 262155,
						"source_open_url": "sslocal://profile?uid=3405367810",
						"level": 0,
						"digg_count": 107,
						"behot_time": 1586569350,
						"hot": 0,
						"cursor": 1586569350999,
						"url": "http://www.lanxiongsports.com/?c=posts&a=view&id=18639",
						"user_repin": 0,
						"has_image": true,
						"video_style": 0,
						"media_info": {
						"avatar_url": "http://p8.pstatp.com/large/dc0f0000d70e1113f6e1",
						"media_id": 3405401991,
						"name": "懒熊体育",
						"user_verified": true
						},
						"group_id": "6814210793093988872"
					},
					{
						"media_name": "懒熊体育",
						"ban_comment": 0,
						"abstract": "截至北京时间4月11日5点40分，全球新冠肺炎累计确诊人数为1594315，加中国确诊人数在内，全球累计确诊将近170万，其中美国确诊人数超过49万，法国、德国确诊人数超过12万。",
						"image_list": [
							{
							"url": "https://p3.pstatp.com/list/pgc-image/7ba835f4aa844f3790a3eb7cac2ea0ad",
							"width": 640,
							"height": 360
							},
							{
							"url": "https://p3.pstatp.com/list/pgc-image/7ba835f4aa844f3790a3eb7cac2ea0ad",
							"width": 640,
							"height": 360
							},
							{
							"url": "https://p3.pstatp.com/list/pgc-image/7ba835f4aa844f3790a3eb7cac2ea0ad",
							"width": 640,
							"height": 360
							}
						],
						"datetime": "2020-04-11 09:42",
						"article_type": 0,
						"tag": "news_sports",
						"has_m3u8_video": 0,
						"display_dt": 1586557084,
						"has_mp4_video": 0,
						"aggr_type": 1,
						"cell_type": 0,
						"article_sub_type": 0,
						"bury_count": 0,
						"title": "NBA无限期暂停球员交易 日本一篮球队大规模感染丨全球体育疫情早报",
						"source_icon_style": 1,
						"tip": 0,
						"has_video": false,
						"share_url": "http://toutiao.com/group/6814210793093988872/?app=news_article&is_hit_share_recommend=0",
						"source": "懒熊体育",
						"comment_count": 9,
						"article_url": "http://www.lanxiongsports.com/?c=posts&a=view&id=18639",
						"large_mode": true,
						"large_image_url": "http://p29-tt.byteimg.com/img/pgc-image/RvnVEqIEKpBCaJ~tplv-tt-cs0:640:360.jpg",
						"publish_time": 1586557084,
						"group_flags": 0,
						"gallary_image_count": 3,
						"action_extra": "{\"channel_id\": 3189398957}",
						"tag_id": "6814210793093988872",
						"source_url": "/i6814210793093988872/",
						"display_url": "http://toutiao.com/group/6814210793093988872/",
						"is_stick": false,
						"item_id": "6814210793093988872",
						"repin_count": 88,
						"cell_flag": 262155,
						"source_open_url": "sslocal://profile?uid=3405367810",
						"level": 0,
						"digg_count": 107,
						"behot_time": 1586569350,
						"hot": 0,
						"cursor": 1586569350999,
						"url": "http://www.lanxiongsports.com/?c=posts&a=view&id=18639",
						"user_repin": 0,
						"has_image": true,
						"video_style": 0,
						"media_info": {
						"avatar_url": "http://p8.pstatp.com/large/dc0f0000d70e1113f6e1",
						"media_id": 3405401991,
						"name": "懒熊体育",
						"user_verified": true
						},
						"group_id": "6814210793093988872"
					}]
			}
		},
		onLoad() {
			var res=uni.getSystemInfo({
				success:res=>{
					this.scrollH=res.windowHeight-uni.upx2px(100);
					console.log(this.scrollH)
				}
			})
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
