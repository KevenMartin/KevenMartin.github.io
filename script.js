window.addEventListener("scroll", function (e) {
	const target = this.document.querySelectorAll(".scroll");

	let scrolled = window.pageYOffset;
	let index = 0,
		length = target.length;
	for (index; index < length; index++) {
		let pos = window.pageYOffset * target[index].dataset.rate;

		if (target[index].dataset.direction === "vertical") {
			target[index].style.transform = "translate3d(0px, " + pos + "px, 0px )";
		} else {
			let posX = window.pageYOffset * target[index].dataset.ratex;
			let posY = window.pageYOffset * target[index].dataset.ratey;

			target[index].style.transform = "translate3d(" + posX + "px, " + posY + "px, 0px )";
		}
	}
});

let myDiv = document.getElementById("shape");
function isTouchDevice() {
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch (e) {
		return false;
	}
}

const move = (e) => {
	try {
		var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
		var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
	} catch (e) {}
	myDiv.style.left = x - 50 + "px";
	myDiv.style.top = y - 50 + "px";
};
//For mouse
document.addEventListener("mousemove", (e) => {
	move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
	move(e);
});

/* const rose = document.querySelectorAll("#rose path");

console.log(rose);

for (let i = 0; i < rose.length; i++) {
	console.log(rose[i].getTotalLength());
}
 */

const competences = document.querySelector("#competences");
const rose = document.querySelector("#rose");
const rosePathElements = rose.querySelectorAll("path");
const pathElements = competences.querySelectorAll("path");

// Ajoute la classe 'start' à l'élément #competences au chargement de la page
competences.classList.add("start");

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.9, // Pourcentage de l'élément qui doit être visible pour déclencher l'animation
};

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			competences.classList.add("animate"); // Ajoute une classe CSS pour déclencher l'animation
			observer.unobserve(entry.target); // Arrête l'observation une fois que l'élément a été animé
		}
	});
}, options);

rosePathElements.forEach((path) => {
	path.style.strokeDasharray = path.getTotalLength();
	path.style.strokeDashoffset = path.getTotalLength();
});

const roseObserver = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			rose.classList.add("animate");
			observer.unobserve(entry.target);
		}
	});
}, options);

roseObserver.observe(rose);

observer.observe(competences);
observer.observe(rose);
