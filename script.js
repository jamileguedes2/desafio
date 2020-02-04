function nome(){
	alert("Olá JahJahmile!");

}

function addEventos(){
	document.getElementById("logoid").AddEventListener("click",nome); 

}

window.AddEventListener("load",addEventos);

  //myNewName.push({'variable_name': 'variable_value'});

  function phone(){
	document.getElementById("caixaPhone").AddEventListener("click",a, b); 

  	var a = window.prompt("Qual o seu nome de terráqueo ?");
  	var b = window.prompt("Qual a sua idade de terráqueo ?");
  	dataLayer.push({
 	'event': 'event',  
    'eventName': a,
    'eventAge': b,
  });
  console.log(a+b);