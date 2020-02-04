
function nome(){
	alert("Olá JahJahmile!");

}

function addEventos(){
	document.getElementById("logoid").AddEventListener("click",nome()); 

}
  //myNewName.push({'variable_name': 'variable_value'});

	function nameAge(){
     var a = window.prompt('Qual seu nome ?');
       var b = window.prompt('Qual sua idade ?');
       window.dataLayer = window.dataLayer || [];
       dataLayer.push({
                'event':'event',
                'eventCategory':'category',
                'eventAction':a,
                'eventLabel':b,
                });

       document.getElementById("dados").AddEventListener("click", nameAge());
		alert('1. '+a+' 2. '+b);


                };

   //document.getElementById("dados").AddEventListener("click", nameAge());
	//alert(a+b);
	


	
//element.addEventListener("click", myFunction);

//function myFunction() {
//  alert ("Hello World!");
//}


