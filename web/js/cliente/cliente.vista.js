var thatCliente;
var clienteVista = {
    init:function(){
        // Captura del contexto global del script cliente.vista.js
        thatCliente = this;
        console.log('Cliente cargado');
        $('#contenedorCliente').find('select').material_select();
    }
};
clienteVista.init();