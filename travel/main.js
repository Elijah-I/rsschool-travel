
// Burger handler
document.querySelector('.header__burger').addEventListener('click', function(){
document.querySelector('.header__nav').classList.add('header__nav_active');
})

document.querySelector('.header__nav-close').addEventListener('click', function(){
document.querySelector('.header__nav').classList.remove('header__nav_active');
})

//Close Account onclick
document.querySelector('.nav__item_account').addEventListener('click', function(){
document.querySelector('.header__nav').classList.remove('header__nav_active');
})

//For inspectors
console.log('1) Вёрстка соответствует макету. Ширина экрана 390px +48\n2) Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n3) На ширине экрана 390рх и меньше реализовано адаптивное меню +18 из 22, т.к. меню не закрывается, если кликнуть вне него');
console.log('81/75');



/*(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());
*/

/*
(function () {
    const burgerItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click' , () => {
        menu.classList.remove('header__nav_active');
    });
});
*/
