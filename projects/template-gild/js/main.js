'use strict';

const filterTitles = document.querySelectorAll('.filter__title');
const btnFilterReset = document.querySelector('.btn-filter-reset');
const catalogSelect = document.querySelector('.catalog-select');
const menuBurger = document.querySelector('.menu-icon-wrapper');
const filterShowBtn = document.querySelector('.filter-show-btn');

// Скрипт для бургера
menuBurger.addEventListener('click', function() {
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
});


// Скрипт для фильтра
filterTitles.forEach(function (elem) {
  elem.addEventListener('click', function(evt) {
    evt.currentTarget.closest('.filter').classList.toggle('filter--open')
  });
});


// Скрипт кастомного селектора
catalogSelect.addEventListener('click', function(evt) {
  catalogSelect.classList.toggle('catalog-select--open');

  if (evt.target.classList.contains('catalog-select__item')) {
    let text = evt.target.textContent;
    document.querySelector('.catalog-select__top').textContent = text;
  }
});

// Скрпит для раскрывающегося фильтра
filterShowBtn.addEventListener('click', function () {
  let showBtnText = document.querySelector('.filter-show-btn__text')
  document.querySelector('.filter-form').classList.toggle('filter-form--show');

  const filters = document.querySelectorAll('.filter');
  filters.forEach(filter => {
    if (filter.classList.contains('filter--open')) {
      filter.classList.remove('filter--open')
    }
  });

  if (showBtnText.textContent === 'Закрыть фильтры') {
    showBtnText.textContent = 'Окрыть фильтры';
  } else {
    showBtnText.textContent = 'Закрыть фильтры';
  }
});

let sliderOne = document.querySelector(".filter-range__input-1");
let sliderTwo = document.querySelector(".filter-range__input-2");
let displayValOne = document.querySelector(".filter-range__value-1");
let displayValTwo = document.querySelector(".filter-range__value-2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.querySelector(".filter-range__input-1").max;

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value + ' кв.м.';
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value + ' кв.м.';
}

sliderOne.addEventListener('input', slideOne)
sliderTwo.addEventListener('input', slideTwo)




