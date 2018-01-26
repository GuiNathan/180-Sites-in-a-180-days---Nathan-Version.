function dayy(){
	
var day = new Date();
	day.getDay();

	var week_day = ["Sunday", "Monday", "Tuesday", "Wedneday", "Thursday", "Friday", "Saturday"];
	//alert(week_day[day.getDay()]);

switch(day.getDay()){
	case 0:
	   document.getElementById("sun").className += " sun";
	   document.getElementById("msg").style.display="block";
	   document.getElementById("msg").innerHTML = week_day[day.getDay()] + document.getElementById("msg").innerHTML;
	break;

	case 1:
	   document.getElementById("mon").className += " mon";
	   document.getElementById("msg").style.display="block";
	   document.getElementById("msg").innerHTML = week_day[day.getDay()] + document.getElementById("msg").innerHTML;
	   document.getElementById("msg").style.backgroundColor = "#96beff";	
	break;

	case 2:
	   document.getElementById("tue").className += " tue";
	   document.getElementById("msg").style.display="block";
	   document.getElementById("msg").innerHTML = week_day[day.getDay()] + document.getElementById("msg").innerHTML;
	   document.getElementById("msg").style.backgroundColor = "#ff9191";
	break;

	case 3:
	   document.getElementById("wed").className += " wed";
	   document.getElementById("msg").style.display="block";
	   document.getElementById("msg").innerHTML = week_day[day.getDay()] + document.getElementById("msg").innerHTML;
	   document.getElementById("msg").style.backgroundColor = "#e66dff";
	break;

	case 4:
	   document.getElementById("thu").className += " thu";
	   document.getElementById("msg").style.display="block";
	   document.getElementById("msg").innerHTML = week_day[day.getDay()] + document.getElementById("msg").innerHTML;
	   document.getElementById("msg").style.backgroundColor = "#ffb626";
	break;

	case 5:
	   document.getElementById("fri").className += " fri";
	   document.getElementById("msg").style.display="block";
	   document.getElementById("msg").innerHTML = week_day[day.getDay()] + document.getElementById("msg").innerHTML;
	   document.getElementById("msg").style.backgroundColor = "#dfff44";
	break;

	case 6:
	   document.getElementById("sat").className += " sat";
	   document.getElementById("msg").style.display="block";
	   document.getElementById("msg").innerHTML = week_day[day.getDay()] + document.getElementById("msg").innerHTML;
	   document.getElementById("msg").style.backgroundColor = "#6554ff";
	break;
}
}