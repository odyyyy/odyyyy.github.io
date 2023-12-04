const swiper = new Swiper('.swiper', {

    speed: 1000,
    // loop: true,
    // spaceBetween: 100,
    parallax: true,
    effect: 'slide', // fade - ������ ������

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

    breakpoints:{
        720: {
            slidesPerView: 1,
        }
    },

    autoplay: {
        delay: 2000,
        // stopOnLastSlide: true,
        disableOnInteraction: false
    }

  });
