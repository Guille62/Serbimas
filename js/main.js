$(document).ready(function(){
	var cabeza = document.getElementsByClassName('cabecera');
	$("#sticker").sticky({topSpacing:10});
});


$('#slider-principal').owlCarousel({
    items:5,
    loop:true,
    margin:0,
    rewind: true,
    autoplay: true,
    merge:true,
    responsive:{
        678:{
            mergeFit:true,
            nav:true,
            dots: true,
        },
        1000:{
            mergeFit:false,
            nav:true,
            dots: true,
        }
    }
});



