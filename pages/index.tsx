import { useEffect } from "react"
import { 
    Scene,
    WebGL1Renderer,
    PerspectiveCamera,
    Mesh,
    MeshBasicMaterial,
    BoxGeometry
 } from "three"


function HomePage() {
    useEffect(() => {
        const scene = new Scene()
        const renderer = new WebGL1Renderer({
            antialias: true,
            canvas: document.getElementById("bg")
        })
        const camara = new PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        
        //Mover camara
        camara.position.z = 6


        //Crear cubo
        const geometria = new BoxGeometry(1,1,1)
        const material = new MeshBasicMaterial({ color: 0xffffff })
        const cubo = new Mesh(geometria, material)
        console.log(0xffffff)
        scene.add(cubo)
        
        renderer.setSize(window.innerWidth, window.innerHeight)

        function animate() {
            cubo.rotation.x += 0.01
            cubo.rotation.y += 0.01

            renderer.render(scene, camara)
            requestAnimationFrame(animate)
        }
        animate()
    }, [])

    return <canvas id="bg" />
}
  
export default HomePage