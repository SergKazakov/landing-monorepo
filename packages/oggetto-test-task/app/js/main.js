$(function () {
    'use strict';
    var sidebar = $('#sidebar'),
        sidebarContainer = $('#sidebar-container'),
        sidebarDuration = 150,
        galleryImgContainer = $('#gallery').find('.gallery-img-container'),
        galleryImgDuration = 500,
        footerNav = $('#footer-bottom-nav');

    if (!Modernizr.csstransitions && Modernizr.rgba) {
        sidebarContainer.hover(
            function () {
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
        galleryImgContainer.hover(
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
                    .stop()
                    .animate({
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
        sidebarContainer.hover(
            function () {
                sidebar.addClass('sidebar_active');
            },
            function () {
                sidebar.removeClass('sidebar_active');
            });
    }
    if (Modernizr.csstransitions) {
        sidebarContainer.hover(
            function () {
                sidebar.addClass('sidebar_active');
            },
            function () {
                sidebar.removeClass('sidebar_active');
            });
    }
    if (!Modernizr.csstransforms) {
        footerNav.css('margin-left', -footerNav.innerWidth() / 2);
    }
});