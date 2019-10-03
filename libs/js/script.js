$( document ).ready(function() {

    $("#back-to-top").click(function () {
        $("html, body").animate({scrollTop : 0},"slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >=300) {
            $('#back-to-top').show();
        }
        else {
            $('#back-to-top').hide();
        }
    });
    $('.img-prod').viewbox();
    $('.img-prod-libs').viewbox();

    var vb = $('#popup').viewbox();
    $('.popup-open-button').click(function(){
        vb.trigger('viewbox.open');
    });
    $('.close-button').click(function(){
        vb.trigger('viewbox.close');
    });

    // begin js menumb

    var html = $('html, body'),
        navmenu = $('.menu'),
        navToggle = $('.nav-toggle'),
        navDropdownToggle = $('.has-dropdown'),
        overlay = $("<div class='overlay'></div> ");

    navToggle.on('click', function(e) {
        overlay.toggle();
        var $this = $(this);
        e.preventDefault();
        $this.toggleClass('is-active');
        navmenu.toggleClass('is-visible');
        html.toggleClass('nav-open');
    });

    $( "body" ).prepend(overlay);
    overlay.click(function(){
        navToggle.trigger('click');
    });
    $(".nav-dropdown").hide();
    navDropdownToggle.on('click', function() {
        var $this = $(this);
        $(".nav-dropdown").slideUp();
        if(!$(this).children('ul').is(":visible"))
        {
            $(this).children('ul').slideDown();
        }
        $this.toggleClass('is-active').siblings().removeClass('is-active');
    });

    navDropdownToggle.on('click', '*', function(e) {
        e.stopPropagation();
    });

    // end menumb
});
if (window.innerWidth > 768) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 840) {
            $('#main-nav').addClass('fixed');
        } else {
            $('#main-nav').removeClass('fixed');
        }
    });
}
$(function() {
    $(".slider-fb").owlCarousel({
        items: 3,
        responsive: {
            1200: { item: 3, },// breakpoint from 1200 up
            982: { items: 3, },
            768: { items: 2, },
            480: { items: 1, },
            0: { items: 1, }
        },
        rewind: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 500, //slide speed smooth

        dots: false,
        dotsEach: false,
        loop: true,
        nav: true,
        navText: ['', ''],
        // navSpeed: 250, //slide speed when click button

        autoWidth: false,
        margin: 30,

        lazyContent: false,
        lazyLoad: false,

        animateIn: false,
        animateOut: false,

        center: false,
        URLhashListener: false,

        video: false,
        videoHeight: false,
        videoWidth: false,
    });
});