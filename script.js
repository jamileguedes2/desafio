
 document.addEventListener("DOMContentLoaded", function(event) {

function nome(){
	alert("Jahmile!");

}

function addEventos(){
	document.querySelector('#logoid').AddEventListener('click', nome()); 

}
	
document.querySelector('#dados').addEventListener('click', function(){
var a = window.prompt('Qual seu nome ?');
var b = window.prompt('Qual sua idade ?');
dataLayer.push({
'event':'event',
'eventCategory':'category',
'eventAction':a,
'eventLabel':b,
});

alert('Seja bem vindo:  '+a+' Sua idade: '+b);
});


});


   //document.getElementById("dados").AddEventListener("click", nameAge());
	//alert(a+b);
	


	
//element.addEventListener("click", myFunction);

//function myFunction() {
//  alert ("Hello World!");
//}


