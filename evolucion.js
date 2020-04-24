var slideIndex=1; //tendremos una variable slideIndex con el valor de 1

mostrarSlides(slideIndex);



function mostrarSlides(n){ //funcion con el nombre mostrarSlides

	var i;
	var slides = document.getElementsByClassName("miSlider"); //mi variable slides tendra
	//*los elementos de la clase con nombre miSlider
	var puntitoS = document.getElementsByClassName("puntito"); //mi variable puntitoS 
	//*tendra los elementos de la clase con nombre puntito

	if (n>slides.length) {slideIndex=1;}//si n es menor slides mostrara la numero de 
	//*posicion 0
	if (n<1) {slideIndex=slides.length;} //si n es mayor a 1 mostrara de posicion 1
	for (i = 0; i < slides.length; i++) { //i tiene valor a 0, si este es mayor a los
		//* slides ,aumentara 1
		slides[i].style.display="none";
	}
	for (i = 0; i < puntitoS.length; i++) { // i es equivalente a 0, si este i es menos 
		//* los puntitoS aunmentara 1
        puntitoS[i].className= puntitoS[i].className.replace(" activo", "");
	}
	slides[slideIndex-1].style.display="block";
	puntitoS[slideIndex-1].className+=" activo";
}
//en resumen este codigo hace que al dar clip a las flachas cambien de imagen 
//* y que al dar clip a un punto este tambien cambie de imagen
function plusSlides(n){

	mostrarSlides(slideIndex+=n);
}

function currentSlide(n){

	mostrarSlides(slideIndex=n);
}

