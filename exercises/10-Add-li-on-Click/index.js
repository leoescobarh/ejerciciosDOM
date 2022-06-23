let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let boton = document.getElementById("#superDuperButton")
	var elem = document.createElement('li');
	elem.appendChild(document.createTextNode('Forth element'));
	document.querySelector('ul').appendChild(elem)
});


