$(document).ready(function() {
    let speedSlider = 100,
    spikesSlider = 1,
    processingSlider = 1;

let $canvas = $('#blob canvas'),
    canvas = $canvas[0],
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        context: canvas.getContext('webgl2'),
        antialias: true,
        alpha: true
    }),
    simplex = new SimplexNoise();

renderer.setSize($canvas.width(), 500);
renderer.setPixelRatio(window.devicePixelRatio || 1);

let scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, $canvas.width() / $canvas.height(), 0.1, 1000);

camera.position.z = 3.5;

let geometry = new THREE.SphereGeometry(.8, 128, 128);

//MeshPhongMaterial
let material = new THREE.MeshStandardMaterial({
    // color: 0x000000,
    // shininess: 100,
    wireframe: true,
    wireframeLinewidth: 1,
    transparent: true,
    opacity: 0.5
});

let lightTop = new THREE.DirectionalLight(0xFFFFFF, .7);
lightTop.position.set(0, 500, 200);
lightTop.castShadow = true;
scene.add(lightTop);

let lightBottom = new THREE.DirectionalLight(0xFFFFFF, .25);
lightBottom.position.set(0, -500, 400);
lightBottom.castShadow = true;
scene.add(lightBottom);

let ambientLight = new THREE.AmbientLight(0x798296);
scene.add(ambientLight);

let sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

let update = () => {

    let time = performance.now() * 0.00001 * speedSlider * Math.pow(processingSlider, 3),
        spikes = spikesSlider * processingSlider;

    for(let i = 0; i < sphere.geometry.vertices.length; i++) {
        let p = sphere.geometry.vertices[i];
        p.normalize().multiplyScalar(1 + 0.3 * simplex.noise3D(p.x * spikes, p.y * spikes, p.z * spikes + time));
    }

    sphere.geometry.computeVertexNormals();
    sphere.geometry.normalsNeedUpdate = true;
    sphere.geometry.verticesNeedUpdate = true;

}

function animate() {
    update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    //faire tourner le blob
    sphere.rotation.y += 0.0005;
}

requestAnimationFrame(animate);
});