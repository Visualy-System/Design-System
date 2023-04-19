$(document).ready(function() {

    $('.header2 .nav-link').on('click', function() {
        $('.header2 .nav-link').removeClass('active');
        $(this).addClass('active');
    })

    $('.banners .owl-carousel').owlCarousel({
        margin: 0,
        rewind: true,
        dots: true,
        nav: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
    });
    $(document).ready(function() {
        $(".owl-carousel").owlCarousel();
    })
    $('.especs .owl-carousel').owlCarousel({
        margin: 30,
        rewind: true,
        dots: false,
        nav: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });

    $('.numbers .owl-carousel').owlCarousel({
        margin: 60,
        rewind: true,
        dots: false,
        nav: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });

    $('.fornecedores .owl-carousel').owlCarousel({
        margin: 60,
        rewind: true,
        dots: false,
        nav: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            425: {
                items: 3
            },
            575: {
                items: 4
            },
            768: {
                items: 5
            },
        }
    });

    $('.depoimentos .owl-carousel').owlCarousel({
        margin: 30,
        rewind: true,
        dots: true,
        lazyLoad: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    $('.mvv .owl-carousel').owlCarousel({
        margin: 30,
        rewind: true,
        dots: false,
        lazyLoad: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    $('.garan .crs1').owlCarousel({
        margin: 0,
        rewind: true,
        dots: false,
        nav: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            475: {
                items: 2
            },
            575: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });

    $('.garan .crs2').owlCarousel({
        margin: 5,
        rewind: true,
        dots: false,
        nav: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            475: {
                items: 2
            },
            575: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });

    $('.single-prod .c2 .owl-carousel').owlCarousel({
        margin: 50,
        rewind: true,
        dots: false,
        nav: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            425: {
                items: 2
            },
            575: {
                items: 3
            },
            1200: {
                items: 2
            }
        }
    });

    $('.rel-prods .owl-carousel').owlCarousel({
        margin: 65,
        rewind: true,
        dots: false,
        nav: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
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

    $('#mask').mask('(00) 0000-0000');
});