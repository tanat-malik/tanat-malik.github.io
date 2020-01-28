// Fixed nav
(function () {
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if(window.pageYOffset > 10) {
			header.classList.add('header__active');
		} else {
			header.classList.remove('header__active');
		}
	};
}());

// .ibg
(function () {
	function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
}());

/* ROOM SLIDER */
(function () {
	$('.room__slider-box').slick({
		dots: true,
		prevArrow: false,
		nextArrow: false
	});

}());

/* REVIEW SLIDER */
(function () {
	$('.review__slider-box').slick({
		dots: true,
		prevArrow: false,
		nextArrow: false
	});

}());

/* FILTER SCRIPT */
(function () {
	let filter = document.querySelector('.filter');
	let filterButton = document.querySelector('.aside-filter__button');
	let filterClose = document.querySelector('.filter__close');

	if (filter) {
		filterButton.addEventListener('click', () => {
			filter.classList.add('filter__show');
		});

		filterClose.addEventListener('click', () => {
			filter.classList.remove('filter__show');
		});

		document.addEventListener('keydown', (evt) => {
			if(evt.keyCode === 27) {
				filter.classList.remove('filter__show');
			}
		});
	}

}());

/* MODAL SCRIPT */
(function	() {
	let modal = document.querySelector('.modal');
	let modalBtn = document.querySelectorAll('.room__btn');
	let modalClose = document.querySelector('.modal__close');

	if (modal) {
		for(let i = 0; i < modalBtn.length; i++) {
			modalBtn[i].addEventListener('click', () => {
			modal.classList.add('modal__show');
			});	
		}

		modalClose.addEventListener('click', () => {
			modal.classList.remove('modal__show');
		});	


		document.addEventListener('keydown', (evt) => {
			if(evt.keyCode === 27) {
				modal.classList.remove('modal__show');
			}
		});
	}

}());

(function () {
	let burger = document.querySelector('.burger')
	let headerList = document.querySelector('.header__list');
	let headerListClose = document.querySelector('.header__list-close');

	burger.addEventListener('click', () => {
		headerList.classList.add('header__list-show');
	});
	headerListClose.addEventListener('click', () => {
		headerList.classList.remove('header__list-show');
	});

	document.addEventListener('keydown', (evt) => {
		if(evt.keyCode === 27) {
			headerList.classList.remove('header__list-show');
		}
	});

}());