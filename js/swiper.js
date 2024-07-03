var swiper = new Swiper('.artsSwiper',{
    grabCursor: true,
    effect:'creative',
    creativeEffect:{
        prev:{
            shadow: false,
            translate:[0,0,-400]
        },
        next:{
            translate:['100%',0,0],
        },
    },
});