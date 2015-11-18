// JavaScript Document
function consulta()
	{ 

		$.ajax({
			type: "POST",
			url: "192.168.1.30/procesar.php",
			success: function(msj){
				alert (msj);
			},
			error: function(xhr, ajaxOptions, throwError)
			{
				alert (xhr.sttus);
			 alert (throwError);	
			},
			complete: function(data){
			 	alert (data);
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

