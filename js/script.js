
// Burger menu start
const headerNav = document.querySelector('.header__nav')
const headerBurger = document.querySelector('.header__burger')
const headerNavClose = document.querySelector('.header__nav-close')
const navItemAccount = document.querySelector('.nav__item_account')

headerBurger.addEventListener('click', function(){
    headerNav.classList.add('header__nav_active');
})

headerNavClose.addEventListener('click', function(){
    headerNav.classList.remove('header__nav_active');
})
// Burger menu end

// Popup RS start
const headerBtn = document.querySelector('.header__btn');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');

headerBtn.addEventListener('click', function(){
    popup.classList.add('open');
    popupContent.classList.add('open_content');
})

// Меняю форму попап при клике
const popupRegister = document.getElementById('popup_register');
const popupTitle = document.querySelector('.popup__title');
const popupDelimiter = document.querySelector('.popup__delimiter_block');
const popupBtnFacebook = document.querySelector('.popup__btn_facebook');
const popupBtnGoogle = document.querySelector('.popup__btn_google');


popupRegister.addEventListener('click', function(){
    popupTitle.innerHTML = 'Create account';
    popupRegister.innerHTML = 'Log in';
    popupDelimiter.classList.toggle('block');
    popupBtnFacebook.classList.toggle('block');
    popupBtnGoogle.classList.toggle('block');
})

// Пытаюсь поменять текст при клике (не работает)
popupRegister.addEventListener('click', function(){
    if (popupTitle === 'Create account') {
        popupTitle.innerHTML = 'Log in to your account';
        popupRegister.innerHTML = 'Register';
    } else {
        popupTitle.innerHTML = 'Create account';
        popupRegister.innerHTML = 'Log in';
    }
})

// Закрываю попап при клике на область вокруг
popup.addEventListener('click', (event) => {
    if (event.target.classList.contains ('popup_area')) {
        popupContent.classList.add('close_content');
        popup.classList.add('close');
    }
})

// Popup RS end



/*

const popupRegister = document.getElementById('popup.register');

const toggleRedClass = (element) => {
    element.classList.toggle('red');
}

const toggleElementText = (element, text) => {
    element.innerHTML = text;
}

const handleClick = (event) => {
    const element = event.target;
    toggleRedClass (element);
    toggleElementText (element, 'Cool text!');
}


popupRegister.addEventListener('click', handleClick)

*/