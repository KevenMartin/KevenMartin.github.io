
let scene, camera, renderer, stars, starGeo;

function init() {
  //Create Scene object
  scene = new THREE.Scene();

  //setup camera facing upward
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1;
  camera.rotation.x = Math.PI / 2;

  //setup renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  starGeo = new THREE.Geometry();
  for (let i = 0; i < 6000; i++) {
    star = new THREE.Vector3(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300);
    star.velocity = 0;
    star.acceleration = 0.005;
    starGeo.vertices.push(star);
  }

  starGeoGreen = new THREE.Geometry();
  for (let i = 0; i < 3000; i++) {
    star = new THREE.Vector3(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300);
    star.velocity = 0;
    star.acceleration = 0.005;
    starGeoGreen.vertices.push(star);
  }

  let sprite = new THREE.TextureLoader().load("./images/star.png");
  let starMaterial = new THREE.PointsMaterial({
    color: 0xbae7ff,
    size: 0.7,
    map: sprite,
  });

  let greenSprite = new THREE.TextureLoader().load("./images/star.png");
  let starMaterial1 = new THREE.PointsMaterial({
    color: 0xff8ac1,
    size: 0.1,
    map: greenSprite,
  });

  stars = new THREE.Points(starGeo, starMaterial);
  stars2 = new THREE.Points(starGeoGreen, starMaterial1);

  scene.add(stars);
  scene.add(stars2);

  window.addEventListener("resize", onWindowResize, false);

  animate();
  animateGreen();
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  starGeo.vertices.forEach((p) => {
    p.velocity += p.acceleration;
    p.y -= p.velocity;

    if (p.y < -200) {
      p.y = 200;
      p.velocity = 0;
    }
  });
  starGeo.verticesNeedUpdate = true;
  stars.rotation.y += 0.0;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function animateGreen() {
  starGeoGreen.vertices.forEach((p) => {
    p.velocity += p.acceleration;
    p.y -= p.velocity;

    if (p.y < -200) {
      p.y = 200;
      p.velocity = 0;
    }
  });
  starGeoGreen.verticesNeedUpdate = true;
  stars.rotation.y += 0.0;

  renderer.render(scene, camera);
  requestAnimationFrame(animateGreen);
}
init();
