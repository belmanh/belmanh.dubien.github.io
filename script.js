$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //DEBUT

    $("#scroll_icon").click(function()
        {
            jQuery('html,body').animate({scrollTop:0},2000);
        })

	
    $('#id a').on('click', function (e) {

    // Define variable of the clicked »a« element (»this«) and get its href value.
    var href = $(this).attr('href')

    // Run a scroll animation to the position of the element which has the same id like the href value.
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, '300')

    // Prevent the browser from showing the attribute name of the clicked link in the address bar
    e.preventDefault()

    })



    // FIN

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "YouTuber", "Designer", "Videographer", "Freelancer", "Photo model"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "YouTuber", "Designer", "Videographer", "Freelancer", "Photo model"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 200,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false,
            },
            600:{
                items: 2,
                nav: false,
            },
            1000:{
                items: 3,
                nav: false,
            },
        }
    });

});