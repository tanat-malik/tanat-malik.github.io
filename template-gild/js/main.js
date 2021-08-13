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
  document.querySelector('.filter-form').classList.toggle('filter-form--show')
  if (showBtnText.textContent === 'Закрыть фильтры') {
    showBtnText.textContent = 'Окрыть фильтры';
  } else {
    showBtnText.textContent = 'Закрыть фильтры';
  }
});




