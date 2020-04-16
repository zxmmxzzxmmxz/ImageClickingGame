window.onload = function(){

	document.getElementById("toScene1").onclick = function() { 
		window.location.href = "scene1.html";
	} 
	var roomsVisited = [false,false,false,false];
	sessionStorage.setItem("rooms", JSON.stringify(roomsVisited));
	sessionStorage.setItem("room5locked", "true");
	sessionStorage.setItem("room5visited", "false");
	sessionStorage.setItem("monica","Hi Robert, I am Monica, Nice to meet you but it's kinda dangerous here!");
	sessionStorage.setItem("keyHere","false");
	sessionStorage.setItem("hasLock","false");


}