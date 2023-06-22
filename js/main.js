(function ($) {

    //marcar menu
    $('.menu-principal ul li a').click(function() {
                
        //cerrar menu movil
        $('.menu-principal').removeClass('show');
        
    });

//Carrusel testimonios
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
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

    // Add image and caption to lightbox

  $lightbox
    .append($img)
    .append($caption);

  // Add lighbox to document

  $('body').append($lightbox);

  $('.lightbox-gallery img').click(function(e) {
    e.preventDefault();

    // Get image link and description
    var src = $(this).attr('data-image-hd');
    var cap = $(this).attr('alt');

    // Add data to lighbox

    $img.attr('src', src);
    $caption.text(cap);

    // Show lightbox

    $lightbox.fadeIn('fast');

    $lightbox.click(function() {
      $lightbox.fadeOut('fast');
    });
  });

    // var url = window.location.pathname;
    var url = $(location).attr('pathname');
    if(url=='/adriana-diseno-y-web/identidad-visual.php'){
        $('.menu-principal ul li a').removeClass('activo');
        $("a[href$='index.php#servicios']").addClass('activo');
    }
    if(url=='/adriana-diseno-y-web/disenos-extras.php'){
        $('.menu-principal ul li a').removeClass('activo');
        $("a[href$='index.php#servicios']").addClass('activo');
    }
    if(url=='/adriana-diseno-y-web/servicios-web.php'){
        $('.menu-principal ul li a').removeClass('activo');
        $("a[href$='index.php#servicios']").addClass('activo');
    }
    if(url=='/adriana-diseno-y-web/social-media.php'){
        $('.menu-principal ul li a').removeClass('activo');
        $("a[href$='index.php#servicios']").addClass('activo');
    }
    if(url=='/adriana-diseno-y-web/plantillas.php'){
        $('.menu-principal ul li a').removeClass('activo');
        $("a[href$='index.php#plantillas']").addClass('activo');
    }

    // $('body').scrollspy({target: " ", offset: 100});

})(jQuery);
