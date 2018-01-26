$(document).ready(function(){
			$(".box").mouseover(function(){

				var text = "abcdef0123456789";
				var	hexa = "";
				for(var i =1; i<=6; i++){
					hexa+=text.charAt(Math.ceil(Math.random() * text.length));
				}
				while(hexa.length<6)
					hexa = "1" + hexa;
				hexa = "#" + hexa;
				console.log(hexa);
				$(this).css("background-color", hexa);


			});
		});	