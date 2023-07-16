 /* OBJETO CON LAS PROPIEDADES DEL SLIDE*/
 var p = {

 	paginacion: document.querySelectorAll("#paginacion li"),
 	item: 0,
 	cajaSlide: document.querySelector("#slide ul"),
 	retroceder: document.querySelector("#slide #retroceder"),
 	avanzar: document.querySelector("#slide #avanzar")



 }


 /*OBJETO CON LOS METODOS DEL SLIDE*/


 var m = {


 	inicioSlide: function() {
 		for (var i = 0; i < p.paginacion.length; i++) {
 			p.paginacion[i].addEventListener("click", m.paginacionSlide)
 		}
 		p.avanzar.addEventListener("click", m.avanzar);
 		p.retroceder.addEventListener("click", m.retroceder);

 	},

 	paginacionSlide: function(item) {
 		p.item = item.target.parentNode.getAttribute("item") - 1;
 		m.movimientoSlide(p.item);
 	},

 	avanzar: function() {

 		if (p.item == 3) {
 			p.item = 0;
 		} else {
 			p.item++;
 		}
 		m.movimientoSlide(p.item);
 	},

 	retroceder: function() {

 		if (p.item == 0) {
 			p.item = 3;

 		} else {
 			p.item--;
 		}

 		m.movimientoSlide(p.item);
 	},

 	movimientoSlide: function(item) {
 		p.cajaSlide.style.left = item * -100 + "%";
 		for (var i = 0; i < p.paginacion.length; i++) {
 			p.paginacion[i].style.opacity = .5;
 		}
 		p.paginacion[item].style.opacity = 1;
 		p.cajaSlide.style.transition = "0.7s left ease-in-out";


 	},

 	inicioSlideFlechas: function() {

 	}

 }

 setInterval(function() {
 	m.movimientoSlide(p.item);
 	p.item += 1;
 	if (p.item == 4) {

 		p.item = 0;
 	}

 }, 6000);

 m.inicioSlide();