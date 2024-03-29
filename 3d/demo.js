// initializam renderer webgl
var renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xCCCCCC, 1)

// adaugam canvas-ul renderer-ului in body ca element nou
document.body.appendChild(renderer.domElement)

// definim o scena
var scene = new THREE.Scene()

// definim camera cu unghiu de cuprindere si aspect ratio
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight)
// setam distanta camerei fata de obiecte
camera.position.z = 70
// camera.position.x = 20
// camera.position.y = 0

// adaugam camera la scena
scene.add(camera)

// cream un cub
// latime , inaltime, adancime
var qubeForm = new THREE.BoxGeometry(10, 10, 10)
// cream un material simplu dintr-o culoare
var simpleMaterial = new THREE.MeshBasicMaterial({color: 0x214f6d})
// imbracam cubul in material
var qube = new THREE.Mesh(qubeForm, simpleMaterial)
// punem cubul in scena
scene.add(qube)
// rotim cubul
qube.rotation.set(0.5, 0.5, 0)
// dam mai la stanga cubul
qube.position.x = -30

// cream un torus (un fel de piulita)
// raza, grosimea, numarul de segmente radiale, segmente tubulare
var torusFrom = new THREE.TorusGeometry(7, 2, 6, 12)
var phongMaterial = new THREE.MeshPhongMaterial({color: 0xb66139})
var torus = new THREE.Mesh(torusFrom, phongMaterial)
torus.rotation.set(0.7, 0.3, 0)
scene.add(torus)

// cream un dodecaedru
var ballFor = new THREE.DodecahedronGeometry(8)
var lambertMaterial = new THREE.MeshLambertMaterial({color: 0xe4de32})
var ball = new THREE.Mesh(ballFor, lambertMaterial)
scene.add(ball)
ball.position.x = 30

// cream o lumina dura ca un punct de lumina
// exista si alte tipuri de lumina ex: Ambient, Hemisphere
var light = new THREE.PointLight(0xffffff)
// pozitionam lumina in spatiu
light.position.set(-10, 50, 50)
// adaugam lumina in scena
scene.add(light)



// definim functia de randare a scenei
function render() {
    // inregistreaza functia noastra sa fie apelata pentru fiecare nou frame
    // functia se apeleaza de 60 de ori pe secunda (60fps)
    requestAnimationFrame(render)
    renderer.render(scene, camera)
    qube.rotation.y += 0.01
    ball.rotation.x += 0.01
    torus.rotation.y += 0.02
    // x += 0.1
    // torus.scale.y = Math.abs(Math.sin(0.1))
    // ball.position.y = 4 * Math.sin(2 * 0.1)
}
render()

