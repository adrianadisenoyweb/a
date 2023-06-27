(function ($) {

    //marcar menu
    $('.menu-principal ul li a').click(function() {
                
        //cerrar menu movil
        $('.menu-principal').removeClass('show');
        
    });

//Carrusel testimonios
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        items: 1
    });

// Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    //Galeria portafolio
    var $lightbox = $('<div class="lightbox"></div>');
    var $img = $('<img>');
    var $caption = $('<p class="caption"></p>');


    // var url = window.location.pathname;
    var url = $(location).attr('pathname');
    // console.log('url actual:'+url);
    if(url=='/a/identidad-visual.html'){
        $('.menu-principal ul li a').removeClass('activo');
        $("a[href$='index.html#servicios']").addClass('activo');
    }
    if(url=='/a/disenos-extras.html'){
        $('.menu-principal ul li a').removeClass('activo');
        $("a[href$='index.html#servicios']").addClass('activo');
    }
    if(url=='/a/servicios-web.html'){
        $('.menu-principal ul li a').removeClass('activo');
        $("a[href$='index.html#servicios']").addClass('activo');
    }
    if(url=='/a/social-media.html'){
        $('.menu-principal ul li a').removeClass('activo');
        $("a[href$='index.html#servicios']").addClass('activo');
    }
    if(url=='/a/plantillas.html'){
        $('.menu-principal ul li a').removeClass('activo');
        $("a[href$='index.html#plantillas']").addClass('activo');
    }

})(jQuery);
