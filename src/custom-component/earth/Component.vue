<template>
  <div class="demoMain" ref="dom"></div>
</template>

<script>
 /***
  * three.js知识
  * 参考文档：
  *   https://juejin.cn/post/6940542710709223432#heading-1
  *   https://threejs.org/examples/?q=earth#webgl_animation_keyframes
  *   https://juejin.cn/post/6992445067344478239
  * 知识点：
  *   场景（Scene）：THREE.Scene对象是所有不同对象的容器，但这个对象本身没有很复杂的操作，我们通常在程序最开始的时候实例化一个场景，然后将照相机、物体、光源添加到场景中。
  *   照相机（Camera）：透视投影照相机和正交投影照相机。
  *   物体： 
  *     1 three直接提供各种多边形，直接设置宽高大小即可，几何形状（Geometry）和 材质（Material）
  *     2 创建一个物体需要两个参数：几何形状（Geometry）和 材质（Material）。
  *     3 通俗的讲，几何形状决定物体的形状，材质决定物体表面的颜色、纹理贴图、对光照的反应等等。
  * 
  */
import { defineComponent, onMounted, ref, computed } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import OnEvent from '../common/OnEvent'
import earthImg from './earth.png'
import normalImg from './normal.png'
import specularImg from './specular.png'

export default {
    extends: OnEvent,
    props: {
        request: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            dom: null,
        }
    },
    computed: {
    },
    mounted() {
        setTimeout(() => {
            this.initThree(this.$refs.dom);
        }, 1000);
    },
    methods: {
        initThree(instance) {
            var hetght = instance.clientHeight;
            var width = instance.clientWidth;
            // 场景：创建场景对象Scene
            var scene = new THREE.Scene();
            // 照相机：创建相机对象
            var camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            1,
            1000
            );

            // 渲染器 renderer
            var renderer = new THREE.WebGLRenderer();
            renderer.setSize(width, hetght);
            instance.append(renderer.domElement);
            camera.position.x = 0
            camera.position.y = 0
            camera.position.z = 2.5
            
            renderer.render(scene, camera);
            renderer.setClearColor(0xEEEEEE, 0);
            // 物体：球体网格模型
            var sphereGeometry = new THREE.SphereGeometry(1, 100, 100);
            //材质对象Material
            const loader = new THREE.TextureLoader()
            // 材质不同 MeshBasicMaterial MeshPhongMaterial
            var cubeMaterial = new THREE.MeshBasicMaterial({
            map: loader.load(earthImg),
            specularMap: loader.load(normalImg),  //高光纹理，指定物体表面中哪部分比较闪亮，哪部分相对暗淡
            normalMap:  loader.load(specularImg),   //法向纹理，创建更加细致的凹凸和褶皱
            // normalScale: new THREE.Vector2(3, 3) 
            });
            const directionLight = new THREE.DirectionalLight(0xffffff)  //创建平行光，参数是光的颜色
            directionLight.position.set(10,10,10)                        //定义平行光方向
            scene.add(directionLight)                                    //将平行光添加到场景中
            var cube = new THREE.Mesh(sphereGeometry, cubeMaterial);
            scene.add(cube);

            // 光线位置处理
            var hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x333333, 2);
            hemisphereLight.position.set(0, 0, 100);
            cube.add(hemisphereLight);
            
            // setInterval(() => {
            //   if (camera.position.z <= 3) return
            //   let num = 30
            //   // if (camera.position.z <= 200) num = 50
            //   if (camera.position.z <= 20) num = 0.1
            //     camera.position.z -= num;
            //     cube.rotation.y += 0.05;
            //   }, 10);

            // 旋转
            var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.y += 0.001;
            renderer.render(scene, camera);
            };
            
            //鼠标操作旋转、缩放
            new OrbitControls(camera, renderer.domElement);
            animate();
        }
    },
}
</script>

<style lang="scss" scoped>
  // .demoMain {
  //   width: 100%;
  //   height:100%;
  //   background: transparent;
  //   animation: animate1 1s infinite;
  //   animation-iteration-count: 1;
  //   animation-fill-mode:forwards;
  // }
  // @keyframes animate1 {
  //   0% {
  //     width: 0%;
  //     height: 0%;
  //     background: transparent;
  //   }
  //   100% {
  //     width: 100%;
  //     height:100%;
  //   }
  // }
</style>
