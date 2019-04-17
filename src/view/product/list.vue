<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				这里是列表页
				<ul class="list-mod">
					<li v-for="(l,$index) in list" :key="l.key" @click="toDetail($index)">
						<p>这是第{{$index+1}}条信息</p>
					</li>
				</ul>
				<div class="text-center">
					<button class="btn btn-default" @click="getList">加载更多</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'list',
	beforeRouteEnter (to,from,next){
		next((vm)=>{
			vm.$store.commit('changeNoCacheName','');
		})
	},
	activated (){
		let history = window.appHistory[window.appHistory.length-1];
		let container = document.querySelectorAll('.container')[0] || {};
		if(history.meta.top){
			container.scrollTop = history.meta.top;
		}
	},
	data (){
		return {
			list: []
		}
	},
	created (){
		this.getList();
	},
	methods: {
		toDetail ($index){
			this.$router.push({
				name: 'detail',
				query: {
					id: $index
				}
			})
		},
		getList (){
			setTimeout(()=>{
				this.list = this.list.concat(new Array(20).join(' ').split(' ').map((v,index)=>{
					v = {
						key: Math.random()
					};
					// v.title = `这是第${index+1}条信息`;
					return v;
				}))
			},200)
		}
	}
}
</script>
<style lang="less" scoped>
	.container{
		height: 100%;background: #4096ee;
		.text-center{margin-bottom: 20px;}
	}
</style>