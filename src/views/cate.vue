<style>
.lcs-cates{font-size: 14px;}
.lcs-cates li{
	display: inline-block;
}
.lcs-cates a, .lcs-cates a:link{
	display: block;
	padding: 0 10px;
	line-height: 30px;
	border-radius: 4px;
	color: #495060;
}
.lcs-cates a:hover, .lcs-actived, .lcs-actived:visited{
	background: #495060;
	font-weight: bold;
	color: #fff;
}
.lcs-cates-sub{font-size: 14px; margin-top: 10px; margin-right: 20px; margin-bottom: 20px;}
.lcs-cates-sub li{display: inline-block;}
.lcs-cates-sub a{padding: 0 10px; color: #80848f;}
.lcs-cates-sub a:hover{text-decoration: underline; color: #2d8cf0;}
</style>

<template>
	<div>
		<div class="lcs-cates">
			<ul>
				<li><a href="" class="lcs-actived">语言</a></li>
			</ul>
		</div>
		<div class="lcs-cates-sub">
			<ul>
				<li><a href="">1</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cateBox'
	}
</script>