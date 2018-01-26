function orangeDoor(){
	window.location.href="first-door-orange.html";
}
function blueDoor(){
	window.location.href="first-door-blue.html";
}
function goodThing(){
	window.location.href="goodThing.html";
}

function eraseOrangeDoor(){
	setTimeout(function(){ 
		//esta função vai remover a porta escolhida da lista de opções
		var door = document.getElementById("orange").setAttribute("src", "#");
	}, 4000);
}	

function eraseBlueDoor(){
	setTimeout(function(){ 
			//esta função vai remover a porta escolhida da lista de opções
			var door = document.getElementById("blue").setAttribute("src", "#");
		}, 4000);
}

function badThing(){
	window.location.href="badThing.html";
}
function goodThing(){
	window.location.href="goodThing.html";
}