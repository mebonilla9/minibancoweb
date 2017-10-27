var thatCliente;
var clienteVista = {
    init:function(){
        // Captura del contexto global del script cliente.vista.js
        thatCliente = this;
        console.log('Cliente cargado');
        thatCliente.cargarTipoCliente();
        //$('#contenedorCliente').find('select').material_select();
    },
    // encargarse de disparar la peticion
    cargarTipoCliente:function(){
        clienteControl.consultarTipoCliente(thatCliente.callbackCargarTipoCliente);
    },
    // encargarse de utilizar los datos recibidos en el DOM
    callbackCargarTipoCliente:function(data){
        console.log(data);
    }
};
clienteVista.init();