/* let text = ["Bonjour", "Hi", "kwei", "Hola", "Guten Tag", "ni hao", "Salam", "privet", "konnichiwa"];
let counter = 1;
let elem = document.getElementById("word");
let inst = setInterval(change, 1250);

function change() {
	elem.innerHTML = text[counter];
	counter++;
	if (counter >= text.length) {
		counter = 0;
		// clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
	}
}

document.body.addEventListener("mousemove", (e) => {
	gsap.to(".circle", {
		x: e.pageX,
		y: e.pageY,
	});
});

let myDiv = document.getElementById("shape");
//Detect touch device
function isTouchDevice() {
	try {
		//We try to create TouchEvent. It would fail for desktops and throw error
		document.createEvent("TouchEvent");
		return true;
	} catch (e) {
		return false;
	}
}

const move = (e) => {
	//Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
	try {
		//PageX and PageY return the position of client's cursor from top left of screen
		var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
		var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
	} catch (e) {}
	//set left and top of div based on mouse position
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
 */

