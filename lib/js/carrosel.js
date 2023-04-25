$(document).ready(function() {

    $('.header2 .nav-link').on('click', function() {
        $('.header2 .nav-link').removeClass('active');
        $(this).addClass('active');
    })
    $('.check_carousel .owl-carousel').owlCarousel({
        margin: 25,
        rewind: true,
        dots: true,
        nav: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1400: {
                items: 3
            }
        }
    });
    $('.image_carrosel_left_owl .owl-carousel').owlCarousel({
        margin: 25,
        rewind: true,
        dots: true,
        nav: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1400: {
                items: 3
            }
        }
    });
    $('.five_carousel .owl-carousel').owlCarousel({
        margin: 20,
        rewind: true,
        dots: true,
        nav: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 3
            },
            992: {
                items: 4
            },
            1400: {
                items: 5
            }
        }
    });
    $('.four_carousel .owl-carousel').owlCarousel({
        margin: 20,
        rewind: true,
        dots: true,
        nav: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });
    $('.three_carousel .owl-carousel').owlCarousel({
        margin: 25,
        rewind: true,
        dots: true,
        nav: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1400: {
                items: 3
            }
        }
    });
    $('.owl-carousel').owlCarousel({
        margin: 0,
        rewind: true,
        dots: true,
        nav: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1400: {
                items: 4
            }
        }
    });

    let offcvs = $('#offcv');
    offcvs.on('show.bs.offcanvas', function() {
        $('.navbar-toggler-icon').toggleClass('toggled');
    })

    let offcvh = $('#offcv');
    offcvh.on('hide.bs.offcanvas', function() {
        $('.navbar-toggler-icon').toggleClass('toggled');
    })


    $('.telp').on('click', function() {
        if ($(this).data('numero')) {
            var numero = $(this).data('numero');
            numero = numero.toString();
            if (numero.length > 10) {
                $(this).html('<a target="_blank" href="https://api.whatsapp.com/send?l=pt_br&amp;phone=55' + numero + ' ">(' + numero.substr(0, 2) + ') ' + numero.substr(2, 5) + '-' + numero.substr(7, 10) + '</a>');
            } else {
                $(this).html('<a href="tel:+55' + numero + ' ">(' + numero.substr(0, 2) + ') ' + numero.substr(2, 4) + '-' + numero.substr(6, 10) + '</a>');
            }
        }
    });

    $('.mailp').on('click', function() {
        if ($(this).data('email')) {
            var numero = $(this).data('email');
            $(this).html('<a href="mailto: ' + numero + ' ">' + numero + '</a>');
        }
    });

    $('.locp').on('click', function() {
        if ($(this).data('local')) {
            var local = $(this).data('local');
            $(this).html(local);
        }
    });

    //MAGIC SCROLL

    $('.magicscroll').on('click', function(e) {
        e.preventDefault();
        let id = $(this).attr('href'),
            targetOffset,
            limit = 80
        if (id.indexOf('#') != -1) {
            if ($(id).length) {
                targetOffset = $(id).offset().top

                if ($(document).scrollTop() >= 80) {
                    limit = 0
                }

                $('html, body').animate({
                    scrollTop: targetOffset - limit
                }, 800)
            } else {
                window.location = window.location.protocol + '//' + window.location.hostname + '/' + id
            }
        } else {
            window.location = id
        }
    });

});