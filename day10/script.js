var imgs = document.querySelector("img");

var fx = ['bounce','flash','pulse','rubberBand',
		  'shake','headShake','swing','tada','wobble',
		  'jello','jackInTheBox'];

function shake(){
	imgs.className += " animated " + fx[Math.floor(Math.random()*10)];
}

$('.img').click(function(){
	rand = fx[Math.floor(Math.random()*10)];
	imgId = this.id;
	$(this).attr('class', 'img animated ' + rand);

});

