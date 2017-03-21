var ie8 = (function ($) {

    if($("html").hasClass("ie8") ) {

        $('img[src$=".svg"]').each(function() {
            var $img = $(this);
            console.log($img.attr('src').replace(/svg$/, 'png'));
            $img.attr('src', $img.attr('src').replace(/svg$/, 'png'));
        });
    }


})(jQuery);
