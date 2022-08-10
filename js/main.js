

// мобильное меню
$('.profile-open').on('click', function (e) {
  e.preventDefault();
  document.body.classList.toggle('lock');
  $('.profile-open').toggleClass("active");
  $('.profile__info').toggleClass("active");
});

// сайдбар пользователя
$('.header__burger-btn').on('click', function (e) {
    e.preventDefault();
    document.body.classList.toggle('lock');
    $('.header__burger-btn').toggleClass("active");
    $('.header__nav').toggleClass("active");
});



// слайдеры

const activitySlider = new Swiper('#destroy-1', {
  slidesPerView: 3.4,
  observer: true,
  observeParents: true,
  loop: true,
  centeredSlides: true,

  navigation: {
      nextEl: '.slider-arrow-next',
      prevEl: '.slider-arrow-prev',
  },
});

if ($('#destroy-1').length) {
  if ($(window).width() <= 769) {
      activitySlider.destroy();
  }
}


const activitySlider2 = new Swiper('#destroy-2', {
  // slidesPerView: 2,
  slidesPerView: 'auto',
  // spaceBetween: 20,
  speed: 800,
  loop: true,

  navigation: {
    nextEl: '.base__arrow-next',
    // prevEl: '.base__arrow-prev',
  },
});

if ($('#destroy-2').length) {
  if ($(window).width() <= 769) {
    activitySlider2.destroy();
  }
}

// табы в профиле
function openTab(evt, tabsName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("profile__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabsName).style.display = "block";
    evt.currentTarget.className += " active";
}


// кнопка "наверх"
var btn = $('.footer__up');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});

// класс active для фильтра (открыть фильтр в мобильной версии)

$('.confectioners__filter-open-btn').on('click', function (e) {
  e.preventDefault();
  document.body.classList.toggle('lock');
  $('.confectioners__filter-open-btn').toggleClass("active");
  $('.confectioners__filter-block').toggleClass("active");
});

// селект в фильтре
$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle();
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp();
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 




const myCustomSlider = document.querySelectorAll('.gallery-top');
const myCustomGalleryThumbs = document.querySelectorAll('.thumbs-class');

for (i = 0; i < myCustomSlider.length; i++) {

    myCustomSlider[i].classList.add('gallery-top-' + i);
    myCustomGalleryThumbs[i].classList.add('thumbs-class-' + i);

    var galleryThumbs = new Swiper('.thumbs-class-' + i , {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        loop: true,
    });

    var galleryTop = new Swiper('.gallery-top-' + i, {
        spaceBetween: 10,
        slidesPerView: 1,
        effect: "fade",
        loop: true,

        navigation: {
              nextEl: ".confectioners__arrow-next",
              prevEl: ".confectioners__arrow-prev",
        },

        thumbs: {
            swiper: galleryThumbs
        }
    }); 
}

// переключение класса active в пагинации
$(".pagination__item").click(function (e) {
  e.preventDefault();
  $(".pagination__item").removeClass('active');
  $(this).addClass('active');
})



// выбор города с поиском на странице "мой профиль"
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");

    searchBox.value = "";
    filterList("");

    if (optionsContainer.classList.contains("active")) {
        searchBox.focus();
    }
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});

searchBox.addEventListener("keyup", function (e) {
    filterList(e.target.value);
});

const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
};

