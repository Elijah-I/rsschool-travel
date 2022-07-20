
// Burger-menu start
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
// Burger-menu end

// Popup start
const headerBtn = document.querySelector('.header__btn');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');

headerBtn.addEventListener('click', function(){
    popup.classList.add('open');
    popupContent.classList.add('open_content');
})

// Открываю попап при клике на бургер-меню (само мюню закрываю)
const navLinkAccount = document.querySelector('.nav__link_account');

navLinkAccount.addEventListener('click', function(){
    popup.classList.add('open');
    popupContent.classList.add('open_content');
    headerNav.classList.remove('header__nav_active');
})

// Меняю форму попап при клике
// Проблема: не работает плавная анимация (transition у класса .block)
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

// Проблема: пытаюсь поменять текст при клике (не работает)
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
// Проблема: снова попап открыть можно только после обновления страницы
popup.addEventListener('click', (event) => {
    if (event.target.classList.contains ('popup_area')) {
        popupContent.classList.add('close_content');
        popup.classList.add('close');
    }
})
// Popup end

// Destinations slider start
function slimper($sliderContainer) {
    let $buttonContainer = $sliderContainer.querySelector('.buttons-slider');
    let $dotsContainer = $sliderContainer.querySelector('.dots-list');
    let $slideContainer = $sliderContainer.querySelectorAll('.slide img');
    let currentSlide = 0;
    
    $buttonContainer.querySelector('.btn-left').addEventListener('click',function(){
      if(currentSlide > 0){
        return showSlide(currentSlide - 1);
      }
      showSlide($slideContainer.length - 1);
    });
    
    $buttonContainer.querySelector('.btn-right').addEventListener('click',function(){
      if(currentSlide < $slideContainer.length - 1) {
        return showSlide(currentSlide + 1);
      }
      showSlide(0);
    });
    
    $slideContainer.forEach(function(slide,i){
      slide.style.opacity = 0;
    });
    
    function showSlide(slideIndex) {
      let $oldSlide = $slideContainer[currentSlide];
      let $newSlide = $slideContainer[slideIndex];
      
      if($oldSlide){
        $oldSlide.style.opacity = 0;
        $oldSlide.dot.classList.remove('active');
      } 
      $newSlide.style.opacity = 1;
      $newSlide.dot.classList.add('active');
      
      currentSlide = slideIndex;
      return true;
      
    }
    
    function buildDots() {
      if(!$dotsContainer){
        $dotsContainer = document.createElement('div');
        $dotsContainer.classList.add('dots-list');
        $sliderContainer.appendChild($dotsContainer);
      }
      for(let i = 0; i < $slideContainer.length; i++) {
        let $dot = document.createElement('span');
        $dot.classList.add('dots-item');
        $dot.addEventListener('click', showSlide.bind(this,i));
        $dotsContainer.appendChild($dot);
        $slideContainer[i].dot = $dot;
      }
    }
    
    buildDots();
    showSlide(0); 
  }
  
  slimper(document.querySelector('.slider'));

// Destinations slider end