// JavaScript Document
function consulta()
	{ 

		$.ajax({
			type: "POST",
			url: "192.168.1.30/procesar.php"
		}).done(function(msj){
			alert(mensaje);
		
		});
				

			
		
	}
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
$("#btnconsulta").on("tap",function(){
	alert("Preguntando...");
	consulta();
	
});
}); 
});

