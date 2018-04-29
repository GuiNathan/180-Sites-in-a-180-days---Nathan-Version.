

		function data(){
		
			var now = new Date();
			var h = now.getHours();
			var m = now.getMinutes();
			var s = now.getSeconds();
			var session = 'AM';

			if(h.toString().length ==1)
				h = '0'+ h;
			if(m.toString().length == 1)
				m = '0'+ m;
			if(s.toString().length == 1)
				s = '0'+ s;

			if(h>12){
				h = h-12;
				session = 'PM';
			}else{
				session = 'AM';
			}

			var hh = h*3;
			var mm = m*3;
			var ss = s*3;

			r = hh.toString(16);
			g = mm.toString(16);
			b = ss.toString(16);

			if (r.length == 1) {r = '0'+r;}
			if (g.length == 1) {g = '0'+g;}
			if (b.length == 1) {b = '0'+b;}

			color = '#' + r + g + b;

			var hour = h + ":" + m + ":" + s + " " + session;
			document.body.style.backgroundColor = color;

			document.getElementById('clock').textContent = hour;
			document.getElementById('clock').innerText = hour;


		}
		data();
		setInterval(data, 1000);

