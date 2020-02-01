(function () {
	let menuIcon = document.querySelector('.menu-icon');
	let menuBlock = document.querySelector('.menu-block');
	menuIcon.addEventListener('click', (evt) => {
		evt.preventDefault();
		menuBlock.classList.toggle('menu-block__show');
	})
})();