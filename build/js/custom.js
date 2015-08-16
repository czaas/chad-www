var app = {};
app.module = []; // this will be the array of objects instafeed returns on success


app.init = function(data){
	
	var myFeed = document.getElementById('myFeed');
	var position = 0;
	
	data.data.map(function(obj, i, arr){
		var allTags = obj.tags.join(' ');
		var newObj = {};

		newObj = {
			image: obj.images.standard_resolution.url,
			link: obj.link,
			id: position,
			isSold: (allTags.indexOf('sold') !== -1)
		};

		if(allTags.indexOf('workinprogress') === -1){
			app.module.push(newObj);
			position++;
		}		
	});

	app.displayImagesTo(myFeed);
	app.applyListenersTo(myFeed);
};

app.displayImagesTo = function(feedName){

	var templatedImages = app.module.map(templateBuilder);
	templatedImages.forEach(appendImageToScreen);


	function appendImageToScreen(image){
		feedName.innerHTML += image;
	}

	function templateBuilder(obj){
		var isAvailable = '';

		// if it is not sold
		if(!obj.isSold){
			isAvailable = '<span class="available">Available</span>';
		}

		return '<li>' + isAvailable +
				'<img src="' + obj.image + '">' +
				'<div class="linkBox">' +
				'<a href="#!">' +
					'<i class="fa fa-usd"></i>' +
					'<br/>Request</a>' +
				'<a href="' + obj.link + '" target="_blank">' +
					'<i class="fa fa-instagram"></i>' +
					'<br/>Instagram</a>' +
				'<a class="zoom" data-position="' + obj.id + '">' +
					'<i class="fa fa-search-plus"></i>' +
					'<br/>Zoom</a>' +
				'<a href="#!">' +
					'<i class="fa fa-envelope"></i>' +
					'<br/>Contact</a></li>';
	}

	return this;
};

app.slideShow = {

	currentImage: 0,

	position: 0,

	slideShow: document.getElementById('slideShow'),

	start: function(position){

		var slideShowIsOn = (slideShow.className.indexOf('on') !== -1);

		if(slideShowIsOn){
			console.log('isOn');
		} else {
			slideShow.className += ' on';
		}

		app.slideShow.position = position;

		currentImage = app.module[position].image;
		this.updateDisplay(currentImage);
	},

	nextImage: function(){

		if(app.module.length - 1 < parseInt(app.slideShow.position) + 1){
			app.slideShow.position = 0;
		} else {
			app.slideShow.position = parseInt(app.slideShow.position) + 1;
		}
		var target = app.module[app.slideShow.position].image;
		app.slideShow.updateDisplay(target);
	},

	prevImage: function(){
		if(parseInt(app.slideShow.position) === 0){
			app.slideShow.position = app.module.length - 1;
		} else {
			app.slideShow.position = parseInt(app.slideShow.position) - 1;
		}
		var target = app.module[app.slideShow.position].image;
		app.slideShow.updateDisplay(target);
	},

	updateDisplay: function(imgSrc){
		var mainImage = document.getElementById('mainImage');	
		mainImage.src = imgSrc;
	},

	close: function(){
		slideShow.className = '';
	}

};


