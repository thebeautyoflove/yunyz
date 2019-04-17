<template>
	<keep-alive :include="$store.state.global.cacheList">
		<router-view></router-view>
	</keep-alive>
</template>
<script>
export default {
	name: 'emptyLayout'
}
</script>