function enviarCorreo(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let celular = document.getElementById("celular").value;
    let mensaje = document.getElementById("mensaje").value;
    let emailDestino = "ignacioooosuarez@gmail.com";
    let asunto = "Nuevo mensaje de contacto";
    let cuerpo = `Nombre: ${nombre}%0ACelular: ${celular}%0AMensaje: ${mensaje}`;
    window.location.href = `mailto:${emailDestino}?subject=${asunto}&body=${cuerpo}`;
}