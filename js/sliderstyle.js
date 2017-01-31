$(function() {
	//$('img[@src$=.png]').ifixpng(); 
	
	/* EASING **/
	/* http://gmarwaha.com/jquery/jcarousellite/#demo */
	
    $(".sliderImages").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
		visible: 1,
		vertical: null,
		auto: 2500,
		easing: "easeInOutExpo",
		speed: 1000
    });
	 
});
