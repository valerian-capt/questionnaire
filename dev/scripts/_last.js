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
                cursorcolor: "#d9d9d9",
                cursorwidth: "5px",
                cursorborder: "none",
                railpadding: { top: 0, right: 5, left: 5, bottom: 0 },
                cursorborderradius: "3px",
                horizrailenabled: false
            });
    };

    var customSlider = function() {
        $( "#slider" ).slider({
            range: "min",
            value: 50
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

    var checkTextArea = function() {
        var area = $('#liked-text');
        var text = area.val();
        if (text !== '') {
            area.addClass('textarea-active');
        } else {
            area.removeClass('textarea-active');
        }
    };

    var onScroll = function(event){
        var scrollPos = $(document).scrollTop();
        var firstLink = $('#menu a').first().position().top;
        $('#menu a').each(function (index ) {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() >= scrollPos) {
                $('#menu a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });

        if (scrollPos <= firstLink) {
            $('#menu a').first().addClass('active');
        }
    }

    return {
        init: init,
        onScroll: onScroll,
        checkInput: checkInput,
        checkTextArea: checkTextArea
    }

})(jQuery);

$(document).ready(function(){
    $(document).on("scroll", initObj.onScroll);
    $(".questionnaire-form").on("change", initObj.checkInput);
    $('#liked-text').on("change", initObj.checkTextArea);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
      
        var target = this.hash,
            indent = 10,
            menu = target,
            navHeight = $('.nav').height();
        $target = $(target);
        var top = $target.offset().top - navHeight - indent;
        $('html, body').stop().animate({
            'scrollTop': top
        }, 500, function () {
            $(document).on("scroll", initObj.onScroll);
        });
        window.location.hash = target;
        return false;
    });

    initObj.init();
    initObj.checkInput();
});