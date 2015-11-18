// JavaScript Document
function consulta()
	{ 

		$.ajax({
			type: "POST",
			url: "http://192.168.1.30/procesar.php",
			success: function(msj){
				alert ("exito" + msj);
			},
			error: function(xhr, ajaxOptions, throwError)
			{
				alert ("estatus" +xhr.sttus);
			 alert ("error" +throwError);	
			},
			complete: function(data){
			 	alert (json.ecode (data));
			}
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

