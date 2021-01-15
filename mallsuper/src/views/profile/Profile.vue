<template>
  <div id="app">
      <h2>我的</h2>
      <p>欢迎你 {{userId}} 老铁</p>
  </div>

</template>

<script type="text/javascript">
export default {
  name: "app",
  data() {
    return {
      userId: this.$route.params.userId
    }
  },
  components: {
  }
}
</script>

<style scoped>

</style>
