// default number of raindrops
var val = (getWidth() / 4);
// default maximum on slider
var max = (getWidth() / 2);
// boolean to change # drops when slider changes
var isChange = false;

// sets up the slider using jquery ui
$( function() {
  $( "#slider" ).slider({
    min: -20,
    max:400,
    value:200,
    step:20,
    animate:"fast",
    slide: function(event, ui) {
      // event that happens on change
      val = $( "#slider" ).slider("value");
      isChange = true;
      rain();
    }
  });
  rain();
});



// rain function; defaults to (getWidth() / 4) # of drops
// if there is slider interaction, will remove all rain and
// repopulate with new slider value
function rain() {
  // remove al if there is a change
	if (isChange) {
		$('.rainContianer').empty();
		$('.rainContainer div').removeAttr('style');
		isChange = false;
	}
  
  // generate raindrops
	for(i = 0 ; i < val; i++) {
		var left = (Math.floor(Math.random() * (getWidth() - 0 + 1)));
		var top =  (Math.floor(Math.random() * (getHeight() + 1000 + 1)) - 1000);


		$('.rainContainer').append('<div class="drop" id="drop' + i + '"></div>');
		$('#drop' + i).css('left', left);
		$('#drop' + i).css('top', top);
	}
}

// if the window is resized, rain again so bounds
// are correct
$( window ).resize(function() {
	rain();
});

// returns width of top div
function getWidth() {
	var width = $('#top').width();
	return width;
}

// returns height of top div
function getHeight() {
	var height = $('#top').height();
	return height;
}


