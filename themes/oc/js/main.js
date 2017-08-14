jQuery(document).ready(function() {
    jQuery('.collapse').click(function (){
	
		if(jQuery('.collapse').hasClass('active')){
			jQuery('.collapse').removeClass('active');
			jQuery('.mobile-nav').slideUp();
		}else{
			jQuery('.collapse').addClass('active');
			jQuery('.mobile-nav').slideDown();
		};
	});
	jQuery(".regular").slick({
		dots: true,
		infinite: true,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},
			{
			  breakpoint: 620,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		 ]
	  });
	  jQuery(".center").slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 620,
			  settings: {
				slidesToShow: 1,
				arrows:false,
				slidesToScroll: 1
			  }
			}

		 ]
	  });

           
});