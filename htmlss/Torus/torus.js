const scene = new THREE.Scene()


const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.torusBasicMaterial( { color: '#ff0000' } );
const torus = new THREE.torus( geometry, material );

scene.add(torus);

const sizes= {
	width:800, 
	height:600
}

//camera
const camera = new THREE.PerspectiveCamera(30, sizes.width / sizes.height );   //deg, ratio of width and height ,
camera.position.z = 6
camera.position.y = .1
camera.position.x = .8
scene.add(camera);


//renderer
const canvas = document.querySelector('.torus');
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
	canvas:canvas,
})

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera)
