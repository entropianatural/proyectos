
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");

const seccion1 = document.querySelector(".seccion1");

const seccion2 = document.querySelector(".seccion2");

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

	console.log("seccion1_coords.top: " + seccion1_coords.top)

	if(testigo){
		testigo = 1
	}

	console.log("seccion1_coords.top: " + seccion1_coords.top)
	console.log("testigo_item1: " + testigo_item1)

	window.scroll(0,seccion1_coords.top-fixed_coords.height-20)

	console.log()

})


item2.addEventListener("click" , function(e) {

	let seccion2_coords = seccion2.getBoundingClientRect();

	console.log("##########")
	console.log("seccion2_coords.top: " + seccion2_coords.top)
	console.log("testigo_item2: " + testigo_item1)

	if(seccion2_coords.top != testigo_item1){
			testigo_item1 = seccion2_coords.top
	}

	console.log("seccion2_coords.top: " + seccion2_coords.top)
	console.log("testigo_item2: " + testigo_item1)

	window.scroll(0,seccion2_coords.top-fixed_coords.height-20)

})