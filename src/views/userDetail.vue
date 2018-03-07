<style>
.lcs-user-avatar{float: left; margin-right: 20px;}
.lcs-user-info-name{font-size: 20px; font-weight: bold;}
.lcs-user-info-meta{color: #80848f;}

.lcs-user-post{border-bottom: 1px solid #e9eaec; padding-bottom: 20px; margin-bottom: 20px;}
.lcs-user-post-title{font-size: 16px; line-height: 22px; font-weight: bold;}
.lcs-user-post-meta{font-size: 12px; color: #80848f; }
.lcs-user-post-meta-cate{font-weight: bold; float: left; margin-right: 10px;}
.lcs-user-post-meta-time{float: left;}
.lcs-user-post-comment{float: right; line-height: 40px;}
</style>

<template>
	<div>
	    <Card :bordered="false" style="margin-right: 20px; margin-bottom: 20px; padding: 0px;">
	    	<div class="lcs-user-avatar">
	    		<Avatar :src="avatar" size="large" />
	    	</div>
	    	<div class="lcs-user-info">
	    		<div class="lcs-user-info-name">{{ username }}</div>
	    		<div class="lcs-user-info-meta">
	    			注册时间 2018年11月13号 11:12:13
	    		</div>
	    	</div>
			<div class="lcs-clear"></div>
		</Card>
	
	    <Card :bordered="false" style="margin-right: 20px; padding: 0px;">
	    	<p slot="title">共发表了 10 片文章</p>
	    	<div class="lcs-user-post" v-for="(post, index) in posts" :key="index">
	    		<div class="lcs-user-post-comment">
	    			<Badge class-name="lcs-detail-badge" :count="post.comment"></Badge>
	    		</div>
	    		<div class="lcs-user-post-title">
	    			<router-link :to="{name: 'post', params: {id: post.id}, query: {cate: post.cate}}">{{ post.title }}</router-link>
	    		</div>
	    		<div class="lcs-user-post-meta">
	    			<div class="lcs-user-post-meta-cate">{{ post.cate }}</div>
	    			<div class="lcs-user-post-meta-time">{{ post.time }}</div>
	    		</div>
				<div class="lcs-clear"></div>
	    	</div>

	    	<Page @on-change="changePage" :total="40" size="small" show-elevator show-sizer></Page>
		</Card>

	</div>
</template>

<script>
	export default {
		name: 'userDetailBox',
		data() {
			return {
				avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
				username: '山水云',
				posts: [
					{
						id: 1,
						title: '请教大家， JS 怎样在一个坐标轴上同时画出散点图和直线图啊',
						cate: '大数据',
						time: '2018年11月13号 11:12:13',
						comment: 10
					},
					{
						id: 2,
						title: '请教大家， JS 怎样在一个坐标轴上同时画出散点图和直线图啊',
						cate: '大数据',
						time: '2018年11月13号 11:12:13',
						comment: 10
					},
					{
						id: 3,
						title: '请教大家， JS 怎样在一个坐标轴上同时画出散点图和直线图啊',
						cate: '大数据',
						time: '2018年11月13号 11:12:13',
						comment: 10
					},
					{
						id: 4,
						title: '请教大家， JS 怎样在一个坐标轴上同时画出散点图和直线图啊',
						cate: '大数据',
						time: '2018年11月13号 11:12:13',
						comment: 10
					},
					{
						id: 5,
						title: '请教大家， JS 怎样在一个坐标轴上同时画出散点图和直线图啊',
						cate: '大数据',
						time: '2018年11月13号 11:12:13',
						comment: 10
					},
				],
			}
		},
		methods: {
			changePage(pageNum) {
				console.log(pageNum)
			}
		}
	}
</script>