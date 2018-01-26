
function changeColor(){	
	var rand = Math.floor(Math.random() * 10 + 1);
	var colors = ["#77dd7e", "#ffc0cb", "#ff5252", "#000080", "#b5aa00", "#acacd9", "#8f23ab", "#237fab", "#23ab4f", "#f2ff21", "#21e3ff"];
	document.body.style.backgroundColor = colors[rand];
}