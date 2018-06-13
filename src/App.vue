<style lang="less">
  @import "./main.less";
</style>
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
<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  background: #f0f0f0;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
