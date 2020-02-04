
 document.addEventListener("DOMContentLoaded", function(event) {

function nome(){
	alert("Seja bem vindo!");

}

function addEventos(){
document.querySelector('#logoid').addEventListener('click', nome()); 

}
	
document.querySelector('#dados').addEventListener('click', function(){
var a = window.prompt('Qual seu nome ?');
var b = window.prompt('Qual sua idade ?');
window.dataLayer = window.dataLayer || [];
dataLayer.push({
'event':'event',
'eventCategory':'category',
'eventAction':a,
'eventLabel':b,
});

alert('Olá:  '+a+'!  Sua idade: '+b);
});


});


   //document.getElementById("dados").AddEventListener("click", nameAge());
	//alert(a+b);
	


	
//element.addEventListener("click", myFunction);

//function myFunction() {
//  alert ("Hello World!");
//}


