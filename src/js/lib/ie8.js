var ie8 = (function ($) {

    if($("html").hasClass("lt-ie9") ) {

        $('img[src$=".svg"]').each(function() {
            var $img = $(this);
            console.log($img.attr('src'))
            $img.attr('src', $img.attr('src').replace(/svg$/, 'png'));
        });
    }

})(jQuery);
