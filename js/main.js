$(document).ready(function(){

    /* Main Menu */
    $(document).on("scroll", function(){
        if
        ($(document).scrollTop() > 86){
            $("#banner").addClass("shrink ");
            $("#banner").addClass("header-top-area");
        }
        else
        {
            $("#banner").removeClass("shrink");
            $("#banner").removeClass("header-top-area");

        }
    });

    /* Slider */
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    var mixer = mixitup('#container');

    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
    });
});