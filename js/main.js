$(document).ready(function() {
    $('.collapse').click(function (){
	
		if($('.collapse').hasClass('active')){
			$('.collapse').removeClass('active');
			$('.mobile-nav').slideUp();
		}else{
			$('.collapse').addClass('active');
			$('.mobile-nav').slideDown();
		};
	});
});