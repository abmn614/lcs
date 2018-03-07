<style>
	.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;

    line-height: 30px;
    background: none;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
    float: right;

    width: auto;
    margin-right: 0;
}
</style>

<template>
	<Header>
	    <Menu mode="horizontal" theme="dark" active-name="1">
	        <div class="layout-logo"><router-link to='/'>轻社区</router-link></div>

	        <searchBox></searchBox>

	        <div class="layout-nav">
	            <MenuItem name="1">
	                <Icon type="ios-navigate"></Icon>
	                首页
	            </MenuItem>
	            <MenuItem name="2">
	                <Icon type="ios-keypad"></Icon>
	                注册
	            </MenuItem>
	            <MenuItem name="3">
	                <Icon type="ios-analytics"></Icon>
	                登录
	            </MenuItem>
	        </div>
	    </Menu>
	</Header>
</template>

<script>
import searchBox from './search.vue'

	export default {
		name: 'headerBox',
    	components: {
    		searchBox
    	}
	}
</script>