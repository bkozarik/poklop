if (window.matchMedia("(max-width:767px").matches) {
    setTimeout(function() {
        $('.btn--burger-wrapper').removeClass('active');
        $('.widget-menu').removeClass('active');
    }, 1000);
}

(function($, window) {
    var adjustAnchor = function() {

        var $anchor = $(':target'),
            fixedElementHeight = 100;

        if ($anchor.length > 0) {
            if ($anchor[0].id === 'about') {
                fixedElementHeight = 400;
            }

            $('html, body')
                .stop()
                .animate({
                    scrollTop: $anchor.offset().top - fixedElementHeight
                }, 200);

        }

    };

    $(window).on('hashchange load', function(e) {
        adjustAnchor();
        history.pushState("", document.title, window.location.pathname +
            window.location.search);
    });

})(jQuery, window);

function fixedHeader() {
    var scrollTop = $(window).scrollTop();
    var headerTopHeight = $('.header__inner').outerHeight();

    if (scrollTop > headerTopHeight) {
        $('.header').addClass('is-fixed');
        $('.main').addClass('header-fixed');
    } else {
        $('.header').removeClass('is-fixed');
        $('.main').removeClass('header-fixed');
    }
} // fixedHeader();


$(window).on('scroll', function() {
    if ($('.index-main').length && !$('.quiz-main').length) {
        fixedHeader();
    }
}); // open\close menu

if (window.matchMedia("(max-width:767px").matches) {
    setTimeout(function() {
        $('.btn--burger-wrapper').removeClass('active');
        $('.widget-menu').removeClass('active');
    }, 1000);
}

var toTop = $('.to--top');

toTop.on('click', topFunction);

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        toTop.addClass('act');
    } else {
        toTop.removeClass('act');
    }
}

function topFunction() {
    $('body,html').animate({ scrollTop: 0 }, 100);
}

$('.btn--burger-wrapper').on('click', function() {
    $('.btn--burger-wrapper').toggleClass('active');
    $('.widget-menu').toggleClass('active');
});

$('.nav__mob').on('click', function() {
    $('.nav').toggleClass('active');
    $('.nav__mob').toggleClass('active');
    $('html').toggleClass('stop');
});
$('.nav__item a').on('click', function() {
    $('.nav').removeClass('active');
    $('html').removeClass('stop');
    $('.nav__mob').removeClass('active');
});
$('.nav__close').on('click', function() {
    $('.nav').removeClass('active');
    $('html').removeClass('stop');
    $('.nav__mob').removeClass('active');
});

/* FAQ */
$('.faq-btn').on('click', function() {
    $('.faq-btn').removeClass('is-active');
    $(this).addClass('is-active');
    $('.faq-item').hide();
    $('.faq-item').eq($(this).index()).fadeIn();
    animateTopFaq();
});

/* Select */
$('select[name="social"]').on('input change', function() {
    $('.select-images img').hide();
    if ($(this).val() === 'What`s app') {
        $('.select-images .whatsapp').show();
    }

    if ($(this).val() === 'Telegram') {
        $('.select-images .telegram').show();
    }

    if ($(this).val() === 'Viber') {
        $('.select-images .viber').show();
    }

    if ($(this).val() === 'Email') {
        $(this).closest('form').find('input[name="email"]').show();
        $(this).closest('form').find('input[name="email"]').prop('required', true);
        $(this).closest('form').find('input[name="phone"]').hide();
        $(this).closest('form').find('input[name="phone"]').prop('required', false);
        $('.select-images .email').show();
    } else {
        $(this).closest('form').find('input[name="email"]').hide();
        $(this).closest('form').find('input[name="email"]').prop('required', false);
        $(this).closest('form').find('input[name="phone"]').show();
        $(this).closest('form').find('input[name="phone"]').prop('required', true);
    }
});

/* Range */

$(".js-range-slider").ionRangeSlider();

var toTop = $('.to_top');

toTop.on('click', topFunction);

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        toTop.addClass('act');
    } else {
        toTop.removeClass('act');
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function topFunction() {
    $('body,html').animate({ scrollTop: 0 }, 100);
}

$('.widget-video__close').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.widget-video').fadeOut();
});

/* Sliders */
$('.product-item').each(function() {
    const slider = $(this).find('.product-slider');

    slider.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: '<button class="slick-prev slick-arrow"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M0.0687498 9.56786L9.4875 19L10.9313 17.575L2.8875 9.5L11 1.425L9.55625 -6.31083e-08L-5.38416e-07 9.5L0.0687498 9.56786Z" fill="#1C1C1C"/></svg></button>',
        nextArrow: '<button class="slick-next slick-arrow"><svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M9.9375 9.56786L1.375 19L0.0624999 17.575L7.375 9.5L-7.68228e-07 1.425L1.3125 -5.73712e-08L10 9.5L9.9375 9.56786Z" fill="#1C1C1C"/></svg></button>'
    });
});





$('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31.5" transform="rotate(-180 32 32)" stroke="#ffffff"/><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M27.1623 31.9437L34.8988 24.0942L36.0846 25.2801L29.4776 32.0001L36.1411 38.7201L34.9552 39.906L27.1058 32.0001L27.1623 31.9437Z" fill="#ffffff"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31.5" stroke="#ffffff"/><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M36.8377 32.0563L29.1012 39.9058L27.9154 38.7199L34.5224 31.9999L27.8589 25.2799L29.0448 24.094L36.8942 31.9999L36.8377 32.0563Z" fill="#ffffff"/></svg></button>',
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false
        }
    }]
});

$('.reviews-phone').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31.5" transform="rotate(-180 32 32)" stroke="#CFCFCF"/><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M27.1623 31.9437L34.8988 24.0942L36.0846 25.2801L29.4776 32.0001L36.1411 38.7201L34.9552 39.906L27.1058 32.0001L27.1623 31.9437Z" fill="#1C1C1C"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31.5" stroke="#CFCFCF"/><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M36.8377 32.0563L29.1012 39.9058L27.9154 38.7199L34.5224 31.9999L27.8589 25.2799L29.0448 24.094L36.8942 31.9999L36.8377 32.0563Z" fill="#1C1C1C"/></svg></button>',
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false
        }
    }]
});



/* $('.youtube-preview').each(function() {
    let reviewLink = $(this).attr('href');
    var from = reviewLink.search('youtu.be/');
    var to = reviewLink.length;
    reviewLink = reviewLink.substring(from, to);
    reviewLink = reviewLink.replace('youtu.be/', '')
    $(this).css('background', '#000 url(https://img.youtube.com/vi/' + reviewLink + '/maxresdefault.jpg) center no-repeat')

    if ($(this).hasClass('setup-item__img')) {
        $(this).css('background-size', 'contain')
    } else {
        $(this).css('background-size', 'cover')
    }

}); */





$('.faq__item').on('click', function() {
    $(this).toggleClass('active');
});


/* Modals */
$('.js-btn').on('click', function(e) {
    e.preventDefault();
    $('html').addClass('stop');

    

    $('#modal-call').fadeIn(500);

    $('.modal-slider').slick('resize');
    $('.modal-slider').slick('setPosition');

    setTimeout(function() {
        $('.modal-slider').slick('resize');
        $('.modal-slider').slick('setPosition');
    }, 500);
});

$('.modal__close').on('click', function(event) {
    event.preventDefault();
    $('html').removeClass('stop');
    $('.modal-overlay').fadeOut(500);
    $('.modal-cookies').fadeOut(500);
});

$('.cookie-close').on('click', function(event) {
    event.preventDefault();
    $('html').removeClass('stop');
    $('.modal-cookies').fadeOut(500);
});

$('.modal-overlay').mouseup(function(e) {
    var container = $('.modal');
    if (container.has(e.target).length === 0 && !container.is(e.target)) {
        $('html').removeClass('stop');
        $('.modal-overlay').fadeOut();
    }
});

/* Animation */
/* Titles anim */
$(".fz75, .fz48, .fz46, .fz40, .fz55, .fz60, .fz70").not('.no-anim').each(anime);
// $(".title-descr").not('.subtitle-first').each(anime);
function anime(anim) {
    var thisTitle = $(this);
    var offsetTop = thisTitle.offset().top - $(window).height() - 10;
    if ($(document).scrollTop() > offsetTop) {
        thisTitle.addClass('fade_in');
    }
    $(window).scroll(function(event) {
        offsetTop = thisTitle.offset().top - $(window).height() - 10;
        if ($(document).scrollTop() > offsetTop) {
            thisTitle.addClass('fade_in');
        }
    });
}

/* Phone mask */
$('input[name="phone"]').mask('+420(999)999-999');

// btn
function btnClick() {
    btnPrev.on('click', function(event) {
        event.preventDefault();
        --number;
        $(".quiz-item").hide();
        $(".quiz-item").eq(number).fadeIn();
        btnActive(!isValid);
        if (number === 0) {
            btnPrev.hide();
        }
        progress(number);

        animateTop();

        btnNext.blur();
    });


    btnNext.on('click', function(event) {
        event.preventDefault();

        activeSlide[number] = true;
        ++number;
        $(".quiz-item").hide();
        $(".quiz-item").eq(number).fadeIn(1000);
        btnActive(!isValid);

        if (activeSlide[number] === true) {
            btnNext.prop('disabled', false);
        } else {
            btnNext.prop('disabled', true);
        }

        if (number > 0) {
            btnPrev.show();
        }

        if (number === 5) {
            $(".quiz-bottom").hide();
            $(".quiz-right").hide();
        }

        progress(number);

        animateTop();

        setTimeout(function() {
            btnNext.trigger("blur");
        }, 500);
    });

    //   btnSemifinal.on('click', function (event) {
    //     activeSlide[number] = true;
    //     ++number;
    //     btnActive();
    //      $(".quiz__item").hide().removeClass('acts');
    //      $("#qw-f").fadeIn(1000).addClass('acts');
    //   })
}
btnClick();

function animateTop(eq) {
    var elem = $('.quiz-inner');
    var top = elem.offset().top - 70;
    $('body,html').animate({ scrollTop: top }, 400);
}

var toTop = $('.to_top');

toTop.on('click', topFunction);

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        toTop.addClass('act');
    } else {
        toTop.removeClass('act');
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function topFunction() {
    $('body,html').animate({ scrollTop: 0 }, 100);
}

// //AJAX

$('.action_form').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();
  
    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')
  
  
    $('.submit', form).val('Sending...');

    data.append( "Phone", 		$('[name="phone"]', form).val() );
    
    
    $.ajax({
        url: '../send.php',
        type: 'GET',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();
  
            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }
  
            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
            
        },
        complete: function() {
            $('.sended').fadeIn();
            
            console.log('Complete')
            form.reset() 
        }
    });
  
    return false;
  });

// var nForm = false;
// $(function() {
//     'use strict';
//     var action = $('.ajax-url').val();
//     $('form').on('submit', function(e) {
//         e.preventDefault();
//         var formThis = $(this);
//         var fd = new FormData(this);

//         formThis.find('.btn').attr({
//             'disabled': 'true'
//         });


//         if (formThis.find('input[name="formname"]').val() === "price") {
//             var link = document.createElement('a');
//             link.setAttribute('href', $('.price-pdf').val());
//             link.setAttribute('target', "_blank");
//             link.setAttribute('download', '');

//             if (navigator.userAgent.indexOf('Mac') > 0) {
//                 window.open($('.price-pdf').val(), '_blank');
//             } else {
//                 simulate(link, "click");
//             }

//             $(".modal-overlay").fadeOut();
//             window.location.href = $('.thank-url').val();

//         } else if (formThis.find('input[name="formname"]').val() === "useful-pdf") {
//             var link = document.createElement('a');
//             link.setAttribute('href', $('.useful-pdf').val());
//             link.setAttribute('target', "_blank");
//             link.setAttribute('download', '');

//             if (navigator.userAgent.indexOf('Mac') > 0) {
//                 window.open($('.useful-pdf').val(), '_blank');
//             } else {
//                 simulate(link, "click");
//             }

//             $(".modal-overlay").fadeOut();
//             window.location.href = $('.thank-url').val();
//         } else if (formThis.find('input[name="formname"]').val() === "pdf") {
//             var link = document.createElement('a');
//             link.setAttribute('href', $('.pdf-pdf').val());
//             link.setAttribute('target', "_blank");
//             link.setAttribute('download', '');

//             if (navigator.userAgent.indexOf('Mac') > 0) {
//                 window.open($('.pdf-pdf').val(), '_blank');
//             } else {
//                 simulate(link, "click");
//             }

//             $(".modal-overlay").fadeOut();
//             window.location.href = $('.thank-url').val();

//         } else if (formThis.find('input[name="formname"]').val() === "test") {


//             formThis.find('input').attr({
//                 'disabled': 'true',
//             });
//             formThis.find('button').attr({
//                 'disabled': 'true',
//             });

//             $(".modal-overlay").fadeOut();
//         } else {
//             $(".modal-overlay").fadeOut();


//         }

//         formThis.find('.btn').removeAttr('disabled');
//         $('form').trigger('reset');


//         $.ajax({
//             // url: action,
//             url: 'api/main.php',
//             type: 'POST',
//             contentType: false,
//             processData: false,
//             data: fd,
//             success: function(msg) {
//                 ym(90200723, 'reachGoal', 'Cel_all');
//                 window.location.href = $('.thank-url').val();
//             },

//         });
//     });
// });


// ---------------------

function simulate(element, eventName) {
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers) {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent) {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents') {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        } else {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
                options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
                options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    } else {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
        destination[property] = source[property];
    return destination;
}

var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
}
var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
}


$('.widget-video__close').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.widget-video').fadeOut();
});

/* Cookie */

$('.case-close').on('click', function(e) {
    e.preventDefault();
    window.history.go(-1);
});



$('[data-fancybox]').fancybox({
    backFocus: false,
});
