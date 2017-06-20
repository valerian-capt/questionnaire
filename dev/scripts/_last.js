var initObj = (function($){

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

    var checkInput = function() {
        $("[type='text'],[type='email']").each(function(){
            if (this.value !== "") 
                $(this).addClass('input-active');
            else 
                $(this).removeClass('input-active');
        });
    };

    var onScroll = function(event){
        var scrollPos = $(document).scrollTop();
        $('#menu a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#menu a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }


    return {
        init: init,
        onScroll: onScroll,
        checkInput: checkInput
    }

})(jQuery);

$(document).ready(function(){
    $(document).on("scroll", initObj.onScroll);
    $(document).on("change", initObj.checkInput);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            indent = 10,
            menu = target,
            navHeight = $('.nav').height();
        $target = $(target);
        var top = $target.offset().top - navHeight - indent;
        $('html, body').stop().animate({
            'scrollTop': top
        }, 500);
        window.location.hash = target;
        $(document).on("scroll", initObj.onScroll);
        return false;
    });

    initObj.init();
    initObj.checkInput();
});