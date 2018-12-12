<template>
  <div>
    <h1>Welcome to the Vue-cubed example</h1>
    <VueScene class="super"/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  mounted() {
    this.$renderer.setClearColor("rgba(200,0,0,1)")
    this.$renderer.render(this.$scene, this.$camera)
  }
}
</script>
<style >

</style>
