


document.addEventListener("DOMContentLoaded", function(event) {


function nome(){
	alert("Olá JahJahmile!");

}

function addEventos(){
	document.getElementById("logoid").AddEventListener("click",nome()); 

}
  //myNewName.push({'variable_name': 'variable_value'});

	
document.querySelector('#dados').addEventListener('click', function(){
var a = window.prompt('Qual seu nome ?');
var b = window.prompt('Qual sua idade ?');
dataLayer.push({
'event':'event',
'eventCategory':'category',
'eventAction':a,
'eventLabel':b,
});

alert('valor de a:'+a+'valor de b'+b);
});


}


   //document.getElementById("dados").AddEventListener("click", nameAge());
	//alert(a+b);
	


	
//element.addEventListener("click", myFunction);

//function myFunction() {
//  alert ("Hello World!");
//}


