function nome(){
	alert("Olá JahJah!");

}

function addEventos(){
	document.getElementById("logoid").AddEventListener("click",nome); 

}

window.AddEventListener("load",addEventos);