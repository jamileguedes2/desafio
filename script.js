function nome(){
	alert("Olá JahJahmile!");

}

function addEventos(){
	document.getElementById("logoid").AddEventListener("click",nome); 

}

  //myNewName.push({'variable_name': 'variable_value'});

  

window.AddEventListener("load",addEventos);