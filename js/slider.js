const swiper = new Swiper('.swiper', {

    speed: 1500,
    parallax: true,
    effect: 'slide', 

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    pagination:{
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        type: "progressbar" 
    },


    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    }

  });
