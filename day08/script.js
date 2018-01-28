$(document).ready(function(){
	$(document).ready(function(){
	var shadowUp =0;
	$("#mable, #menu").on("click", function(){
		shadowUp+=5;
	$(this).css("box-shadow", "1px 1px " + shadowUp + "px "+ shadowUp + "px rgba(0,0,0,.5)");
	});
	});
});