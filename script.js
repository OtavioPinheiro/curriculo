$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-container').addClass("show");
        }else{
            $('.scroll-container').removeClass("show");
        }
    });

    $('.scroll-up-btn').mouseenter(function(){
        $('.scroll-text').addClass('hover');
    }).mouseleave(function(){
        $('.scroll-text').removeClass('hover');
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["QA", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["QA", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    window.addEventListener("scroll", () => {
        skillsEffect();
    });

    const skills_wrap = document.querySelector(".card");

    function checkScroll(el) {
        let rect = el.getBoundingClientRect();
        if (window.innerHeight >= rect.top + el.offsetHeight) return true;
        return false;
    }
    
    function skillsEffect() {
        if (!checkScroll(skills_wrap)) return;
        percent.addClass("progress-animation");
        setInterval(animate, 50);
    }

    var percent = document.querySelector('.percent');
    // var progress = document.querySelector('.progress');
    var count = 4;
    // var per = 16;
    // var loading = setInterval(animate, 50);
    function animate(){
        // if(count == 100 && per == 400){
        //     percent.classList.add("progress-animation");
        //     clearInterval(loading);
        if(count == 100){
            clearInterval(loading);
        } else {
            // per += 4;
            count++;
            // progress.style.width = per + 'px';
            percent.textContent = count + '%';
        }
    }

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});