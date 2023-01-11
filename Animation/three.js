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

	blueStarShape = new THREE.Geometry();
	for (let i = 0; i < 6000; i++) {
		blueStar = new THREE.Vector3(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300);
		blueStar.velocity = 0;
		blueStar.acceleration = 0.005;
		blueStarShape.vertices.push(blueStar);
	}

	redStarShape = new THREE.Geometry();
	for (let i = 0; i < 3000; i++) {
		redStar = new THREE.Vector3(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300);
		redStar.velocity = 0;
		redStar.acceleration = 0.003;
		redStarShape.vertices.push(redStar);
	}

	yellowStarShape = new THREE.Geometry();
	for (let i = 0; i < 1000; i++) {
		yellowStar = new THREE.Vector3(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300);
		yellowStar.velocity = 0;
		yellowStar.acceleration = 0.001;
		yellowStarShape.vertices.push(yellowStar);
	}

	let blueSprite = new THREE.TextureLoader().load("./images/star.png");
	let blueStarDetails = new THREE.PointsMaterial({
		color: 0xbae7ff,
		size: 0.7,
		map: blueSprite,
	});

	let redSprite = new THREE.TextureLoader().load("./images/star.png");
	let redStarDetails = new THREE.PointsMaterial({
		color: 0xff8ac1,
		size: 0.5,
		map: redSprite,
	});

	let yellowSprite = new THREE.TextureLoader().load("./images/star.png");
	let yellowStarDetails = new THREE.PointsMaterial({
		color: 0xfff35d,
		size: 1,
		map: yellowSprite,
	});

	blueStars = new THREE.Points(blueStarShape, blueStarDetails);
	redStars = new THREE.Points(redStarShape, redStarDetails);
	yellowStars = new THREE.Points(yellowStarShape, yellowStarDetails);

	scene.add(blueStars);
	scene.add(redStars);
	scene.add(yellowStars);

	window.addEventListener("resize", onWindowResize, false);

	animateBlueStars();
	animateRedStars();
	animateYellowStars();
}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animateBlueStars() {
	blueStarShape.vertices.forEach((p) => {
		p.velocity += p.acceleration;
		p.y -= p.velocity;

		if (p.y < -200) {
			p.y = 200;
			p.velocity = 0;
		}
	});
	blueStarShape.verticesNeedUpdate = true;
	blueStars.rotation.y += 0.0;

	renderer.render(scene, camera);
	requestAnimationFrame(animateBlueStars);
}

function animateRedStars() {
	redStarShape.vertices.forEach((p) => {
		p.velocity += p.acceleration;
		p.y -= p.velocity;

		if (p.y < -200) {
			p.y = 200;
			p.velocity = 0;
		}
	});
	redStarShape.verticesNeedUpdate = true;
	redStars.rotation.y += 0.0;

	renderer.render(scene, camera);
	requestAnimationFrame(animateRedStars);
}

function animateYellowStars() {
	yellowStarShape.vertices.forEach((p) => {
		p.velocity += p.acceleration;
		p.y -= p.velocity;

		if (p.y < -200) {
			p.y = 200;
			p.velocity = 0;
		}
	});
	yellowStarShape.verticesNeedUpdate = true;
	yellowStars.rotation.y += 0.0;

	renderer.render(scene, camera);
	requestAnimationFrame(animateYellowStars);
}

init();
