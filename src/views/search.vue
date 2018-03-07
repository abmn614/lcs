<style>
.lcs-search{margin-left: 50px; float: left;}
.lcs-search input{border: none; color: #e9eaec; background: #80848f;}
.lcs-search i{color: #e9eaec;float: left; display: none;}
</style>

<template>
	<div class="lcs-search">
	    <AutoComplete
	        v-model="value"
	        @on-search="handleSearch"
	        @keyup.native="goSearch"
	        ref="search"
	        placeholder="输入搜索..."
	        style="width:200px">
	        <Option v-for="item in data" :value="item" :key="item">{{ item }}</Option>
	    </AutoComplete>
	</div>
</template>

<script>
    export default {
        data () {
            return {
                value: '山水云',
                data: []
            }
        },
        methods: {
            handleSearch (value) {
	        	setTimeout(() => {
	                console.log(value)
	        	}, 1000)
            },
            goSearch() {
            	console.log(this.value)
            }
        }
    }
</script>