const burger = document.querySelector('.header-burger'),
      menuBurger = document.querySelector('.menu'),
      body = document.body,
      sublinkMenu = document.querySelectorAll('.sub'),
      menuLink = document.querySelectorAll('.item__link ');

burger.addEventListener('click', (event) => {
    burger.classList.toggle('active');
    menuBurger.classList.toggle('active');
    body.classList.toggle('lock');
});


sublinkMenu.forEach((event)=>{
    event.addEventListener('click',(e)=>{
        e.target.classList.toggle('active');
        if (e.target.classList.contains('active')){
            e.target.nextElementSibling.classList.add('active');
            e.target.parentElement.children[2].classList.add('active');
        } else {e.target.nextElementSibling.classList.remove('active');
        e.target.parentElement.children[2].classList.remove('active');}
    })
})
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