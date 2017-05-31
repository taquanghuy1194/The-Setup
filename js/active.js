$(document).ready(function() {
	$("#owl-slide").owlCarousel({
		autoPlay: true, //Set AutoPlay to 3 seconds
      	items : 1,
      	pagination: false
	});

  	new WOW().init();
});
