window.onload = function(){
	if(sessionStorage.getItem("keyHere") == "true"){
			document.getElementById("key").style.display = 'block';
			document.getElementById("closet").style.display = 'block';
			document.getElementById("jack").style.visibility = 'hidden';

			document.getElementById("closet").onclick = function() {
				if(sessionStorage.getItem("hasLock") == "true"){
					document.getElementById("popup").click();
				}
				else{
					alert("It seems locked...");
				}
			}
	}
	else{
		document.getElementById("jack").onclick = function() {
			document.getElementById("arrow").style.visibility = 'hidden';
			document.getElementById("image").setAttribute("src","images/room5-jack.jpg");
			element = document.getElementById("jack-message");
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
		
		};
	}

	

	document.getElementById("key").onclick = function() {
		document.getElementById("key").style.display = 'none';
		sessionStorage.setItem("hasLock", "true");
		alert("This key seems to open the closet and the basement case");
	}
}