function allVisited(rooms) {
	for(i = 0; i < rooms.length; i++){
		if(rooms[i] === false){
			return false;
		}
	}
	return true;
}

window.onload = function(){
	let monica = sessionStorage.getItem("monica");
	var roomsVisited = JSON.parse(sessionStorage.getItem("rooms"));
	let room5visited = JSON.parse(sessionStorage.getItem("room5visited"));
	if(allVisited(roomsVisited)&&!room5visited){
		sessionStorage.setItem("room5locked", "false");
		alert("The locked room seems to have strange noise");
	}

	document.getElementById("room5").onclick = function() { 
		if(sessionStorage.getItem("room5locked") == "false"){
			sessionStorage.setItem("room5visited","true");
			window.location.href = "room5.html";
		}
		else{
			alert("This room seems locked");
		}
	} 
	document.getElementById("room1").onclick = function() { 
		roomsVisited[0] = true;
		sessionStorage.setItem("monica","The gardener died this morning. Seems like Jack killed him. ");
		sessionStorage.setItem("rooms", JSON.stringify(roomsVisited));
		window.location.href = "room1.html";
	} 
	document.getElementById("room2").onclick = function() { 
		roomsVisited[1] = true;
		sessionStorage.setItem("monica","Jack is the youngest child of Edward. It's not the first time Jack killed people.");
		sessionStorage.setItem("rooms", JSON.stringify(roomsVisited));
		window.location.href = "room2.html";
	}
	document.getElementById("room3").onclick = function() { 
		roomsVisited[2] = true;
		sessionStorage.setItem("monica","The host, Edward is a vampire and he married a human Blle and they had 4 children. Jack, Edward's son, is vampire too and he kills people for blood.");
		sessionStorage.setItem("rooms", JSON.stringify(roomsVisited));
		window.location.href = "room3.html";
	}
	document.getElementById("room4").onclick = function() { 
		roomsVisited[3] = true;
		sessionStorage.setItem("monica","There have been too many people died. Please be careful...");
		sessionStorage.setItem("rooms", JSON.stringify(roomsVisited));
		window.location.href = "room4.html";
	}

	document.getElementById("monica-message-content").innerHTML = monica;
}


