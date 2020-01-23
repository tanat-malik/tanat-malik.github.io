// Fixed nav
(function () {
	const header = document.querySelector('.header__nav');
	window.onscroll = () => {
		if(window.pageYOffset > 10) {
			header.classList.add('header__nav-scroll');
		} else {
			header.classList.remove('header__nav-scroll');
		}
	};
}());

// Accordion
(function () {
	const acc = document.querySelectorAll('.faq__item-question');
	const accShow = document.querySelectorAll('.faq__item-answer')
	for(let i = 0; i < acc.length; i++) {
		acc[i].addEventListener('click', () => {
			for(let j = 0; j < accShow.length; j++) {
				accShow[i].classList.toggle('faq__item-answer-show');
				acc[i].classList.toggle('arrow-bottom');
			}
		});
	}
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

// Parallax
(function () {
	function headerParallax(evt) {
		this.querySelectorAll('.header__layer').forEach( layer => {
			let dataSpeed = layer.getAttribute('data-speed');
			layer.style.transform = `translateX(${evt.clientX*dataSpeed/1000}px)` + 
			 " " + `translateY(${evt.clientY*dataSpeed/1000}px)`;
		});
	}
	document.addEventListener('mousemove', headerParallax);

}());

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