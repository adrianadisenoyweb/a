(function ($) {

    //marcar menu
    $('.menu-principal ul li a').click(function() {    
        //cerrar menu movil
        $('.menu-principal').removeClass('show');
    });

    //submenu plantillas    
    $('.menu-plantillas').click(function() {
      $('.items-servicios').hide();
      $('.items-plantillas').show();
    });
    //cerrar submenu plantillas
    $('.items-plantillas a').click(function() {
        $('.items-plantillas').hide(); 
    });

    $('.item-redes').click(function() {
      $('.plantillas-tarjetas-agradecimiento').hide();
      $('.plantillas-redes-sociales').show();
    });

    $('.item-agradecimiento').click(function() {
      $('.plantillas-redes-sociales').hide();
      $('.plantillas-tarjetas-agradecimiento').show();
    });

    //submenu servicios
    $('.menu-servicios').click(function() {
      $('.items-plantillas').hide();
      $('.items-servicios').show();
    });

    //cerrar submenu plantillas
    $('.items-servicios a').click(function() {
        $('.items-servicios').hide(); 
    });

    //paginacion plantillas redes sociales
    $('.uno').click(function(e) {
        e.preventDefault();
        $('.pagina-2').hide();
        $('.dos').removeClass('pagina-seleccionada');
      
        $('.pagina-1').show();      
        $('.uno').addClass('pagina-seleccionada');
    });

    $('.dos').click(function(e) {
        e.preventDefault();
        $('.pagina-1').hide();
        $('.uno').removeClass('pagina-seleccionada');

        $('.pagina-2').show();
        $('.dos').addClass('pagina-seleccionada');
    });

   

    // if($('.dropdown-menu').hasClass('dropdown-menu show')){
    //     $('.dropdown-menu').removeClass('show');
    // }

//Carrusel testimonios
    var owl = $('.testimonial-carousel');
    var owlCarouselTimeout = 1000;
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        smartSpeed: 1000,
        autoplayTimeout: owlCarouselTimeout,
        autoplayHoverPause:true
    });
    owl.on('mouseleave',function(){
        owl.trigger('stop.owl.autoplay'); //this is main line to fix it
        owl.trigger('play.owl.autoplay', [owlCarouselTimeout]);
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

    //conóceme
    $('.mision').hide();
    $('.vision').hide();
    $('.valores').hide();
    $('#proposito').click(function(e) {
        e.preventDefault();
        $('.mision').hide();
        $('.vision').hide();
        $('.valores').hide();
        $('#mision').removeClass('pagina-seleccionada');
        $('#vision').removeClass('pagina-seleccionada');
        $('#valores').removeClass('pagina-seleccionada');
        
        $('.proposito').show();
        $('#proposito').addClass('pagina-seleccionada');
    });

    $('#mision').click(function(e) {
        e.preventDefault();
        $('.proposito').hide();
        $('.vision').hide();
        $('.valores').hide();
        $('#proposito').removeClass('pagina-seleccionada');
        $('#vision').removeClass('pagina-seleccionada');
        $('#valores').removeClass('pagina-seleccionada');

        $('.mision').show();
        $('#mision').addClass('pagina-seleccionada');
    });

    $('#vision').click(function(e) {
        e.preventDefault();
        $('.proposito').hide();
        $('.mision').hide();
        $('.valores').hide();
        $('#proposito').removeClass('pagina-seleccionada');
        $('#mision').removeClass('pagina-seleccionada');
        $('#valores').removeClass('pagina-seleccionada');

        $('.vision').show();
        $('#vision').addClass('pagina-seleccionada');
    });

    $('#valores').click(function(e) {
        e.preventDefault();
        $('.proposito').hide();
        $('.mision').hide();
        $('.vision').hide();
        $('#proposito').removeClass('pagina-seleccionada');
        $('#mision').removeClass('pagina-seleccionada');
        $('#vision').removeClass('pagina-seleccionada');

        $('.valores').show();
        $('#valores').addClass('pagina-seleccionada');
    });
    
    //Productos digitales
    // $(".carousel").swipe({

    //     swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      
    //       if (direction == 'left') $(this).carousel('next');
    //       if (direction == 'right') $(this).carousel('prev');
      
    //     },
    //     allowPageScroll:"vertical",
      
    // });

    // const myCarouselElement = document.querySelector('#carouselExampleIndicators')
    // const carousel = new bootstrap.Carousel(myCarouselElement, {
    // interval: 3000
    // });

    $('.como-utilizo').hide();
    $('.preg-frec').hide();
    $('#proceso-compra').click(function(e) {
        e.preventDefault();
        $('.como-utilizo').hide();
        $('.preg-frec').hide();
        $('.valores').hide();
        $('#como-utilizo').removeClass('pagina-seleccionada');
        $('#preg-frec').removeClass('pagina-seleccionada');
        $('#valores').removeClass('pagina-seleccionada');
        
        $('.proceso-compra').show();
        $('#proceso-compra').addClass('pagina-seleccionada');
    });

    $('#como-utilizo').click(function(e) {
        e.preventDefault();
        $('.proceso-compra').hide();
        $('.preg-frec').hide();
        $('.valores').hide();
        $('#proceso-compra').removeClass('pagina-seleccionada');
        $('#preg-frec').removeClass('pagina-seleccionada');
        $('#valores').removeClass('pagina-seleccionada');

        $('.como-utilizo').show();
        $('#como-utilizo').addClass('pagina-seleccionada');
    });

    $('#preg-frec').click(function(e) {
        e.preventDefault();
        $('.proceso-compra').hide();
        $('.como-utilizo').hide();
        $('.valores').hide();
        $('#proceso-compra').removeClass('pagina-seleccionada');
        $('#como-utilizo').removeClass('pagina-seleccionada');
        $('#valores').removeClass('pagina-seleccionada');

        $('.preg-frec').show();
        $('#preg-frec').addClass('pagina-seleccionada');
    });

    //social media
    $('.diseno-plantillas').hide();
    $('#diseno-posts').click(function(e) {
        e.preventDefault();
        $('.diseno-plantillas').hide();
        $('#diseno-plantillas').removeClass('pagina-seleccionada');
        
        $('.diseno-posts').show();
        $('#diseno-posts').addClass('pagina-seleccionada');
    });
    $('#diseno-plantillas').click(function(e) {
        e.preventDefault();
        $('.diseno-posts').hide();
        $('#diseno-posts').removeClass('pagina-seleccionada');
        
        $('.diseno-plantillas').show();
        $('#diseno-plantillas').addClass('pagina-seleccionada');
    });

})(jQuery);