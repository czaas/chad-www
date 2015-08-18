app.applyListenersTo = function(feedParent){

	var slideShow = document.getElementById('close'),
		nextBtn = document.getElementById('next'),
		prevBtn = document.getElementById('prev'),
		viewAll = document.getElementById('viewAll'),
		sectionFeed = document.getElementById('feed');

	nextBtn.addEventListener('click', app.slideShow.nextImage);
	prevBtn.addEventListener('click', app.slideShow.prevImage);

	slideShow.addEventListener('click', app.slideShow.close);
	addListener('zoom', getPosition);

	viewAll.addEventListener('click', function(){
		sectionFeed.className = 'showAll';
		this.className = 'hide';
	});


	function addListener(className, cb){
		var targetedClass = document.getElementsByClassName(className);	

		for(var i = 0; i < targetedClass.length; i++){
			targetedClass[i].addEventListener('click', cb, false);
		}
	}

	function getPosition(e, cb){
		var imgPosition = this.attributes['data-position'].value;
		app.slideShow.start(imgPosition);	
	}

};
