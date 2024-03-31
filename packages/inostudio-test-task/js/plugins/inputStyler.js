(function ($) {
    $.fn.inputStyler = function (options) {
        options = $.extend({
            inputType: 'text',
            bgPosText:   ['right -572px', 'right -485px', '0 -529px', '0 -445px'],
            bgPosSearch: ['right -754px', 'right -664px', '0 -718px', '0 -623px']
        }, options);

        function setTextBackground(obj, bgPosition) {
            obj.on('focusin', function () {
                $(this)
                    .parent().css('backgroundPosition', bgPosition[0])
                    .parent().css('backgroundPosition', bgPosition[2]);
            });
            obj.on('focusout', function () {
                $(this)
                    .parent().css('backgroundPosition', bgPosition[1])
                    .parent().css('backgroundPosition', bgPosition[3]);
            });
        };

        function setSearchBackground(obj, bgPosition) {
            obj.on('focusin', function () {
                $(this)
                    .parent().css('backgroundPosition', bgPosition[0])
                    .parent().css('backgroundPosition', bgPosition[2])
                    .closest('form').find('input[type=submit]').css('backgroundPosition', '-166px -86px');
            });
            obj.on('focusout', function () {
                $(this)
                    .parent().css('backgroundPosition', bgPosition[1])
                    .parent().css('backgroundPosition', bgPosition[3])
                    .closest('form').find('input[type=submit]').css('backgroundPosition', '-166px -56px');
            });
        };
        switch (options.inputType) {
        case 'text':
            return this.each(function () {
                $(this).wrap('<div class="input-wr"><div class="input-wr-inner"></div></div>');
                setTextBackground($(this), options.bgPosText);
            });
        case 'search':
            return this.each(function () {
                $(this).wrap('<div class="input-wr"><div class="input-wr-inner"></div></div>');
                setSearchBackground($(this), options.bgPosSearch);
            });
        }
    };
})(jQuery);
