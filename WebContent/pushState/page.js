$(document).ready(function() {

	$(document).on('click', '.control nav a', function(event) {
		//history.pushState(null, null, event.target.href);
		
		var obj = {name:"sam", href:event.target.href};
		
		history.pushState(obj, "testPage", event.target.href);
		
		$('article').load(event.target.href + ' article>.content');
		
		event.preventDefault();

	});

	$(window).on('popstate', function(event) {
		console.log(event);
		console.log("location.href : " + location.href );
		
		console.log("state : " + history.state);
		
		if ( history.state != null) {
			 console.log(history.state + ":" + history.state.href);
			
		}
		
		
		$('article').load(location.href + ' article>.content');
	});

	var audio = new Audio('/Study/pushState/music1.mp3');
	
	$(document).on('click', '.control .player .play', function(event) {
		audio.play();
		event.preventDefault();
	});

	$(document).on('click', '.control .player .pause', function(event) {
		audio.pause();
		event.preventDefault();
	});
	
});

