$(document).ready(function(){
	playBackground();
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		})
		.mouseleave(function() {
			$('.ryu-ready').hide();
			$('.ryu-still').show();
		})
		.mousedown(function() {
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show()
			.animate(
				{'left': '300px'},
				500,
				function() {
					$(this).hide();
					$(this).css('left', '-212px');
				}
			);
		})
		.mouseup(function() {
			// ryu goes back to his ready position
			$('.ryu-throwing').hide();
			$('.ryu-ready').show();
		});
		$(document).keydown(function(e) {
			if (event.which == 88){
				playDoin();
				$('.ryu-still').hide();
				$('.ryu-ready').hide();
				$('.ryu-cool').show();
			}
		})
		$(document).keyup(function(e) {
			if (event.which == 88){
				$('.ryu-still').show();
				$('.ryu-ready').hide();
				$('.ryu-cool').hide();
			}
		})
	$('.controls').slideUp(.001);
	$('.instructions-container').click(function(){
		$(this).find('.controls').slideToggle();
		$(this).find('.instructions').slideToggle();
	});	
});
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
function playDoin () {
	$('#doin-sound')[0].volume = 0.5;
	$('#doin-sound')[0].load();
	$('#doin-sound')[0].play();
}
function playBackground () {
	$('#background-sound')[0].volume = 0.5;
	$('#background-sound')[0].load();
	$('#background-sound')[0].play();
}