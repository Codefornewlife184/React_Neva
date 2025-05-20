(function ($) {
    "use strict";

    // Mobile Navigation
    if ($('.mobile-nav__container').length) {
        $('.mobile-nav__container .dropdown-btn').on('click', function() {
            $(this).parent().toggleClass('active');
        });
    }

    // Sticky Header
    if ($('.sticky-header').length) {
        var stickyHeader = $('.sticky-header');
        var scrollPosition = $(window).scrollTop();
        
        $(window).on('scroll', function() {
            scrollPosition = $(window).scrollTop();
            if (scrollPosition > 100) {
                stickyHeader.addClass('sticky');
            } else {
                stickyHeader.removeClass('sticky');
            }
        });
    }

    // Mobile Menu Toggle
    if ($('.mobile-nav-toggler').length) {
        $('.mobile-nav-toggler').on('click', function(e) {
            e.preventDefault();
            $('.side-menu__block').toggleClass('side-menu__block-inner-active');
            $('.side-menu__block-overlay').toggleClass('active');
        });
    }

    // Close Mobile Menu
    if ($('.side-menu__close-btn').length) {
        $('.side-menu__close-btn').on('click', function(e) {
            e.preventDefault();
            $('.side-menu__block').removeClass('side-menu__block-inner-active');
            $('.side-menu__block-overlay').removeClass('active');
        });
    }

    // Mobile Menu Overlay
    if ($('.side-menu__block-overlay').length) {
        $('.side-menu__block-overlay').on('click', function() {
            $('.side-menu__block').removeClass('side-menu__block-inner-active');
            $(this).removeClass('active');
        });
    }

})(jQuery); 