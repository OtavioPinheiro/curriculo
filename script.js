const maxWidth = document.querySelector(".content");

//criar barra
let bar = document.createElement("div");
//estilo da barra
bar.style.height = "4px";
bar.style.width = "0";
bar.style.backgroundColor = "#fff"
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "9999";
bar.style.transition = "0.2s"

//adiciona no corpo da página
document.body.append(bar);

//atualizar a barra
function updatedBar() {
    //tamanho da caixa que contém o texto
    const textHeight = maxWidth.offsetHeight;
    
    //verificar em que posição da página estou
    const pagePositionY = window.pageYOffset;
    const maxPagePositionY = 3390;
    
    //lógica
    const percentBar = parseInt(pagePositionY) * 100 / maxPagePositionY;
    bar.style.width = percentBar + "%";
}

//verificar o movimento do scroll
document.addEventListener("scroll", updatedBar);
// document.addEventListener("load", () => {
    
// })

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
        
        if(this.scrollY > 1600 && this.scrollY < 2600){
            $('.progress').addClass("progress-animation");
        }else{
            $('.progress').removeClass("progress-animation");
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
    
    function animate(){
        const percents = document.querySelectorAll('.um');
        // const speed = 100;
        percents.forEach(percent => {
            const updatePercent = () => {
                const target = +percent.getAttribute('data-target').replace('%','');
                const count = +percent.textContent.replace('%','');
                // const inc = parseInt(target / speed);

                console.log("Valor: ", count);
                console.log("Tipo: ", typeof target);

                if(count < target) {
                    percent.textContent = count + 1 + '%';
                    setTimeout(updatePercent, 30);
                } else {
                    count.textContent = target + '%';
                }
            }

            updatePercent();
        })
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