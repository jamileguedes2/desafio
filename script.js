function nome(){
	alert("Olá JahJahmile!");

}

function addEventos(){
	document.getElementById("logoid").AddEventListener("click",nome); 

}

  //myNewName.push({'variable_name': 'variable_value'});

document.querySelector('.dados').AddEventListener('click', function()){
     var a = window.prompt('Qual seu nome ?');
       var b = window.prompt('Qual sua idade ?');
       dataLayer.push({
                'event':'event',
                'eventCategory':'category',
                'eventAction':a,
                'eventLabel':b,
                });
                });

