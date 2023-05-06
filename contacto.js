function validarFormulario() {
	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	let telefono = document.getElementById("telefono").value;
	let email = document.getElementById("email").value;
  
	if (nombre === "" || apellido === "" || telefono === "" || email === "") {
	  alert("Por favor, complete todos los campos");
	  document.getElementById("nombre").style.border = "2px solid red";
	  document.getElementById("apellido").style.border = "2px solid red";
	  document.getElementById("telefono").style.border = "2px solid red";
	  document.getElementById("email").style.border = "2px solid red";
	} else {
	  alert("Formulario enviado correctamente");
	}
  }
  
  