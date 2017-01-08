(function(window, document, $) {
    $(document).ready(function() {
        if ($(window).width() > 960) {
            var siteContent = $('.site-content');
            siteContent.animate({
                right: '0',
                opacity: 1
            }, 1400);
        }
    });
})(window, document, require('jquery'));