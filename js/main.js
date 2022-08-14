'use strict'

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const out = document.querySelector('.out');
  const popup = document.querySelector('.popup');
  // const outEmail = document.querySelector('.out-email');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);

    if (error === 0) {
      popupOpen();

      const name = formData.get('name');
      const email = formData.get('email');
      const textarea = formData.get('description');

      var checkboxes = document.getElementsByClassName('checkbox');
      var checkboxesChecked = [];
      for (var index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
          checkboxesChecked.push(checkboxes[index].value);
        }
      }

      console.log(name, email, textarea, checkboxesChecked); //вывод в консоль
      // formPreview.innerHTML = " ";
      // form.reset();

    } else {
      // alert("Заполните, пожалуйста, обязательные поля");
    }
  }


  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);
      if (input.value === "") {
        formAddError(input);
        error++;
        out.innerHTML = 'Введите имя';
      }
    }
    return error;
  }


  function formAddError(input) {
    input.parentElement.classList.add('error');
    input.classList.add('error');
  };

  function formRemoveError(input) {
    input.parentElement.classList.remove('error');
    input.classList.remove('error');
  }

  function popupOpen() {
    popup.classList.add('active');
  }
})


const menuBtn = $(".btn"),
  menu = $(".popup");

menuBtn.on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    menu.slideUp();
  } else {
    $(this).addClass("active");
    menu.slideDown();
  }
});

$(document).click(function (e) {
  if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
    menu.slideUp();
    menuBtn.removeClass("active");
  };
});


const publicationsSlider = new Swiper('.publications__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 800,
  navigation: {
    prevEl: '.slider-arrow-prev',
    nextEl: '.slider-arrow-next',
  },

  breakpoints: {

    769: {
      slidesPerView: 3,
    }
  }
});


// мобильное меню
const iconMenu = document.querySelector('.menu-btn');
const menuMob = document.querySelector('.header__nav');
const anchors = document.querySelectorAll('a[href*="#"]');


if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuMob.classList.toggle('active');
  });
}

// плавная прокрутка

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()
    let blockID = anchor.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"

    })
    if (iconMenu.classList.contains('active')) {
      document.body.classList.remove('lock');
      iconMenu.classList.remove('active');
      menuMob.classList.remove('active');
    }
  })
}