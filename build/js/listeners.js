app.applyListeners = function(){
	$('.linkBox').on('click', 'a.zoom', function(e){
		e.preventDefault();
		var currentLink = $(this),
			position = currentLink.data('position'),
			src = currentLink.attr('href');
			$('#slideShow').toggleClass('on')
			.children('.inner').css('background', 'url(' + src + ') no-repeat top left');
	});

	$('#slideShow').on('click', function(){
		$(this).toggleClass('on');
	});
};