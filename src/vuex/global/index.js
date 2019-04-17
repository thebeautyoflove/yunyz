let list = [
	'list',
	'emptyLayout'
];
const state = {
	hasChildPage: false,//当前页面是否有子页面正打开
	forceChangePage: false,//是否忽略有子页面打开强制跳转路由
	noCacheName: '',//不缓存的组件名字
	pageStatus: '',//返回已缓存页面，需要打开的子页面的名字
	defaultList: list,
	cacheList: list,
	pageTab: null,
};
const mutations = {
	changeChildPage (state,payload){
		state.hasChildPage = payload;
	},
	changeNoCacheName (state,payload){
		if(payload === true){
			state.cacheList = []
		}else if(Object.prototype.toString.call(payload).slice(8,-1) === 'Array'){
			// payload为数组的情况下
			let tempObj = {}, tempArr2 = [];
			for(let i of payload){
				tempObj[i] = true
			}
			for(let i of state.defaultList){
				if(!tempObj[i]){
					tempArr2.push(i)
				}
			}
			state.cacheList = tempArr2
		}else{
			state.cacheList = state.defaultList.filter((v)=>{
				return v !== payload;
			})
		}
		state.noCacheName = payload;
	},
	changeForceChangePage (state,payload){
		state.forceChangePage = payload;
	},
	changePageStatus (state,payload){
		state.pageStatus = payload;
	},
}
export default {
	state,mutations
}
