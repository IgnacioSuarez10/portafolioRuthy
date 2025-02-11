// funcion enviar correo a mail

function enviarCorreo(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let celular = document.getElementById("celular").value;
    let mensaje = document.getElementById("mensaje").value;
    let emailDestino = "ruthkuzli.mod@gmail.com";
    let asunto = "Nuevo mensaje de contacto";
    let cuerpo = `Nombre: ${nombre}%0ACelular: ${celular}%0AMensaje: ${mensaje}`;
    window.location.href = `mailto:${emailDestino}?subject=${asunto}&body=${cuerpo}`;
}

    // modo oscuro y lo guarda en localStorage

    document.addEventListener("DOMContentLoaded", function () {
        const modoOscuroBtn = document.getElementById("modoOscuro");
        const body = document.body;

        // Comprobar si el usuario ya activó el modo oscuro antes
        if (localStorage.getItem("modoOscuro") === "activado") {
            body.classList.add("dark-mode");
        }

        modoOscuroBtn.addEventListener("click", function () {
            body.classList.toggle("dark-mode");

            // Guardar la preferencia del usuario en localStorage
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("modoOscuro", "activado");
            } else {
                localStorage.setItem("modoOscuro", "desactivado");
            }
        });
    });

    // muestra la hora en el header 

    function actualizarFechaHora() {
        const fechaHoraElemento = document.getElementById("fecha-hora");
        const fechaActual = new Date();
    
        // Array de nombres de días y meses
        const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", 
                       "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    
        // Obtener valores de la fecha
        const diaSemana = diasSemana[fechaActual.getDay()];
        const dia = fechaActual.getDate();
        const mes = meses[fechaActual.getMonth()];
        const horas = fechaActual.getHours().toString().padStart(2, '0'); // Agrega 0 si es menor a 10
        const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
    
        // Formatear la fecha
        const fechaHoraFormateada = `${diaSemana} ${dia} de ${mes} ${horas}:${minutos}`;
        
        // Insertar en el footer
        fechaHoraElemento.textContent = fechaHoraFormateada;
    }
    
    // Actualizar la fecha y hora cada minuto
    setInterval(actualizarFechaHora, 60000);
    
    // Llamar la función al cargar la página
    actualizarFechaHora();
    
    document.addEventListener("DOMContentLoaded", function () {
        AOS.init({
            duration: 800, // Duración de la animación en milisegundos
            easing: "ease-in-out", // Tipo de transición
            once: false, // Solo se ejecuta una vez
        });
    });
    

