$(function () {
	
	$(".phone").mask("+99(999) 999-99-99");

	var burger = $('#burgerBtn');
	var mobileContent = $('.header-menu');

	burger.on('change', function () {
		mobileContent.toggleClass('show');
	});

	$(document).on('click', function (e) {
		var target = e.target;
		if (!target.closest('.burger') && !$(target).closest(".header-menu").length) {
			burger.prop('checked', false);
			mobileContent.removeClass('show');
		}
	});

});