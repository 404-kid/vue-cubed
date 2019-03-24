<template >
</template>

<script>
export default {
  name: "cylinder",
  props: {
    color: {
      type: String,
      default: "rgba(250,250,250,1)"
    },
    height: {
      type: Number,
      default: 10
    },
    radius: {
      type: Object,
      default() {
        return{
          top: 2,
          bot: 2
        }
      }
    },
    segments:{
      type: Number,
      default: 20
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
    cylinder: {
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
      let geometry = new this.$THREE.CylinderGeometry( this.radius.top, this.radius.bot, this.height, this.segments )
      let material = new this.$THREE.MeshPhysicalMaterial( {color: this.color, emissive:this.color, reflectivity: .5, metalness: .5} )
      this.cylinder.val = new this.$THREE.Mesh( geometry, material )
      this.cylinder.val.rotation.x += this.rotation.x
      this.cylinder.val.rotation.y += this.rotation.y
      this.cylinder.val.rotation.z += this.rotation.z
      this.cylinder.val.position.x += this.position.x
      this.cylinder.val.position.y += this.position.y
      this.cylinder.val.position.z += this.position.z
      this.$scene.add( this.cylinder.val )
    },
  }

}
</script>
