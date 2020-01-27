// Fixed nav
(function () {
	const header = document.querySelector('.hesader');
	window.onscroll = () => {
		if(window.pageYOffset > 10) {
			header.classList.add('header__active');
		} else {
			header.classList.remove('header__active');
		}
	};
}());

// Nav scroll
(function () {

const smoothScroll = function (targetEl, duration) {
  const headerElHeight =  document.querySelector('.header').clientHeight;
  let target = document.querySelector(targetEl);
  let targetPosition = target.getBoundingClientRect().top - headerElHeight;
  let startPosition = window.pageYOffset;
  let startTime = null;

  const ease = function(t,b,c,d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const animation = function(currentTime){
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0,run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  requestAnimationFrame(animation);

};

const scrollTo = function () {
  const links = document.querySelectorAll('.js-scroll');
  links.forEach(each => {
      each.addEventListener('click', function () {
          const currentTarget = this.getAttribute('href');
          smoothScroll(currentTarget, 1000);
      });
  });
};
scrollTo();
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

(function () {
	let burger = document.querySelector('.burger');
	let burgerLine = document.querySelectorAll('.burger-line');
	let headerList = document.querySelector('.header__list');
	burger.addEventListener('click', function() {
		burgerLine.classList.add('change-burger');
	})
}());
