require([
    'jquery'
], function ($) {
    $(document).ready(function(){
        $('span.more-content').addClass('hide');
        $('.readshow, .readhide').removeClass('hide');
        $('a.readshow').click( function(e) {
            $(this).next('span.more-content').removeClass('hide');
            $(this).addClass('hide');
            e.preventDefault();
        });
        $('a.readhide').click( function(e) {
            var p = jQuery(this).parents('span.more-content');
            p.addClass('hide');
            p.prev('a.readshow').removeClass('hide');
            e.preventDefault();
        });
    });
});