$(document).ready(function(){
	var cabeza = document.getElementsByClassName('cabecera');
	$("#sticker").sticky({topSpacing:10});
});


$('#slider-principal').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    autoplay: true,
    nav:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});



