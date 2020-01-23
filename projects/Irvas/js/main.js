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

(function () {
	let modal = document.querySelector('.modal');
	let openModal = document.querySelector('.header__order');
	let closeModal = document.querySelector('.modal__close');

	openModal.addEventListener('click', (evt) => {
		evt.preventDefault();
		modal.classList.add('modal__show');
	});

	closeModal.addEventListener('click', () => {
		modal.classList.remove('modal__show');
	});

	document.addEventListener('keydown', (evt) => {
		if(evt.keyCode === 27) {
			modal.classList.remove('modal__show');
		}
	})

}());