import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'

Vue.use(Router)
let routes = [
	{
		path: '',
		component: layout,
		children: (r => {
			return [].concat(...r.keys().map(key => r(key).default));
		})(require.context('./', true, /^[\s\S]+\/route\.js$/))
	}
]
let history = [];
let route = new Router({
	routes,
	mode: 'history'
})
window.isBack = false;
route.beforeEach((to,from,next)=>{
	let container = document.querySelectorAll('.container')[0] || {};
	let top = container.scrollTop;
	if(history.slice(-2,-1)[0] && history.slice(-2,-1)[0].pathName === to.name){
		history.splice(-1,1);
		window.isBack = true;
	}else{
		history.push({
			pathName: to.name,
			meta: {
				top: 0
			}
		});
		if(history.length >= 2){
			history[history.length-2].meta.top = top;	
		}
		window.isBack = false;
	}
	window.appHistory = history;
	next();
})
export default route
