(function (w, document, $) {

    if($(w).width() >= 950 ) {

        var rotatedNavLinks = $('.rotated-navi > li > a');
        var sections = $('.site-content').children();

        $(window).scroll(function() {
            var position = $(this).scrollTop();
            sections.each(function() {
                var target = $(this).attr('id') !== "Contact" ?
                    $(this).offset().top :
                    $(this).offset().top + $(this).height();
                var id = $(this).attr('id');
                if (position >= target) {
                    $('.rotated-navi > li > a').removeClass('active');
                    $('.rotated-navi > li > a[href="#'+id+'"]').addClass('active');
                }
            });
        });

    }

})(window, document, require('jquery'));