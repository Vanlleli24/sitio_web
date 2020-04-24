var inputs =document.getElementByClassName('sitio_input'); //obtendra los elementos de clase nombre que se encuntra dentro de los parentesis
for (var i = 0; i < inputs.length; i++){ //
	inputs[i].addEventListener('keyup',fuction() { //
		if (this.value.length>=1) { //
			this.nextElementSibling.classList.add('fijar'); //

		}else{
			this.nextElementSibling.classList.remove('fijar'); //
		}
	});

}
 
