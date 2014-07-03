$(function () {
    'use strict';
    $('.sidebar-container').hover(
        function () {
            $(this).closest('.sidebar').addClass('sidebar_active');
        },
        function () {
            $(this).closest('.sidebar').removeClass('sidebar_active');
        });
});