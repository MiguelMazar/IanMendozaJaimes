$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() >= $('.Tag-Menu').first().offset().top){
			$('.Menu').addClass('flotar');
			$('.Tag-Menu').first().html('Ian Mendoza Jaimes').height($('.Menu').height());
		}
		else{
			$('.Menu').removeClass('flotar');
			$('.Tag-Menu').first().html('').height(0);
		}
	});

	$('.Trabajo-elemento').on('mouseover', function(item){
		var idEtiqueta = $(this).attr('id');
		if(!$(this).hasClass('seleccionado')){
			$('#'+idEtiqueta+'1').removeClass('invisible');
			$(this).addClass('grande');
			//$(this).children('.Trabajo-click').first().removeClass('invisible');
			$(this).children('.Trabajo-click').first().addClass('revelarTrabajo');
		}
	});

	$('.Trabajo-elemento').on('mouseout', function(item){
		var idEtiqueta = $(this).attr('id');
		$('#'+idEtiqueta+'1').addClass('invisible');
		$(this).removeClass('grande');
		//$(this).children('.Trabajo-click').first().addClass('invisible');
		$(this).children('.Trabajo-click').first().removeClass('revelarTrabajo');
	});

	$('.Trabajo-elemento').on('click', function(){
		$(this).children('.Trabajo-click').first().removeClass('revelarTrabajo');
		$(this).children('.Trabajo-descripcion').first().removeClass("invisible");
		$(this).children('.Trabajo-elemental').first().addClass('flexible');
		$(this).addClass('seleccionado');
		$(this).removeClass('grande');
		console.log($(document).width());
		if($(window).width() >= 735){
			$(this).animate({
				width: '90%',
				'border-radius':'5px'
			}, 500);
			$(this).children('.Trabajo-contentImg').first().addClass('nuevoContent');
			$(this).children('.Trabajo-imagen').first().addClass('nuevoImg');
		}
	});

	$('.Menu-elemento').on('click', function(e){
		e.preventDefault();
		if($(this).hasClass('inicio')){
			$('body, html').animate({scrollTop: 0}, 500);
		}
		else if($(this).hasClass('perfil')){
			$('body, html').animate({scrollTop: $('.Presentacion').offset().top - 60}, 500);
		}
		else if($(this).hasClass('trabajo')){
			$('body, html').animate({scrollTop: $('.Trabajo').offset().top - 60}, 500);
		}
		else if($(this).hasClass('contactame')){
			$('body, html').animate({scrollTop: $('.Contacto').offset().top - 60}, 500);
		}
	});

	$('.Inicio-contactos').on('click', function(){
		if($(this).hasClass('github')){
			window.open('https://github.com/IanMendozaJaimes');
		}
		else{
			if($(this).hasClass('facebook')){
				window.open('https://www.facebook.com/ian.mendozajaimes');
			}
			else{
				if('twitter'){
					window.open('https://twitter.com/Ian_MJ3?lang=en');
				}
				else{
					window.open('https://plus.google.com/u/0/105354643309951133613/posts');
				}
			}
		}
	});
});
