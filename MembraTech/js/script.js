
// function testWebP(callback) {
//     var webP = new Image();
//     webP.onload = webP.onerror = function () {
//         callback(webP.height == 2);
//     };
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }
    
// testWebP(function (support) {   
//     if (support == true) {
//         document.querySelector('body').classList.add('webp');
//     } else {
//         document.querySelector('body').classList.add('no-webp');
//     }
// });

$(document).ready(function() {
    // СЛАЙДЕР
    $('.news-slider').slick({
        arrows: true,
        rtl: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    // Подсчет шагов в слайдере
    let len = $('.news-slider__item').length/3,
        step = 1;
    console.log(`${step}/${len}`);
    $('.slick-prev').after(`<b class="step">${step} / ${len}</b>`);
    $('.slick-arrow').click(function() {
        $('.step').remove();
        if ($(this).hasClass('slick-next') && step < len) {
            step+=1;
            console.log(`${step}/${len}`);
        }
        if ($(this).hasClass('slick-prev') && step > 1) {
            step-=1;
            console.log(`${step}/${len}`);
        }
        $('.slick-prev').after(`<b class="step">${step} / ${len}</b>`);
    });

});

