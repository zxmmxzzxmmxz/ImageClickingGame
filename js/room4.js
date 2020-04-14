window.onload = function(){
	document.getElementById("arrow").onclick = function() {
		window.location.href='hallway.html';
		
	};

	document.getElementById("empty-room").onclick = function() { 
		element = document.getElementById("empty-room-content");
		if(element.style.opacity >= 1){
			var op = 1;  // initial opacity
		    var timer = setInterval(function () {
		        if (op <= 0.1){
		            clearInterval(timer);
		            element.style.display = 'none';
		        }
		        element.style.opacity = op;
		        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		        op -= op * 0.2;
		    }, 50);
		}
		else{
			var op = 0.1;  // initial opacity
	    	element.style.display = 'block';
	    	var timer = setInterval(function () {
		        if (op >= 1){
		            clearInterval(timer);
		        }
		        element.style.opacity = op;
		        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		        op += op *0.1;
	    	}, 10);
		}
		
		// msg = document.getElementById("empty-room-content");
		// if(msg.style.display === "block"){
		// 	msg.style.display = "none";
		// }
		// else{
		// 	msg.style.display = "block";
		// }
	} 


}