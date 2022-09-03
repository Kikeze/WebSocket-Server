const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");


const socket = io();

socket.on("connect", (e) => {
    console.log("Conectado");
    
    lblOnline.style.display = "";
    lblOffline.style.display = "none";
});

socket.on("disconnect", (e) => {
    console.log("Desconectado");

    lblOnline.style.display = "none";
    lblOffline.style.display = "";
});

socket.on("enviar-mensaje-servidor", (payload) => {
    console.log( payload );
});

btnEnviar.addEventListener("click", (e) => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: 123,
        fecha: new Date()
    };

    if(mensaje && mensaje.length > 0) {
        socket.emit("enviar-mensaje-cliente", payload, (result) => {
            console.log( result );
        });
    }
});












