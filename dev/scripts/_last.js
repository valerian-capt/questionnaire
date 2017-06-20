(function($){

    var init = function init() {
        clickMenu();
        customSelect();
        customSlider();
        customSticky();
    };

    var clickMenu = function() {
        $("#menuButton").click(function(){
            $(".menu").toggleClass('active');
        });
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
        });
    };

    init();
})(jQuery);