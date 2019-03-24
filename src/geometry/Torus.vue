<template >
</template>

<script>
export default {
  name: "torus",
  props: {
    color: {
      type: String,
      default: "rgba(250,250,250,1)"
    },
    radius: {
      type: Number,
      default: 3
    },
    tube: {
      type: Number,
      default: 1
    },
    segments:{
      type: Object,
      default() {
        return{
          rad: 18,
          tub: 20
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
    torus: {
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
      let geometry = new this.$THREE.TorusGeometry( this.radius, this.tube, this.segments.rad, this.segments.tub )
      let material = new this.$THREE.MeshPhysicalMaterial( {color: this.color, emissive:this.color, reflectivity: .5, metalness: .5} )
      this.torus.val = new this.$THREE.Mesh( geometry, material )
      this.torus.val.rotation.x += this.rotation.x
      this.torus.val.rotation.y += this.rotation.y
      this.torus.val.rotation.z += this.rotation.z
      this.torus.val.position.x += this.position.x
      this.torus.val.position.y += this.position.y
      this.torus.val.position.z += this.position.z
      this.$scene.add( this.torus.val )
    },
  }

}
</script>
