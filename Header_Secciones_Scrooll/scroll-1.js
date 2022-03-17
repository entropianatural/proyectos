
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");

const seccion1 = document.querySelector(".seccion1");

const seccion2 = document.querySelector(".seccion2");

const seccion3 = document.querySelector(".seccion3");

const seccion4 = document.querySelector(".seccion4");

window.scroll(0,0)

const header = document.querySelector("header");

const fixed = document.querySelector(".fixed");


let header_coords = header.getBoundingClientRect();

let fixed_coords = fixed.getBoundingClientRect();

header.style.height = fixed_coords.height + "px"

// margin-top en la primera sección

seccion1.style.marginTop = "20px"


var testigo = 0

item1.addEventListener("click" , function(e) {

	let seccion1_coords = seccion1.getBoundingClientRect();

	console.log("##########")
	// console.log("seccion1_coords.top: " + seccion1_coords.top)
	console.log("offsetTop:" + seccion1.offsetTop)

	window.scroll(0,seccion1_coords.top-fixed_coords.height-20)


})


item2.addEventListener("click" , function(e) {

	let seccion2_coords = seccion2.getBoundingClientRect();

	console.log("##########")
	// console.log("seccion2_coords.top: " + seccion2_coords.top)
	console.log("offsetTop:" + seccion2.offsetTop)

	window.scroll(0,seccion2.offsetTop-fixed_coords.height-20)

})

item3.addEventListener("click" , function(e) {

	let seccion3_coords = seccion3.getBoundingClientRect();

	console.log("##########")
	// console.log("seccion3_coords.top: " + seccion3_coords.top)
	console.log("offsetTop:" + seccion3.offsetTop)

	window.scroll(0,seccion3.offsetTop-fixed_coords.height-20)

})

item4.addEventListener("click" , function(e) {

	let seccion4_coords = seccion4.getBoundingClientRect();

	console.log("##########")
	// console.log("seccion4_coords.top: " + seccion4_coords.top)
	console.log("offsetTop:" + seccion4.offsetTop)

	window.scroll(0,seccion4.offsetTop-fixed_coords.height-20)


})