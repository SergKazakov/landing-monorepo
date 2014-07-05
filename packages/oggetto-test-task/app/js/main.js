$(function () {
    'use strict';
    var sidebarDuration = 150,
        galleryImgDuration = 500;

    if (!Modernizr.csstransitions && Modernizr.rgba) {
        $('.sidebar-container').hover(
            function () {
                var sidebar = $(this).closest('.sidebar');
                sidebar
                    .stop()
                    .animate({
                        backgroundColor: 'rgba(20, 24, 33, 0.8)'
                    }, {
                        duration: sidebarDuration,
                        specialEasing: {
                            backgroundColor: 'linear',
                        },
                        complete: function () {
                            sidebar.addClass('sidebar_active');
                        }
                    });
            },
            function () {
                var sidebar = $(this).closest('.sidebar');
                sidebar
                    .stop()
                    .animate({
                        backgroundColor: 'transparent'
                    }, {
                        duration: sidebarDuration,
                        specialEasing: {
                            backgroundColor: 'linear',
                        },
                        complete: function () {
                            sidebar.removeClass('sidebar_active');
                        }
                    });
            });
    }
    if (!Modernizr.csstransitions) {
        $('.gallery-img-container').hover(
            function () {
                $(this)
                    .find('.gallery__img-hover')
                    .stop()
                    .animate({
                        'opacity': 1
                    }, galleryImgDuration);

                $(this)
                    .find('.gallery__img-overlay')
                    .addClass('iergba')
                    .stop().
                animate({
                    'opacity': 1
                }, galleryImgDuration);
            },
            function () {
                $(this)
                    .find('.gallery__img-hover')
                    .stop()
                    .animate({
                        'opacity': 0
                    }, galleryImgDuration);

                $(this)
                    .find('.gallery__img-overlay')
                    .removeClass('iergba')
                    .stop()
                    .animate({
                        'opacity': 0
                    }, galleryImgDuration);
            });
    }
    if (!Modernizr.rgba) {
        $('.sidebar-container').hover(
            function () {
                $(this)
                    .closest('.sidebar')
                    .addClass('sidebar_active');
            },
            function () {
                $(this)
                    .closest('.sidebar')
                    .removeClass('sidebar_active');
            });
    }
    if (Modernizr.csstransitions) {
        $('.sidebar-container').hover(
            function () {
                $(this)
                    .closest('.sidebar')
                    .addClass('sidebar_active');
            },
            function () {
                $(this)
                    .closest('.sidebar')
                    .removeClass('sidebar_active');
            });
    }
    if (!Modernizr.csstransforms) {
        $('.js-align').css('margin-left', -$('.js-align').innerWidth() / 2);
    }
});