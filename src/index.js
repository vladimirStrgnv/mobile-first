import './index.html';
import './index.scss';

// burger-menu

const headerNavMenu = document.querySelector('.header__burger-menu-icon');

headerNavMenu.addEventListener('click', function () {
    document.querySelector('.nav').classList.toggle('open');
    headerNavMenu.classList.toggle('active');
    document.body.classList.toggle('unscroll');
});

// slider

const swiper = new Swiper(".slider", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".slider__next-slide-btn",
      prevEl: ".slider__prev-slide-btn",
    },
    on: {
        slideChange: function () {
            const counter = document.querySelector('.slider__current-slide');
            const sliderNextBtn = document.querySelector('.slider__next-slide-btn');
            const sliderPrevBtn = document.querySelector('.slider__prev-slide-btn');
            const disablClass = 'slider__slide-btn_disabled';
            counter.textContent = swiper.realIndex + 1;
            counter.textContent == 1?sliderPrevBtn.classList.add(disablClass):sliderPrevBtn.classList.remove(disablClass);
            counter.textContent == 4?sliderNextBtn.classList.add(disablClass):sliderNextBtn.classList.remove(disablClass);
        }
    }

});

// popup

const appointmentBtn = document.querySelector('.appointment-btn');

appointmentBtn.addEventListener('click', popupOpen);

const appointmentSliderBtn = document.querySelector('.slider__appointment-btn');

appointmentSliderBtn.addEventListener('click', popupOpen);

function popupOpen() {

    const popup = document.querySelector('.popup');

    popup.classList.add('popup_active');

    const popupClose = document.querySelector('.popup__close-icon');

    popupClose.addEventListener('click', function() {
        popup.classList.remove('popup_active');
    });

}