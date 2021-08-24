// Переменные табов
const tabButtons = document.querySelectorAll('[data-card-tab]');
const cardContentBoxes = document.querySelectorAll('[data-tab-content]');
// Переменные слайдера карточки товара
const cardThumbnails = document.querySelectorAll('.card-slider__thumbnail');
const cardFullPhoto = document.querySelector('.card-slider__full-photo img');
// Блок с выбором цвета карточки товара
const cardColor = document.querySelector('.card-color');
// Кастомный селект с доп. опциями
const customSelect = document.querySelector('.card-option-select');



// Счетчик товара
window.addEventListener('click', function(evt) {

  if (evt.target.dataset.action === 'card-minus' || 
      evt.target.dataset.action === 'card-plus') {

    // Находим обертку-родителя элемента счетчик
    const counterWrapper = evt.target.closest(".card-counter-wrapper");
    // Непосредственно сам див с числом
    const counter = counterWrapper.querySelector("[data-card-counter]");

    // Проверяем, явл-ся ли элемент, кнопкой Плюс
    if (evt.target.dataset.action === 'card-plus') {
      ++counter.textContent;
    }

    // Проверяем, явл-ся ли элемент, кнопкой Минус
    if (evt.target.dataset.action === 'card-minus') {
      if (parseInt(counter.innerText) > 1) {
        --counter.textContent;
      }
    }
  }

});




// Табы товара
tabButtons.forEach(function (tabButton) {

  tabButton.addEventListener('click', function() {

    // Удаляем класс
    tabButtons.forEach(function (activeTab) {
      activeTab.classList.remove('card-tabs__item--active')
    })

    // Скрыть все cardContentBoxes
    cardContentBoxes.forEach(function (cardContent) {
      cardContent.classList.add('card-tabs__desc--hidden');
    });

    // Показать нужный content box
    const contentBox = document.querySelector('#' + this.dataset.cardTab);
    contentBox.classList.remove('card-tabs__desc--hidden');
    // Добавить табу активный класс
    tabButton.classList.add('card-tabs__item--active');

  });

});





// Слайдер карточки товара
cardThumbnails.forEach(item => {
  item.addEventListener('click', function (evt) {
    let thumbnail = evt.target.getAttribute('src');
    cardFullPhoto.src = thumbnail;
  })
});

// Селектор выбора цвета
if (cardColor) {
  cardColor.addEventListener('click', function (evt) {

    if (evt.target.classList.contains('card-color__btn')) {
  
      // Удаляем у кнопок активный класс
      document.querySelectorAll('.card-color__btn')
        .forEach(function (item) {
          item.classList.remove('card-color__btn--active')
        });
      // Добавляем к активный класс тому, у которого произошло событие клика
      evt.target.classList.add('card-color__btn--active');
  
    };
  
  });
  
}

// Скрипт для кастомного селектора
if (customSelect) {
  customSelect.addEventListener('click', function (evt) {
    customSelect.classList.toggle('card-option-select--open');
  
    if (evt.target.classList.contains('card-option-select__item')) {
      let text = evt.target.textContent;
      evt.currentTarget.querySelector('.card-option-select__top').textContent = text;
    }
  })
}