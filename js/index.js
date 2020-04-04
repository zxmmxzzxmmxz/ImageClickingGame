window.onload = function(){

	document.getElementById("showQuestion1").onclick = function() { 
		document.getElementById("question1").innerHTML = "Dear Robert, You are inherited Edward's manor. Do you want to accept it?"
		document.getElementById("showQuestion1").style.display = "none";
		document.getElementById("click").style.display = "none";
		document.getElementById("button1").style.display="block";
	} 

	document.getElementById("button1span").onclick = function() {
		window.location.href = "scene1.html";
	}

}