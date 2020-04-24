var acc = document.getElementsByClassName("botonTituloSeccion"); //documentos con los elementos con el nombre que esta en los parametros
var i;

for (i=0; i < acc.length; i++) { //esta asignando valores a la variable
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") { //en esta esta dando una condicion para que se cumpla en la pagina
			panel.style.display = "none";
		}else{
			panel.style.display = "block";
		}
	});
	
}