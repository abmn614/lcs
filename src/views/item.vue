<style>
.lcs-items{ display: inline-block; width: 100%;}
.lcs-item:last-child{border:none; margin-bottom: -10px; padding-bottom: 0; clear: both;}
.lcs-item{border: none; border-bottom: 1px solid #dddee1 !important; margin-bottom: 10px !important; padding-bottom: 10px !important;}
.lcs-item-avatar{float: left;}
.lcs-item-body{float: left; line-height: 23px; margin-left: 20px;}
.lcs-item-title a{ color: #1c2438; font-size: 16px;}
.lcs-item-info{float: left; font-size: 12px;}
.lcs-item-info a{color: #80848f;}
.lcs-item-comment{float: right; line-height: 40px;}
.lcs-item-comment-badge{background: #80848f !important;}
.lcs-clear{clear: both; width: 0; height: 0}
</style>


<template>
    <Card :bordered="false" style="margin-right: 20px; padding: 0px;">
        <div class="lcs-items" style="margin-right: 20px;">
			
		    <!-- <Scroll :on-reach-edge="handleReachEdge" :height="680" ref="scroll"> -->
				<div v-for="(item, index) in items" :key="index">
					<div class="lcs-item">
						<div class="lcs-item-avatar">
				            <Avatar :src="item.avatar" size="large" />
						</div>
						<div class="lcs-item-body">
							<div class="lcs-item-title">
								<a href="">{{item.title}}</a>
							</div>
							<div class="lcs-item-info">
								<a href="" class="lcs-item-cate-sub">{{item.cate_sub}}</a>
								<a href="" class="lcs-item-user">{{item.user}}</a>
								<a href="" class="lcs-item-time">{{item.time}}</a>
							</div>
						</div>
						<div class="lcs-item-comment">
						    <Badge :count="item.comment" class-name="lcs-item-comment-badge"></Badge>
						</div>
						<div class="lcs-clear"></div>
					</div>
				</div>
		    <!-- </Scroll> -->

            <Page @on-change="changePage" :total="40" size="small" show-elevator show-sizer></Page>

		</div>
    </Card>
</template>

<script>
	export default {
		name: 'itemBox',
        data () {
            return {
                items: [
                	{
                		avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                		title: '有没有一种爬虫服务，只需要我指定网站和规则，就可以定时爬数据，并且可以提供我指定格式的 json api 的',
                		cate_sub: '分类名1',
                		user: '用户名',
                		time: '时间',
                		comment: 20
                	},
                	{
                		avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                		title: '有没有一种爬虫服务，只需要我指定网站和规则，就可以定时爬数据，并且可以提供我指定格式的 json api 的',
                		cate_sub: '分类名2',
                		user: '用户名',
                		time: '时间',
                		comment: 21
                	},
                	{
                		avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                		title: '有没有一种爬虫服务，只需要我指定网站和规则，就可以定时爬数据，并且可以提供我指定格式的 json api 的',
                		cate_sub: '分类名2',
                		user: '用户名',
                		time: '时间',
                		comment: 22
                	},
                	{
                		avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                		title: '有没有一种爬虫服务，只需要我指定网站和规则，就可以定时爬数据，并且可以提供我指定格式的 json api 的',
                		cate_sub: '分类名2',
                		user: '用户名',
                		time: '时间',
                		comment: 23
                	},
                	{
                		avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                		title: '有没有一种爬虫服务，只需要我指定网站和规则，就可以定时爬数据，并且可以提供我指定格式的 json api 的',
                		cate_sub: '分类名2',
                		user: '用户名',
                		time: '时间',
                		comment: 24
                	}
                ],
                data4: [
                    {
                        title: '话题',
                        children: [
                            {
                                title: 'iView',
                                count: 10000,

                            },
                            {
                                title: 'iView UI',
                                count: 10600,

                            }
                        ]
                    },
                    {
                        title: '问题',
                        children: [
                            {
                                title: 'iView UI 有多好',
                                count: 60100,

                            },
                            {
                                title: 'iView 是啥',
                                count: 30010,

                            }
                        ]
                    },
                    {
                        title: '文章',
                        children: [
                            {
                                title: 'iView 是一个设计语言',
                                count: 100000,

                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            handleReachEdge (dir) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const last = this.items[this.items.length - 1];
                        const first = this.items[0]
                        if (dir > 0) {
                            this.items.unshift(first);
                            // this.items = this.items + this.items
                        } else {
                            this.items.push(last);
                            // this.items = this.items + this.items
                        }

                        resolve();
                        // this.$refs.scroll.$refs.scrollContainer.style.height = (this.$refs.scroll.$refs.scrollContainer.offsetHeight*2) + 'px'
                        // console.log(this.$refs.scroll.$refs.scrollContainer.offsetHeight)
                    }, 500);
                });
            },
            changePage(pageNum) {
                console.log(pageNum)
            }
        }
	}
</script>