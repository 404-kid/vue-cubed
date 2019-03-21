<template>
  <div>
    <h1>this is the other page</h1>
    <VueScene class="super"/>
    <Cube color="rgba(200,0,200)" :rotation="{x:0, y:1, z:0}" :cube="box"/>
    <Cube color="rgba(0,200,200)" :size="{w:10, h:3, d:3}" :cube="box2"/>
    <!-- <Sphere color="rgba(200,0,0)" :size="{w:3, h:3, d:3}" :sphere="ball" :position="{x:0, y:5, z:0}"/> -->
  </div>
</template>
<script>
import Cube from "../geometry/Cube.vue"
import Sphere from "../geometry/Sphere.vue"

export default {
  name: 'about',
  components: {
    Cube,
    Sphere
  },
  data() {
    return {
      box: {},
      box2: {},
      ball: {},
    }
  }, 
    mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$camera.position.set(1,1,25)
      this.animate()
    },
      animate(){
      this.box.val.rotation.y += 0.01
      this.box2.val.rotation.x += 0.01
      requestAnimationFrame( this.animate )
      this.$render()
    }
  }
}


</script>
<style scoped>
.super{
  height: 30rem;
  width: 35rem;
}
</style>

