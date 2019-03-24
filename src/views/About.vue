<template>
  <div>
    <h1>this is the other page</h1>
    <VueScene v-on:click.native="click" class="super"/>
    <Cube color="rgba(200,0,200)" :rotation="{x:0, y:1, z:0}" :cube="box"/>
    <!-- <Cube color="rgba(0,200,200)" :size="{w:10, h:3, d:3}" :cube="box2"/>
    <Sphere color="rgba(200,200,0)" :sphere="ball" :radius="2" :segments="{w:100, h:100}" :position="{x:0, y:5, z:0}"/>
    <Cylinder color="rgba(200,0,0)" :radius="{top:1,bot:1}" :height="5" :segments="20" :position="{x:0, y:3, z:0}"/>
    <Cone color="rgba(200,0,0)" :cone="pyramid" :radius="4.5" :height="5" :segments="3" :position="{x:0, y:8, z:0}"/>
    <Torus :position="{x:0, y:-7, z:0}" :rotation="{x:.1, y:0, z:0}"/> -->
  </div>
</template>
<script>
import Cube from "../geometry/Cube.vue"
import Sphere from "../geometry/Sphere.vue"
import Cylinder from "../geometry/Cylinder.vue"
import Cone from "../geometry/Cone.vue"
import Torus from "../geometry/Torus.vue"

export default {
  name: 'about',
  components: {
    Cube,
    Sphere,
    Cylinder,
    Cone,
    Torus
  },
  data() {
    return {
      box: {},
      box2: {},
      ball: {},
      pyramid: {},
      doughnut: {},
      raycaster: {},
      mouse: {}
    }
  }, 
    mounted() {
    this.init()
  },
  methods: {
    click(e) {
      this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
      
    },
    init() {
      this.raycaster = new this.$THREE.Raycaster()
      this.mouse = new this.$THREE.Vector2()

      this.$camera.position.set(1,1,25)
      this.animate()
    },
      animate(){
      this.raycaster.setFromCamera( this.mouse, this.$camera );

	    // calculate objects intersecting the picking ray
	    var intersects = this.raycaster.intersectObjects( this.$scene.children );

	    for ( var i = 0; i < intersects.length; i++ ) {
        console.log("test")
		    intersects[ i ].object.material.color.set( 0xff0000 );
      }
      
      this.box.val.rotation.y += 0.01
      // this.pyramid.val.rotation.y -= 0.01
      // this.box2.val.rotation.x += 0.01
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

