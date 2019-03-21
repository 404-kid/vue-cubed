<template >
</template>

<script>
export default {
  name: "cube",
  props: {
    color: {
      type: String,
      default: "rgba(250,250,250,1)"
    },
    size: {
      type: Object,
      default() {
        return{
          w: 5,
          h: 5,
          d: 5
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
    cube: {
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
      let area = new this.$THREE.CubeGeometry(this.size.w,this.size.h,this.size.d)
      let cubeMat = new this.$THREE.MeshPhysicalMaterial({color: this.color, emissive:this.color, reflectivity: .5, metalness: .5})
      this.cube.val = new this.$THREE.Mesh(area, cubeMat)
      this.cube.val.rotation.x += this.rotation.x
      this.cube.val.rotation.y += this.rotation.y
      this.cube.val.rotation.z += this.rotation.z
      this.cube.val.position.x += this.position.x
      this.cube.val.position.y += this.position.y
      this.cube.val.position.z += this.position.z
      this.$scene.add(this.cube.val)
    },
  }

}
</script>
