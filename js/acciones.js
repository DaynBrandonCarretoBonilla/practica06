// JavaScript Document
function consulta()
	{ alert("entrando");

		$.ajax({
			type: "POST",
			url: "192.168.1.30/procesar.php",
			success: function(msj){
				alert (msj);
			},
			error: function()
			{
			 alert ("error");	
			},
			complete: function(data){
			 	alert (data);
			}
		});
				

			
		alert("cerrando");
	}
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
$("#btnconsulta").on("tap",function(){
	alert("Preguntando...");
	consulta();
	
});
}); 
});

