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
                        <postDetailBox></postDetailBox>
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
import rightBox from './right.vue'
import postDetailBox from './postDetail.vue'
import footerBox from './footer.vue'
    export default {
    	components: {
    		headerBox,
            rightBox,
    		postDetailBox,
    		footerBox
    	}
    }
</script>