<style>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-footer-center{
    text-align: center;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <headerBox></headerBox>
            <Content :style="{padding: '20px 50px'}">
            	<Row>
            		<Col span="19">
            			<cateBox></cateBox>
            			<itemBox></itemBox>
            		</Col>
            		<Col span="5">
            			
						<rightBox></rightBox>
            		</Col>
            	</Row>
            </Content>
            <footerBox></footerBox>
        </Layout>
    </div>
</template>
<script>
import headerBox from './header.vue'
import cateBox from './cate.vue'
import itemBox from './item.vue'
import rightBox from './right.vue'
import footerBox from './footer.vue'
    export default {
    	components: {
    		headerBox,
    		cateBox,
    		itemBox,
    		rightBox,
    		footerBox
    	}
    }
</script>