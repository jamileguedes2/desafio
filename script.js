
 document.addEventListener("DOMContentLoaded", function(event) {

	document.querySelector('#dados').addEventListener('click', function(){
		var a = window.prompt('Qual seu nome ?');
		var b = window.prompt('Qual sua idade ?');

		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
		'event':'event',
		'eventCategory':'category',
		'eventAction':a,
		'eventLabel':b,
		});

		//alert('Olá:  '+a+'!  Sua idade: '+b);

	});


});


  

