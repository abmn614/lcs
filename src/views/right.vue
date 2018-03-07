<style>
.lcs-card{
	width: 100%;
	margin-top: 20px;
}
</style>

<template>
	<div>
	    <Card :bordered="false" style="width: 100%;">
	        <div style="text-align:center">
	            <h3>登录 / 注册</h3>
	        </div>
	    </Card>

	    <Card :bordered="false" class="lcs-card">
	        <p slot="title">最多查看</p>
	        <p>Content of card</p>
	        <p>Content of card</p>
	        <p>Content of card</p>
	    </Card>

	    <Card :bordered="false" class="lcs-card">
	        <p slot="title">最多评论</p>
	        <p>Content of card</p>
	        <p>Content of card</p>
	        <p>Content of card</p>
	    </Card>

	    <Card :bordered="false" class="lcs-card">
	        <p slot="title">概况</p>
	        <p>Content of card</p>
	        <p>Content of card</p>
	        <p>Content of card</p>
	    </Card>
	</div>
</template>

<script>
	export default {
		name: 'rightBox'
	}
</script>