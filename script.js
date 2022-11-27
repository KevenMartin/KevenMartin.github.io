let text = ["Bonjour", "Hi", "kwei", "Hola", "Guten Tag", "ni hao", "Salam", "privet", "konnichiwa"];
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