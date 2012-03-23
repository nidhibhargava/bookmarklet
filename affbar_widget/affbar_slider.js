$(function (){
	$('body').prepend("<div id='affbarmover'></div>")

	$('#close').click(function () {
		$('body, #affbar').animate({
			top: '-=38px'
		}, 500, 'swing');
	});

	$('#close').click(function () {
		$('#tab').animate({
			top: '+=58px'
		}, 500, 'swing');
	});

	$('#tab').click(function () {
		$('body, #affbar').animate({
			top: '+=38px'
		}, 500, 'swing');
	});
	
	$('#tab').click(function () {
		$('#tab').animate({
			top: '-=58px'
		}, 500, 'swing');
	});
	
	setTimeout(function() {
		$('body, #affbar').animate({
			top: '+=38px'
		}, 500, 'swing');
	}, 1000);
	
});
