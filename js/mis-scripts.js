(function( $ ) {
$(window).scroll(function() {
    var windows = $(window).scrollTop();
	var refOffset = $('.wrap-top').height(); 
 	
	if(windows > refOffset){
		$('html').addClass('stykie-header');		
	}else{
		$('html').removeClass('stykie-header');
	}
});
})(jQuery);