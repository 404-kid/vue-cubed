import * as Three from './three.module.js'

export default {
    install(vue, opt){
      vue.prototype.$THREE = Three
      vue.prototype.$scene = new Three.Scene()
      vue.prototype.$renderer = new Three.WebGLRenderer({ antialias: true})
      vue.prototype.$camera = new Three.PerspectiveCamera()

      vue.component('VueScene', {
        render(createElement) {
          return createElement('div',
          {
            attrs: {
              id: 'ctx'
            },
          }
          )
        },
        data () {
          return {
            canvas: null
          }
        },
        mounted() {
          this.createRenderer()
        },
        methods: {
          createRenderer() {
            this.canvas = document.getElementById('ctx')

            this.canvas.appendChild( this.$renderer.domElement )
          },
        }
      })
    }
}
