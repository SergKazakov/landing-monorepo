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
                galleryItems
                .hide()
                .filter('.gallery__item--' + dataClass)
                .fadeIn();
            } else {
                galleryItems.fadeIn();
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

    /* fix vertical when not overflow
    call fullscreenFix() if .fullscreen content changes */
    function fullscreenFix(){
        var h = $('body').height();
        // set .fullscreen height
        $(".content-b").each(function(i){
            if($(this).innerHeight() <= h){
                $(this).closest(".fullscreen").addClass("not-overflow");
            }
        });
    }
    $(window).resize(fullscreenFix);
    fullscreenFix();

    /* resize background images */
    function backgroundResize(){
        var windowH = $(window).height();
        $(".background").each(function(i){
            var path = $(this),
            // variables
                contW = path.width(),
                contH = path.height(),
                imgW = path.attr("data-img-width"),
                imgH = path.attr("data-img-height"),
                ratio = imgW / imgH,
                remainingH = 0,
            // overflowing difference
                diff = parseFloat(path.attr("data-diff"));
            diff = diff ? diff : 0;
            // remaining height to have fullscreen image only on parallax
            
            if(path.hasClass("parallax")){
                var maxH = contH > windowH ? contH : windowH;
                remainingH = windowH - contH;
            }
            // set img values depending on cont
            imgH = contH + remainingH + diff;
            imgW = imgH * ratio;
            // fix when too large
            if(contW > imgW){
                imgW = contW;
                imgH = imgW / ratio;
            }
            //
            path.data("resized-imgW", imgW);
            path.data("resized-imgH", imgH);
            path.css("background-size", imgW + "px " + imgH + "px");
        });
    }
    $(window).resize(backgroundResize);
    $(window).focus(backgroundResize);
    backgroundResize();
});