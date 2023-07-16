/*OBJETO CON LAS PROPIEDADES DE LA GALERIA*/

var pg = {

	imgGaleria: document.querySelectorAll("#galeria ul li img"),
	rutaImagen: null,
	cuerpoDom: document.querySelector("body"),
	lightBox: null,
	modal: null,
	animacionGaleria: "slide",



}

/*OBJETO CON LOS METODOS DE LA GALERIA*/


var mg = {

	inicioGaleria: function() {
		for (var i = 0; i < pg.imgGaleria.length; i++) {

			pg.imgGaleria[i].addEventListener("click", mg.capturaImagen)

		}

	},

	capturaImagen: function(img) {

		pg.rutaImagen = img.target;
		mg.lightBox(pg.rutaImagen);
	},

	lightBox: function(img) {
		pg.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id", "lightbox");
		pg.lightBox = document.querySelector("#lightbox");
		pg.lightBox.style.width = "100%";
		pg.lightBox.style.height = "100%";
		pg.lightBox.style.position = "fixed";
		pg.lightBox.style.zIndex = "10";
		pg.lightBox.style.background = "rgba(0,0,0,.8)";
		pg.lightBox.style.top = 0;
		pg.lightBox.style.lefts = 0;

		pg.lightBox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");

		pg.modal = document.querySelector("#modal");

		pg.modal.innerHTML = img.outerHTML + "<div>X</div>";



		// if(window.matchMedia("(max-width:1000px) and (min-width:768px)").matches){
		// 	pg.modal.style.left = "48%";
		// }else if (window.matchMedia("(max-width:767px)").matches){
		// 	pg.modal.style.left = "46%";
		// }else{
		// 	pg.modal.style.left = "50%";
		// }
		pg.modal.style.display = "block";
		pg.modal.style.position = "relative";
		pg.modal.style.width = "60%";

		if (pg.animacionGaleria == "slide") {
			pg.modal.style.top = "50%";
			pg.modal.style.left = 0;
			pg.modal.style.opacity = 0;

			setTimeout(function() {
				pg.modal.style.transition = ".5s left ease";
				pg.modal.style.left = "50%";
				pg.modal.style.opacity = 1;
				pg.modal.style.marginLeft = -(pg.modal.childNodes[0].width / 2) + "px";
				pg.modal.style.marginTop = -(pg.modal.childNodes[0].height / 2) + "px";
			}, 50)
		}



		pg.modal.childNodes[0].style.width = "100%";
		pg.modal.childNodes[0].style.border = "15px solid grey";

		pg.modal.childNodes[1].style.position = "absolute";
		pg.modal.childNodes[1].style.right = "5px";
		pg.modal.childNodes[1].style.top = "5px";
		pg.modal.childNodes[1].style.color = "silver";
		pg.modal.childNodes[1].style.cursor = "pointer";
		pg.modal.childNodes[1].style.fontSize = "15px";
		pg.modal.childNodes[1].style.width = "20px";
		pg.modal.childNodes[1].style.height = "20px";
		pg.modal.childNodes[1].style.textAlign = "center";
		pg.modal.childNodes[1].style.background = "grey";
		pg.modal.childNodes[1].style.borderRadius = "0px 0px 0px 5px"


		pg.modal.childNodes[1].addEventListener("click", mg.salirGaleria)
		document.addEventListener("keydown", mg.salirGaleria2)
	},

	salirGaleria: function() {
		pg.lightBox.parentNode.removeChild(pg.lightBox);
	},
	salirGaleria2: function(argument) {
		if (argument.keyCode == 27) {
			pg.lightBox.parentNode.removeChild(pg.lightBox);
		}

	}
}


mg.inicioGaleria();