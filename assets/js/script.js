// xử lý menu-mobile//
const btnMenu = document.querySelector(".btn-menu");
const menuMobile = document.querySelector(".menu-mobile");
let isMenuMobile = false;
btnMenu.addEventListener("click",() => {
    if(isMenuMobile == false){

    menuMobile.style.left = "0"
    isMenuMobile = true;
    
    }else{
    
        isMenuMobile = false;
        menuMobile.style.left = "-100%"
    }
    
});
//xử lý thanh nav//
let scrollState = 0;
const head = document.querySelector(".sec");
window.addEventListener('scroll', function(){
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollWidth = document.documentElement.scrollWidth;
    const clientHeight = document.documentElement.clientHeight;
    const scrollDepth = (scrollTop / (scrollHeight - clientHeight)) * 100;
    if(scrollWidth <= 1521 && scrollWidth > 1080){
        if(scrollDepth > 0){
            console.log("xuong");
           head.style.top = "-40px";
         
        }else{
            console.log("len");
            head.style.top = "0px";
        }
    }
    else{
        head.style.top = "0px";
    }
   
   
    console.log(`Độ dài cuộn trang: ${scrollDepth}%`);
    scrollState = scrollDepth;
    console.log(scrollWidth);
   
});
// carolsel tin tức //
$('.carousel-news').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:3000,
    margin:10,
    
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





