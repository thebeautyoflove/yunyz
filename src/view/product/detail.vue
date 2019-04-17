<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				这里是详情{{id}}
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data (){
		return {
			id: this.$route.query.id
		}
	},
	methods: {
		
	}
}
</script>
<style lang="less" scoped>
	
</style>