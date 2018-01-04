$(function() {


	var carouselList = $("#carousel ul");



	var intervalId;

	function setDefaultInterval() {
		intervalId = setInterval(changeSlide, 3000); //every 3 seconds, it performs a function to change the slide
	}
	setDefaultInterval();

	function changeSlide() {
		carouselList.animate({
			'marginLeft': -600
		}, 500, moveFirstSlide);
	};


	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({
			marginLeft: 0
		});
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});