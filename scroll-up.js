$(document).ready(function(){
    const navbar = $('.navbar');
    const scrollUpBtn = $('.scroll-up-btn');
    const STICKY_THRESHOLD = 20;
    const SHOW_THRESHOLD = 500;

    $(window).scroll(function(){
        toggleStickyClass(this.scrollY, navbar, STICKY_THRESHOLD);
        toggleShowClass(this.scrollY, scrollUpBtn, SHOW_THRESHOLD);
    });
    
    scrollUpBtn.click(function(){
        $('html').animate({scrollTop: 0});
    });
});

function toggleStickyClass(scrollPosition, element, threshold){
    if(scrollPosition > threshold){
        element.addClass("sticky");
    }else{
        element.removeClass("sticky");
    }
}

function toggleShowClass(scrollPosition, element, threshold){
    if(scrollPosition > threshold){
        element.addClass("show");
    }else{
        element.removeClass("show");
    }
}
