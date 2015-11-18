// JavaScript Document
function consulta()
	{
		datos="";
		$.ajax({
			type: "POST",
			url: "192.168.1.30/procesar.php",
			data: datos
		}).done(function(mensaje){
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

