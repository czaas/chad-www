var app = {};
app.module; // this will be the object instafeed returns on success


app.init = function(data){
	// sets as the array of objects
	app.module = data.data.map(function(obj, i, arr){
		// trimming data to what I need
		return {
			image: obj.images.standard_resolution.url,
			link: obj.link,
			id: i
		};
	}) || [];

	app.displayImages();
	app.applyListeners();
};

app.displayImages = function(){
	/*
	app.displayImages
		- url of image
		- link of instagram post
		- check tags from instagram
		- template it
		- append it to html
	*/

	// array of templated images
	var templatedImages = app.module.map(template);
	templatedImages.forEach(appendImageToScreen);


	function appendImageToScreen(image){
		var instafeed = document.getElementById('instafeed');

		instafeed.innerHTML += image;
	}
	function template(obj){
		// need to return instagram link
		return '<li>' +
				'<img src="' + obj.image + '">' +
				'<div class="linkBox">' +
				'<a href="#!">' +
					'<i class="fa fa-usd"></i>' +
					'<br/>Request</a>' +
				'<a href="' + obj.link + '" target="_blank">' +
					'<i class="fa fa-instagram"></i>' +
					'<br/>Instagram</a>' +
				'<a href="' + obj.image + '" class="zoom" data-position="' + obj.id + '">' +
					'<i class="fa fa-search-plus"></i>' +
					'<br/>Zoom</a>' +
				'<a href="#!">' +
					'<i class="fa fa-envelope"></i>' +
					'<br/>Contact</a></li>';
	}
	return this;
};

app.startSlideShow = function(srcOfImg, pos){
	
};