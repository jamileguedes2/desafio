//	   
//	   function()
//	   var meuNome = "Jamileumanoites";
//	   return(meuNome);
//
//		document.getElementById (#seta).element.AddEventListener("click", function a(){document.getElementById("botaseta").alert = ("Hello World");
//});

	function nome(){
	alert("Jamileumanoites!");

}

function addEventos(){
	document.getElementById("seta").AddEventListener("click",nome); 

}

window.AddEventListener("load",addEventos);
        
    