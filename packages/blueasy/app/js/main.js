$(function() {
    'use strict';

    var windowWidth = $(window).width(),
        bigScreen = windowWidth > 993,
        middleScreen = windowWidth < 993 && windowWidth > 480;

    function marginRecalc(mas) {
        if (bigScreen) {
            mas.each(function(i, item) {
                if (i % 4 === 0) {
                    $(item).css('margin-left', 0);
                } else {
                    $(item).css('margin-left', '2.5641%');
                }
            });
        } else if (middleScreen) {
            mas.each(function(i, item) {
                if (i % 2 === 0) {
                    $(item).css('margin-left', 0);
                } else {
                    $(item).css('margin-left', '4%');
                }
            });
        }
        return mas;
    };

    //    filter
    var filterItem = 'filter__item-link';
    $('.' + filterItem).on('click', function(e) {
        e.preventDefault();
        var activeClass = filterItem + '--active';
        if (!$(this).hasClass(activeClass)) {
            $('.' + filterItem).removeClass(activeClass);
            $(this).addClass(activeClass);
            var dataClass = $(this).data('class');
            var galleryItems = $('.gallery__item');
            if (dataClass != 'all') {
                galleryItems.hide();
                var filterItems = galleryItems.filter('.gallery__item--' + dataClass);
                marginRecalc(filterItems).fadeIn();
            } else {
                marginRecalc(galleryItems).fadeIn();
            }
        }
    });

    //    nav
    $('.nav__item').on('click', function() {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
        return false;
    });

    responsiveNav(".nav-collapse");
    $('.nav-toggle').html('<span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>');
});