<template >
</template>

<script>
export default {
  name: "cone",
  props: {
    color: {
      type: String,
      default: "rgba(250,250,250,1)"
    },
    height: {
      type: Number,
      default: 5
    },
    radius: {
      type: Number,
      default: 3
    },
    segments:{
      type: Number,
      default: 30
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
    cone: {
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
      let geometry = new this.$THREE.ConeBufferGeometry( this.radius, this.height, this.segments )
      let material = new this.$THREE.MeshPhysicalMaterial( {color: this.color, emissive:this.color, reflectivity: .5, metalness: .5} )
      this.cone.val = new this.$THREE.Mesh( geometry, material )
      this.cone.val.rotation.x += this.rotation.x
      this.cone.val.rotation.y += this.rotation.y
      this.cone.val.rotation.z += this.rotation.z
      this.cone.val.position.x += this.position.x
      this.cone.val.position.y += this.position.y
      this.cone.val.position.z += this.position.z
      this.$scene.add( this.cone.val )
    },
  }

}
</script>
