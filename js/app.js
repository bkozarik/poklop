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

const teamSlider = $('.team-slider');
const teamNav = $('.team-navs');
teamSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: teamNav,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button class="slick-prev slick-arrow"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31.5" transform="rotate(-180 32 32)" stroke="#CFCFCF"/><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M27.1623 31.9437L34.8988 24.0942L36.0846 25.2801L29.4776 32.0001L36.1411 38.7201L34.9552 39.906L27.1058 32.0001L27.1623 31.9437Z" fill="#1C1C1C"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31.5" stroke="#CFCFCF"/><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M36.8377 32.0563L29.1012 39.9058L27.9154 38.7199L34.5224 31.9999L27.8589 25.2799L29.0448 24.094L36.8942 31.9999L36.8377 32.0563Z" fill="#1C1C1C"/></svg></button>',
});

teamNav.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: teamSlider,
    arrows: true,
    focusOnSelect: true,
    prevArrow: '<button class="slick-prev slick-arrow"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31.5" transform="rotate(-180 32 32)" stroke="#CFCFCF"/><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M27.1623 31.9437L34.8988 24.0942L36.0846 25.2801L29.4776 32.0001L36.1411 38.7201L34.9552 39.906L27.1058 32.0001L27.1623 31.9437Z" fill="#1C1C1C"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31.5" stroke="#CFCFCF"/><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M36.8377 32.0563L29.1012 39.9058L27.9154 38.7199L34.5224 31.9999L27.8589 25.2799L29.0448 24.094L36.8942 31.9999L36.8377 32.0563Z" fill="#1C1C1C"/></svg></button>',
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        }
    }]
});

$('.create-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<div class="slick-prev slick-arrow"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M0.16229 7.94365L7.89876 0.0942383L9.08464 1.28012L2.47758 8.00012L9.14111 14.7201L7.95523 15.906L0.105819 8.00012L0.16229 7.94365Z" fill="#1C1C1C"/></svg></div>',
    nextArrow: '<div class="slick-next slick-arrow"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M9.83771 8.05635L2.10124 15.9058L0.915357 14.7199L7.52242 7.99988L0.858886 1.27988L2.04477 0.093996L9.89418 7.99988L9.83771 8.05635Z" fill="#1C1C1C"/></svg></div>',
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false
        }
    }]
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

$('.modal-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '<div class="slick-prev slick-arrow"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M0.16229 7.94365L7.89876 0.0942383L9.08464 1.28012L2.47758 8.00012L9.14111 14.7201L7.95523 15.906L0.105819 8.00012L0.16229 7.94365Z" fill="#1C1C1C"/></svg></div>',
    nextArrow: '<div class="slick-next slick-arrow"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M9.83771 8.05635L2.10124 15.9058L0.915357 14.7199L7.52242 7.99988L0.858886 1.27988L2.04477 0.093996L9.89418 7.99988L9.83771 8.05635Z" fill="#1C1C1C"/></svg></div>'
});

$('.cases-item__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.16229 7.94316L7.89876 0.0937501L9.08464 1.27963L2.47758 7.99963L9.14111 14.7196L7.95523 15.9055L0.105819 7.99963L0.16229 7.94316Z" fill="white"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.83771 8.05684L2.10124 15.9062L0.915357 14.7204L7.52242 8.00037L0.858886 1.28037L2.04477 0.0944843L9.89418 8.00037L9.83771 8.05684Z" fill="white"/></svg></button>'
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

$('.product-more-btn').on('click', function() {
    const cases = $(this).closest('.product-tab').find('.product-item');
    cases.fadeIn();

    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).find('span').text('Скрыть');
    } else {
        cases.hide();
        cases.eq(0).fadeIn();
        cases.eq(1).fadeIn();
        cases.eq(2).fadeIn();
        cases.eq(3).fadeIn();
        $(this).find('span').text('Смотреть еще');
        var elem = $('.assortment-btns-wrapper');
        var top = elem.offset().top - 15;
        $('body,html').animate({ scrollTop: top }, 400);
    }

    cases.each(function() {
        const slider = $(this).find('.product-slider');

        slider.slick('resize');
        slider.slick('setPosition');

        setTimeout(function() {
            slider.slick('resize');
            slider.slick('setPosition');
        }, 500);
    });
});

$('.assortment-btn').on('click', function() {
    $('.assortment-btn').removeClass('is-active');
    $(this).addClass('is-active');
    $('.product-tab').hide();
    $('.product-tab').eq($(this).index()).fadeIn();

    $('.product-tab').eq($(this).index()).each(function() {
        const slider = $(this).find('.product-slider');

        slider.slick('resize');
        slider.slick('setPosition');

        setTimeout(function() {
            slider.slick('resize');
            slider.slick('setPosition');
        }, 500);

    });
});

$('.cases-more-btn').on('click', function() {
    const cases = $(this).closest('.cases-tab').find('.cases-item');
    cases.fadeIn();

    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).find('span').text('Скрыть');
    } else {
        cases.hide();
        cases.eq(0).fadeIn();
        cases.eq(1).fadeIn();
        cases.eq(2).fadeIn();
        cases.eq(3).fadeIn();
        cases.eq(4).fadeIn();
        cases.eq(5).fadeIn();
        $(this).find('span').text('Смотреть больше объектов');
        var elem = $('.cases-btns-wrapper');
        var top = elem.offset().top - 15;
        $('body,html').animate({ scrollTop: top }, 400);
    }

    cases.each(function() {
        const slider = $(this).find('.cases-item__slider');

        slider.slick('resize');
        slider.slick('setPosition');

        setTimeout(function() {
            slider.slick('resize');
            slider.slick('setPosition');
        }, 500);
    });
});

$('.cases-btn').on('click', function() {
    $('.cases-btn').removeClass('is-active');
    $(this).addClass('is-active');
    $('.cases-tab').hide();
    $('.cases-tab').eq($(this).index()).fadeIn();

    $('.cases-tab').eq($(this).index()).each(function() {
        const slider = $(this).find('.cases-item__slider');

        slider.slick('resize');
        slider.slick('setPosition');

        setTimeout(function() {
            slider.slick('resize');
            slider.slick('setPosition');
        }, 500);

    });
});


$('.faq__item').on('click', function() {
    $(this).toggleClass('active');
});

$('.team-btn').on('click', function() {
    $('.team-btn').removeClass('active');
    $(this).addClass('active');
    $('.team-tab').hide();
    $('.team-tab').eq($(this).index()).fadeIn();
    $('.team-tab').eq($(this).index()).find('.team-slider').slick('resize');
});

/* SEO */
$('.seo__btn').on('click', function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).text('Скрыть');
    } else {
        $(this).text('Читать полностью');
    }
    $('.seo__text').toggleClass('active');
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

/* Quiz */
/* Quiz */
var number = 0;
var maxNumber = $(".quiz-item").length;
var $element = $(".quiz-item").find("input, select, textarea");
var btnPrev = $(".quiz-btn--prev");
var btnNext = $('.quiz-btn--next');
var isValid;
var dataBlock;
var activeSlide = [];
var qw3widthNum = $('#qw3-num');
var qw3widthSlider = $('#qw3-slider');
var qw4widthNum = $('#qw4-num');
var qw4widthSlider = $('#qw4-slider');

qw3widthSlider.on('change', function() {
    qw3widthNum.val(qw3widthSlider.val());
});

qw4widthSlider.on('change', function() {
    qw4widthNum.val(qw4widthSlider.val());
});

$element.on('change input', function(e) {
    var value = $(this).val().trim();
    isValid = value !== "";
    btnActive(!isValid);
});

function btnActive(isValid) {

    if (number === 0) {
        btnPrev.prop('disabled', 'false');
        btnNext.prop('disabled', isValid);
    } else {
        btnPrev.prop('disabled', false);
        if (activeSlide[number] === true || isValid === false) {
            btnNext.prop('disabled', false);
        } else {
            btnNext.prop('disabled', true);
        }
    }
}



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

//AJAX

var nForm = false;
$(function() {
    'use strict';
    var action = $('.ajax-url').val();
    $('form').on('submit', function(e) {
        e.preventDefault();
        var formThis = $(this);
        var fd = new FormData(this);

        formThis.find('.btn').attr({
            'disabled': 'true'
        });


        if (formThis.find('input[name="formname"]').val() === "price") {
            var link = document.createElement('a');
            link.setAttribute('href', $('.price-pdf').val());
            link.setAttribute('target', "_blank");
            link.setAttribute('download', '');

            if (navigator.userAgent.indexOf('Mac') > 0) {
                window.open($('.price-pdf').val(), '_blank');
            } else {
                simulate(link, "click");
            }

            $(".modal-overlay").fadeOut();
            window.location.href = $('.thank-url').val();

        } else if (formThis.find('input[name="formname"]').val() === "useful-pdf") {
            var link = document.createElement('a');
            link.setAttribute('href', $('.useful-pdf').val());
            link.setAttribute('target', "_blank");
            link.setAttribute('download', '');

            if (navigator.userAgent.indexOf('Mac') > 0) {
                window.open($('.useful-pdf').val(), '_blank');
            } else {
                simulate(link, "click");
            }

            $(".modal-overlay").fadeOut();
            window.location.href = $('.thank-url').val();
        } else if (formThis.find('input[name="formname"]').val() === "pdf") {
            var link = document.createElement('a');
            link.setAttribute('href', $('.pdf-pdf').val());
            link.setAttribute('target', "_blank");
            link.setAttribute('download', '');

            if (navigator.userAgent.indexOf('Mac') > 0) {
                window.open($('.pdf-pdf').val(), '_blank');
            } else {
                simulate(link, "click");
            }

            $(".modal-overlay").fadeOut();
            window.location.href = $('.thank-url').val();

        } else if (formThis.find('input[name="formname"]').val() === "test") {


            formThis.find('input').attr({
                'disabled': 'true',
            });
            formThis.find('button').attr({
                'disabled': 'true',
            });

            $(".modal-overlay").fadeOut();
        } else {
            $(".modal-overlay").fadeOut();


        }

        formThis.find('.btn').removeAttr('disabled');
        $('form').trigger('reset');


        $.ajax({
            // url: action,
            url: 'api/main.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: fd,
            success: function(msg) {
                ym(90200723, 'reachGoal', 'Cel_all');
                window.location.href = $('.thank-url').val();
            },

        });
    });
});


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

$('input[name="quiz1[]"]').on('change', function() {
    setTimeout(function() {
        ym(90200723, 'reachGoal', 'quiz_start');
        ym(90200723, 'reachGoal', 'quiz_1');
    }, 500);
});
$('input[name="qw2num"], input[name="my_range"]').on('change', function() {
    setTimeout(function() {
        ym(90200723, 'reachGoal', 'quiz_2');
    }, 500);
});
$('input[name="quiz3"]').on('change', function() {
    setTimeout(function() {
        ym(90200723, 'reachGoal', 'quiz_3');
        btnNext.click();
    }, 500);
});
$('input[name="quiz4[]"]').on('change', function() {
    setTimeout(function() {
        ym(90200723, 'reachGoal', 'quiz_4')
        btnNext.click();
    }, 500);
});
$('input[name="quiz5"]').on('change', function() {
    setTimeout(function() {
        ym(90200723, 'reachGoal', 'quiz_5')
        ym(90200723, 'reachGoal', 'quiz_complete')
        btnNext.click();
    }, 500);
});
// $('input[name="quiz6"]').on('change', function() {
//     setTimeout(function() {
//         ym(90200723, 'reachGoal', 'quiz_6')
//     }, 500);
// });
// $('input[name="quiz7"]').on('change', function() {
//     setTimeout(function() {
//         ym(90200723, 'reachGoal', 'quiz_7')
//         ym(90200723, 'reachGoal', 'quiz_complete')
//     }, 500);
// });

$('.widget-video__close').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.widget-video').fadeOut();
});

/* Cookie */
var cookiesTest2 = get_cookie("test2");
if (cookiesTest2 !== '' && cookiesTest2 !== null) {
    // return false;
} else {
    $(document).mouseleave(function(event) {
        event = event || window.event;
        if (event.clientY < 0 || event.clientY < 3) {
            if (!closeMod3) {

                $('html').addClass('stop');
                $('#modal-wait').fadeIn();


                closeMod3 = true;


                var date2 = new Date();
                date2.setDate(date2.getDate() + 7);
                date2 = date2.toUTCString();
                document.cookie = "test2=1;expires=" + date2;
            }

        }
    });

}
var cookiesTest1 = get_cookie("test1");
if (cookiesTest1 !== '' && cookiesTest1 !== null) {
    // return false;
} else {
    var closeMod1 = false;
    var closeMod2 = false;
    var closeMod3 = false;

    if (!closeMod1) {

        $('#modal-cookies').fadeIn();


        closeMod1 = true;


        var date1 = new Date();
        date1.setDate(date1.getDate() + 7);
        date1 = date1.toUTCString();
        document.cookie = "test1=1;expires=" + date1;
    }
}

function get_cookie(cookie_name) {
    var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

    if (results)
        return (unescape(results[2]));
    else
        return null;
}

$('.case-close').on('click', function(e) {
    e.preventDefault();
    window.history.go(-1);
});

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
    ].join('.');
}


$('[data-fancybox]').fancybox({
    backFocus: false,
});

jQuery(function() {
    let getUrlParams = window
        .location
        .search
        .replace('?', '')
        .split('&')
        .reduce(
            function(p, e) {
                var a = e.split('=');
                p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            }, {}
        );

    $('form input[name="utm_source"]').val(getUrlParams['utm_source']);
    $('form input[name="utm_medium"]').val(getUrlParams['utm_medium']);
    $('form input[name="utm_campaign"]').val(getUrlParams['utm_campaign']);
    $('form input[name="utm_content"]').val(getUrlParams['utm_content']);
    $('form input[name="utm_term"]').val(getUrlParams['utm_term']);
    $('form input[name="yclid"]').val(getUrlParams['yclid']);

})