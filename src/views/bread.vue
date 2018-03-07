<style>
    .demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
    }
</style>
<template>
    <Breadcrumb separator=">">
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">技术</BreadcrumbItem>
        <BreadcrumbItem>大数据</BreadcrumbItem>
    </Breadcrumb>	
</template>
<script>
    export default {
        name: 'breadBox'
    }
</script>

