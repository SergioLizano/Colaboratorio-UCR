/*!
 * Copyright 2014 Denisse Herrera
 */



/* ========================================================================
 * Notificaciones
 * ====================================================================== */

// JavaScript Document
$(document).ready(function(){
    $(".login-nav").click(function(){
        //$(".notificaciones").hide("normal");
	    
    });
	


 $(".tip-top").tooltip({
        placement : 'top'
    });
    $(".tip-right").tooltip({
        placement : 'right'
    });
    $(".tip-bottom").tooltip({
        placement : 'bottom'
    });
    $(".tip-left").tooltip({
        placement : 'left'
    });
	$(".menu-servicios a").tooltip({
        placement : 'right'
    });
	
	//$('#modal-file').modal(options)
	
	
	
	/*MIS FOTOS*/
	$('.mis-fotos').click(function (e) {
				  e.preventDefault()
				  $(this).tab('show')
				})
				$(".list-fotos").mouseover(function(){
					$(this).children(".delete").show();
				}).mouseout(function(){
					$(this).children(".delete").hide();
				});
				
				
   /*MIS FOTOS ALBUM*/
	$('.mis-fotos').click(function (e) {
				  e.preventDefault()
				  $(this).tab('show')
				})
				$(".list-album-fotos").mouseover(function(){
					$(this).children(".delete").show();
				}).mouseout(function(){
					$(this).children(".delete").hide();
				});
				
	 /*MIS VIDEOS*/
	$('.mis-videos').click(function (e) {
				  e.preventDefault()
				  $(this).tab('show')
				})
				$(".list-videos").mouseover(function(){
					$(this).children(".delete").show();
				}).mouseout(function(){
					$(this).children(".delete").hide();
				});
	/*tabs correo */
	$('#micorreo').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})


$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#logos').fadeOut();
     }
    else
     {
      $('#logos').fadeIn();
     }
 });
 	
	
	 
$(document).ready(function(){
 
        $(".hola-comunidad").hide();
        $(".show_hide").show();
 
    $('.show_hide').click(function(){
    $(".hola-comunidad").slideToggle();
    });

//para cargar lo de Estado de coenxi√n - R2

$.getJSON( "http://www.redclara.net/conexion.json.php", function( data ) { 
	$('#mensaje-red').html(data.resultado); 
	var red_avanzada_status=data.redavanzada;
    if (red_avanzada_status=="1")
	{	
		
		$('#red-avanzada-icono').attr('src','images/red-positivo.png'); 
	}
	else
	{
		
		$('#red-avanzada-icono').attr('src','images/red-negativo.png');
	}
	
	
	
	
	
}); 

});

	
	
	
});


