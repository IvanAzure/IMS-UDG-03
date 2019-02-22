const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
// sets renderer background color
renderer.setClearColor("#222222")
document.body.appendChild( renderer.domElement )
camera.position.z = 5

// resize canvas on resize window

window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

var geometry = new THREE.BoxGeometry( 1, 1, 1)
var ringgeometry = new THREE.RingBufferGeometry( 1, 4, 32 );
var ringgeometry2 = new THREE.RingBufferGeometry(1, 3, 32);
var ringgeometry3 = new THREE.RingBufferGeometry(1, 2, 32);
var material = new THREE.MeshStandardMaterial( { color: 0xff0051, flatShading: true, metalness: 0, roughness: 1 })
var material2 = new THREE.MeshStandardMaterial( { color: 0x42a7f4, flatShading: true, metalness: 0, roughness: 1 })
var material3 = new THREE.MeshStandardMaterial( { color: 0x41f447, flatShading: true, metalness: 0, roughness: 1 })

var ring = new THREE.Mesh( ringgeometry, material );
var ring2 = new THREE.Mesh( ringgeometry2, material2);
var ring3 = new THREE.Mesh( ringgeometry3, material3);
var cube = new THREE.Mesh ( geometry, material )
var cube2 = new THREE.Mesh ( geometry, material2 )
var cube3 = new THREE.Mesh ( geometry, material3 )
scene.add( ring );
scene.add( ring2 );
scene.add( ring3 );
scene.add( cube )
scene.add( cube2 )
scene.add( cube3 )

// ambient light

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )

// point light

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

function animate() {

	requestAnimationFrame( animate )
	cube.rotation.x += 0.03;
	cube.rotation.y += 0.03;
  cube2.rotation.x += 0.04;
  cube2.rotation.y += 0.04;
  cube3.rotation.x += 0.05;
  cube3.rotation.y += 0.05;
	renderer.render( scene, camera )

}
animate()
