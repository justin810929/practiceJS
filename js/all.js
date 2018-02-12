$(document).ready(function() {
	$('.adjust').hover(function() {
		$('.adjust ul').delay(300).slideDown(500)
		$('.adjust').css('opacity','1')
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('.adjust ul').delay(300).slideUp(500)
		$('.adjust').css('opacity','0.5')
	});
	$('.word-L').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.content p').css('font-size','30px');
	});
	$('.word-M').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.content p').css('font-size','16px');
	});
	$('.word-S').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.content p').css('font-size','12px');
	});
	$('.addCart').click(function(event) {
		/* Act on the event */
		$(this).parent().toggleClass('active').siblings().removeClass('active');
	});
	
});