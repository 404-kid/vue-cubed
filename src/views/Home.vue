<template>
  <div>
    <h1>Welcome to the Vue-cubed example</h1>
    <VueScene class="mega"/>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      box: {},
      light: {}
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$renderer.setClearColor("rgba(200,0,0,1)")
      let area = new this.$THREE.CubeGeometry(5,5,5)
      let boxMat = new this.$THREE.MeshPhysicalMaterial({color: 0x800080, emissive:"rgba(200,0,200,1)", reflectivity: 0, metalness: .5})
      this.box = new this.$THREE.Mesh(area, boxMat )
      this.light = new this.$THREE.PointLight(0xffffff, .7)
      this.$scene.add(this.box)
      this.$scene.add(this.light)
      this.$camera.position.set(1,1,25)
      this.animate ()
    },
    animate(){
      this.box.rotation.y += 0.01
      requestAnimationFrame( this.animate )
      this.$render()
    }
  }
}
</script>
<style >
.mega{
  height: 70rem;
  width: 100rem;
}

</style>
