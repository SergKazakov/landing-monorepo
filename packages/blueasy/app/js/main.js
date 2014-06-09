$(function() {
    'use strict';

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
                filterItems.fadeIn();
            } else galleryItems.fadeIn();
        }
    });

    //    nav
    $('a[href^=#]').on('click', function() {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
        return false;
    });
});