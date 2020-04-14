window.onload = function(){

	document.getElementById("bed-message-toggle").onclick = function() { 
		msg = document.getElementById("bed-message");
		if(msg.style.display === "block"){
			msg.style.display = "none";
		}
		else{
			msg.style.display = "block";
		}
	} 


}