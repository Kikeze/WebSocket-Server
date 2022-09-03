

const socketController = (socket) => {
    // console.log("Cliente conectado", socket.id);

    socket.on("disconnect", () => {
        // console.log("Cliente desconectado", socket.id);
    });

    socket.on("enviar-mensaje-cliente", (payload, callback) => {
        
        callback("OK!");
        
        socket.broadcast.emit("enviar-mensaje-servidor", payload);

    });
};


module.exports = {
    socketController
};
