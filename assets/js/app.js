"use strict";

$(function () {
    $(".phone-mask").inputmask("+7 (999) 999-9999", { "clearIncomplete": false });

    $(".js-toggler").on('click', function (event) {
        $('.header').addClass('open');
        $('body').toggleClass('overfl');
    });
    $(".js-toggler-close").on('click', function (event) {
        $('.header').removeClass('open');
        $('body').removeClass('overfl');
    });

    $(".otz__tx-btn").on('click', function (event) {
        $(this).prev().addClass('open');
    });
    $(".doc-t__tx-btn").on('click', function (event) {
        $(this).prev().addClass('open');
    });

    $(".js-tariff-b").on('click', function (event) {
        $(this).parent().addClass('open');
    });

    $(".js-tariff-b2").on('click', function (event) {
        $(this).parent().parent().removeClass('open');
    });

    $(".educ-banner-mob-btn").on('click', function (event) {
        $('.banner').addClass('open');
    });

    $(".cache__item-tx-btn").on('click', function (event) {
        $(this).parent().addClass('open');
    });

    $(".inf__btn").on('click', function (event) {
        $(this).parent().addClass('open');
    });

    $(".nav-drop-title").on('click', function (event) {
        $(this).parent().toggleClass('open');
    });
    $(".nav-item").on('click', function (event) {
        $(this).parent().parent().removeClass('open');
    });

    $(".outs__item-btn").on('click', function (event) {
        $(this).parent().addClass('opn');
    });

    $('.js-services-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.js-reviews-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.js-reviews-partners-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.js-benefit-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        adaptiveHeight: true
    });

    $(window).on('load resize', function () {
        if ($(window).width() < 991) {
            $('.js-plus-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                adaptiveHeight: true
            });
        }
    });

    $(window).on('load resize', function () {
        if ($(window).width() < 768) {
            $('.js-compilation').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                adaptiveHeight: true
            });
            $('.otz__inner').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                adaptiveHeight: true
            });
            $('.js-doc-w-mob').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                adaptiveHeight: true
            });
            $('.js-mb-tr').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                adaptiveHeight: true
            });
            $('.js-mb-tr2').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                adaptiveHeight: true
            });
            $('.js-lt-mob').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                adaptiveHeight: true
            });
        }
    });
});
//# sourceMappingURL=app.js.map
