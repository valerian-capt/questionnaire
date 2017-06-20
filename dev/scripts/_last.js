(function($){

    var init = function init() {
        customSelect();
        customSlider();
        customSticky();
    };

    var customSelect = function() {
        $("#speed")
            .selectmenu()
            .selectmenu("menuWidget")
            .addClass( "overflow" )
            .niceScroll({
                cursorcolor:"#00F", horizrailenabled: false
            });
    };

    var customSlider = function() {
        $( "#slider" ).slider({
            range: "min"
        });
    };

    var customSticky = function() {
        $("#menu").sticky({
            topSpacing:0
        })        
        .slicknav({label: ''});
    };

    init();
})(jQuery);