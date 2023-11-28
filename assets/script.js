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
function dotPrev(value){
	const dotsPrev = document.querySelector(`.dots :nth-child(${value})`);
	dotsPrev.classList.remove("dot_selected");
}

/**
 * ajout de la classe
 * @param {number} value 
 */
function dotNext(value){
	const dotsNext = document.querySelector(`.dots :nth-child(${value})`);
	dotsNext.classList.add("dot_selected");
}

// fonctions changement image

function image(value){
	const nomImage = slides[value].image
	baliseImage.src = `./assets/images/slideshow/${nomImage}`;
}

// fonctions changement texte

function texte(value){
	const textImage = slides[value].tagLine
	baliseTxt.innerHTML = textImage;
}

// Ecoute fleche de droite
// vers la droite.

let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener('click', function(){
	
	if(numImg < slides.length-1){
		numImg++
		dotPrev(numImg);
		dotNext(numImg + 1);
		image(numImg)
		texte(numImg)

	}else if(numImg == slides.length-1){
		numImg = 0
		dotPrev(slides.length);
		dotNext(1);
		image(numImg)
		texte(numImg)

	}
});

// Ecoute fleche de gauche
// vers la gauche.
let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener('click', function(){
	if(numImg > 0){
		numImg--
		dotPrev(numImg + 2);
		dotNext(numImg + 1);
		image(numImg)
		texte(numImg)

	}else if(numImg == 0){
		numImg = slides.length -1;
		dotPrev(1);
		dotNext(slides.length);
		image(numImg)
		texte(numImg)

	}
});