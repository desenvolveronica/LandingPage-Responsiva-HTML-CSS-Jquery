$(document).ready(function(){
    $('.menu_btn').click(function(){
        $('.menu-mobile').slideToggle("slow")
    })
    $('.home-mobile').click(function(){
        $('.menu-mobile').slideToggle("slow")
    })
    $('.about-mobile').click(function(){
        $('.menu-mobile').slideToggle("slow")
    })
    $('.news-mobile').click(function(){
        $('.menu-mobile').slideToggle("slow")
    })
    $('.contact-mobile').click(function(){
        $('.menu-mobile').slideToggle("slow")
    })

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.header').addClass("sticky")
        }else {
            $('.header').removeClass("sticky")
        }
    })
})