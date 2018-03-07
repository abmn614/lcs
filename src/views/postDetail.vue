<style>
.lcs-detail-title{margin: 10px 0;}
.lcs-detail-info{font-size: 12px; margin-bottom: 10px;}
.lcs-detail-time, .lcs-detail-comment-count{margin-right: 20px;}
.lcs-detail-cate{float: right;}

.lcs-detail-badge{background: #80848f !important;}

.lcs-detail-comment{border-bottom: 1px solid #e9eaec; margin-bottom: 20px;}
.lcs-detail-comment-avatar{float: left;}
.lcs-detail-comment-box{margin-left: 60px;}
.lcs-detail-comment-floor{float: right;}
.lcs-detail-comment-user{float: left; font-weight: bold; margin-right: 20px;}
.lcs-detail-comment-time{float: left; font-size: 11px; color: #bbbec4; line-height: 20px;}
.lcs-detail-comment-badge{background: #e9eaec !important; color: #bbbec4 !important;}
.lcs-detail-comment-content{clear: right; padding-top: 10px; padding-bottom: 20px;}
.lcs-detail-comment-more{text-align: center;}
</style>

<template>
	<div>
    <Card :bordered="false" style="margin-right: 20px; padding: 0px;">
    	<breadBox></breadBox>
    	<h1 class="lcs-detail-title">我是一名中二的 90 后。。。，一直有想实现动画中的各种</h1>
    	<div class="lcs-detail-info">
    		<a class="lcs-detail-user">用户名</a>
    		<span class="lcs-detail-time"> 发表于 2018年11月12日 18:11:20</span>
    		<span class="lcs-detail-view"> [ 1000 次查看 ] </span>
    		<span class="lcs-detail-comment-count"> [ 2000 次评论 ] </span>
    		<div class="lcs-detail-cate">
    			<Badge class-name="lcs-detail-badge" count="大数据"></Badge>
    			<Badge class-name="lcs-detail-badge" count="人工智能"></Badge>
    			<Badge class-name="lcs-detail-badge" count="10"></Badge>
    		</div>
    	</div>

    	<div class="lcs-detail-content">
    		<p>1231412312</p>
    		<p>1231412312</p>
    		<p>1231412312</p>
    		<p>1231412312</p>
    	</div>

    </Card>

    <Card :bordered="false" style="margin-right: 20px; margin-top: 20px;">
    	<p slot="title">全部共 20 条评论</p>
		<div class="lcs-detail-comment" v-for="(item, index) in items" :key="index">
			<div class="lcs-detail-comment-avatar">
	            <Avatar :src="item.avatar" size="large" />
			</div>
			<div class="lcs-detail-comment-box">
				<div class="lcs-detail-comment-info">
					<div class="lcs-detail-comment-user">{{ item.user }}</div>
					<div class="lcs-detail-comment-time">{{ item.time }}</div>
					<div class="lcs-detail-comment-floor">
    					<Badge class-name="lcs-detail-comment-badge" :count="item.floor"></Badge>
					</div>
				</div>
				<div class="lcs-detail-comment-content">
					{{ item.conent }}
				</div>
			</div>
			<div class="lcs-clear"></div>
		</div>
		<div class="lcs-detail-comment-more">
			<Button type="ghost" @click="loadMoreComments">点击查看更多</Button>
		</div>
    </Card>
	
</div>
</template>

<script>
import breadBox from './bread.vue'
	export default {
		name: 'postDetailBox',
		components: {
			breadBox
		},
		data() {
			console.log(this.$route.query)
			console.log(this.$route.params)
			return {
				items: [
					{
						avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
						user: '山水云',
						time: '2018年11月12日 10:11:12',
						conent: '手机上显示 origin not safe 不让用 camera，不过用 pc 的 webcam，捕捉手机上的卡片能看到效果。感觉挺好玩。我业余也做 webgl, gltf 相关: https://github.com/shrekshao',
						floor: 1
					},
					{
						avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
						user: '山水云',
						time: '2018年11月12日 10:11:12',
						conent: '手机上显示 origin not safe 不让用 camera，不过用 pc 的 webcam，捕捉手机上的卡片能看到效果。感觉挺好玩。我业余也做 webgl, gltf 相关: https://github.com/shrekshao',
						floor: 1
					},
					{
						avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
						user: '山水云',
						time: '2018年11月12日 10:11:12',
						conent: '手机上显示 origin not safe 不让用 camera，不过用 pc 的 webcam，捕捉手机上的卡片能看到效果。感觉挺好玩。我业余也做 webgl, gltf 相关: https://github.com/shrekshao',
						floor: 1
					},
					{
						avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
						user: '山水云',
						time: '2018年11月12日 10:11:12',
						conent: '手机上显示 origin not safe 不让用 camera，不过用 pc 的 webcam，捕捉手机上的卡片能看到效果。感觉挺好玩。我业余也做 webgl, gltf 相关: https://github.com/shrekshao',
						floor: 1
					}
				]
			}
		},
		methods: {
			loadMoreComments() {
				console.log(this.items.push.apply(this.items, this.items))
			}
		}
	}
</script>