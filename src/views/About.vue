<template>
  <div class="about">
    <h1>this is the other page</h1>
    <VueScene class="super"/>
  </div>
</template>
<script>

export default {
  name: 'about',
  mounted() {
    this.$renderer.setClearColor("rgba(0,0,200,1)")
    this.$renderer.render(this.$scene, this.$camera)
  }
}


</script>
