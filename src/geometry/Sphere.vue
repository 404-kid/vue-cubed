<template >
</template>

<script>
export default {
  name: "sphere",
  props: {
    color: {
      type: String,
      default: "rgba(250,250,250,1)"
    },
    radius: {
      type: Number,
      default: 5
    },
    segments:{
      type: Object,
      default() {
        return{
          w: 16,
          h: 16
        }
      }
    },
    position: {
      type: Object,
      default() {
        return{
          x: 0,
          y: 0,
          z: 0
        }
      }
    },
    sphere: {
      type: Object,
      default() {
        return{ 
          val: {}
        }
      }
    },
    rotation: {
      type: Object,
      default() {
        return{
          x: 0,
          y: 0,
          z: 0
        }
      }
    }
  },
    data() {
    return {
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let geometry = new this.$THREE.SphereGeometry( this.radius, this.segments.w, this.segments.h )
      let material = new this.$THREE.MeshPhysicalMaterial( {color: this.color, emissive:this.color, reflectivity: .5, metalness: .5} )
      this.sphere.val = new this.$THREE.Mesh( geometry, material )
      this.sphere.val.rotation.x += this.rotation.x
      this.sphere.val.rotation.y += this.rotation.y
      this.sphere.val.rotation.z += this.rotation.z
      this.sphere.val.position.x += this.position.x
      this.sphere.val.position.y += this.position.y
      this.sphere.val.position.z += this.position.z
      this.$scene.add( this.sphere.val )
    },
  }

}
</script>
