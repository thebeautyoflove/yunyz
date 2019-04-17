<template>
	<div class="wrapper">
		<div class="mod-body">
				<transition
					:enter-active-class="`animated ${enterClass}`"
					:leave-active-class="`animated ${leaveClass}`"
				>
					<keep-alive :include="$store.state.global.cacheList">
						<router-view></router-view>
					</keep-alive>
				</transition>
		</div>
		<div class="mod-footer" v-show="isTab">
			<router-link :to="{name: 'home'}" tag="div" :class="{active:currentRouteName === 'home'}">首页</router-link>
			<router-link :to="{name: 'list'}" tag="div" :class="{active:currentRouteName === 'list'}">列表</router-link>
			<router-link :to="{name: 'zone'}" tag="div" :class="{active:currentRouteName === 'zone'}">我的</router-link>
		</div>
	</div>
</template>
<script>
export default {
	data (){
		return {
			enterClass: 'slideInLeft',
			leaveClass: 'slideOutRight',
			tabMenu: ['home','zone']
		}
	},
	methods: {

	},
	computed: {
		isTab (){
			return this.$route.meta.isTab
		},
		currentRouteName (){
			return this.$route.name
		}
	},
	watch: {
		'$route' (newval,oldval){
			if(this.tabMenu.includes(newval.name)){
				this.$store.commit('changeNoCacheName',true);
			}
			if(window.isBack){
				this.enterClass = 'slideInLeft';
				this.leaveClass = 'slideOutRight';
			}else{
				this.enterClass = 'slideInRight';
				this.leaveClass = 'slideOutLeft';
			}
		}
	}
}
</script>
<style lang="less" scoped>
	.wrapper,.mod-body{
		height: 100%;
		.container.animated{
			position: fixed;
			top: 0;
			bottom: 35px;
			width: 100%;
			height: auto;
			animation-duration: 500ms;
		}
	}
	.mod-body{padding-bottom: 35px;}
	.mod-footer{
		position: fixed;
		background: #fff;
		bottom: 0;
		left: 0;
		width: 100%;
		line-height: 35px;
		display: flex;
		text-align: center;
		>div{
			flex: 1;
			&:active{color: #4096ee;}
			&.active{color: #4096ee;}
		}
	}
</style>