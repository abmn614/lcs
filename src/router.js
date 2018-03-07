const routers = [
{
    path: '/',
    meta: {
        title: 'lcs'
    },
    // component: (resolve) => require(['./views/index.vue'], resolve)
    component: (resolve) => require(['./views/home.vue'], resolve)
},{
	path: '/post',
    name: 'post',
	meta: {
		title: 'post'
	},
	component: (resolve) => require(['./views/post.vue'], resolve)
},{
    path: '/user',
    meta: {
        title: 'user'
    },
    component: (resolve) => require(['./views/user.vue'], resolve)
}];
export default routers;