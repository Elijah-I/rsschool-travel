// Popup RS start

// Popup RS end


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



//Попап по видео Фрилансера
const popupLinks = document.querySelector('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelector('.lock-padding');

let unlock = true;

const timeout = 800;

//Ищем все ссылки, которые открывают попап
if (popupLinks.length > 0) {
    for ( let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup); //вызываем попап
            e.preventDefault(); //блокируем обновление ссылки
        });
    }
}

//Если бы у попапа был крестик или кнопка выхода
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

//Функция открытия попапа
function popupOpen (curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock(); //Блочим сролл
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            //Закрываем при клике на темную область,т.е. если у нажатого объекта нет этого класса
            if (!e.target.closest('.popup__content')) { 
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

//Скрываем скролл
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.lockPadding = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

//Блокируем на время открытия попапа
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.wich === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});



//For inspectors
console.log('1) Вёрстка соответствует макету. Ширина экрана 390px +48\n2) Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n3) На ширине экрана 390рх и меньше реализовано адаптивное меню +18 из 22, т.к. меню не закрывается, если кликнуть вне него');
console.log('81/75');



/*
//Active pop-up onclick Login
document.querySelector('.header__btn').addEventListener('click', function(){
    document.querySelector('.popup').classList.add('.popup.open');
    })

*/
/*
function popupOpen(currentPopup) {

currentPopup.classList.add('popup__active');
currentPopup.addEventListener('click', function(e){
    if (!e.target.closest('.popup__content')) {
        document.querySelector('.popup').classList.remove('popup__active');;
    }
}
);
}
/*
if (currentPopup) {
    const popupActive = document.querySelector('.popup');
    if (popupActive) {
        pop
    }
}
}
*/




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
