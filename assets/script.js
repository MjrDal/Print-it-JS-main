const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// const dot = document.querySelector('.dot:nth-child(' + numImg + ')');
// .dot:nth-child(3)

// création des dots

const dots = document.querySelector(".dots");

for(let i =0; i<slides.length; i++){
	const divDot = document.createElement("div");
	divDot.setAttribute("class", "dot");
	if(i == 0){
		divDot.setAttribute("class", "dot dot_selected");
	}
	dots.appendChild(divDot);

}

//  Changement des images.
let baliseImage = document.querySelector(".banner-img");

//  Changement des textes.
let baliseTxt = document.querySelector("#texteImage");

//  Variable qui correspond au numéro de l'image.
let numImg = 0

// fonctions changement des points

/**
 * supression de la classe
 * @param {number} value 
 */
function removeLastDot(value){
	const dotsPrev = document.querySelector(`.dots :nth-child(${value})`);
	dotsPrev.classList.remove("dot_selected");
}

/**
 * ajout de la classe
 * @param {number} value 
 */
function selectDot(value){
	const dotsNext = document.querySelector(`.dots :nth-child(${value})`);
	dotsNext.classList.add("dot_selected");
}

// fonctions changement image

function updateImage(value){
	const nameImage = slides[value].image
	baliseImage.src = `./assets/images/slideshow/${nameImage}`;
}

// fonctions changement texte

function updateText(value){
	const textImage = slides[value].tagLine
	baliseTxt.innerHTML = textImage;
}

// Ecoute fleche de droite
// vers la droite.

let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener('click', function(){
	
	if(numImg < slides.length-1){
		numImg++
		removeLastDot(numImg);
		selectDot(numImg + 1);
	}else if(numImg == slides.length-1){
		numImg = 0
		removeLastDot(slides.length);
		selectDot(1);
	}
	updateImage(numImg);
	updateText(numImg);
});

// Ecoute fleche de gauche
// vers la gauche.
let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener('click', function(){
	if(numImg > 0){
		numImg--
		removeLastDot(numImg + 2);
		selectDot(numImg + 1);
	}else if(numImg == 0){
		numImg = slides.length -1;
		removeLastDot(1);
		selectDot(slides.length);
	}
	updateImage(numImg);
	updateText(numImg);

});