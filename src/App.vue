<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
	div{box-sizing: border-box;}
	body{margin: 0;}
	html,body,#app{height: 100%;}
	.container{overflow-y: auto;-webkit-overflow-scrolling:touch;}
</style>

