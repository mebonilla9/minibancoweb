var thatCliente;
var clienteVista = {
    init: function () {
        // Captura del contexto global del script cliente.vista.js
        thatCliente = this;
        console.log('Cliente cargado');
        thatCliente.cargarTipoCliente();
        thatCliente.cargarTipoDocumento();
        thatCliente.cargarClientes();
        thatCliente.asignarEventos();
    },
    asignarEventos:function(){
        // Asignacion del evento submit para fomulario de cliente
        $('#formCliente').on('submit',thatCliente.registrarCliente);
    },
    // encargarse de disparar la peticion
    cargarTipoCliente: function () {
        clienteControl.consultarTipoCliente(thatCliente.callbackCargarTipoCliente);
    },
    // encargarse de utilizar los datos recibidos en el DOM
    callbackCargarTipoCliente: function (data) {
        //debugger;
        var cboTipoCliente = $('#cboTipoCliente');
        thatCliente.cargarComboTipoCliente(cboTipoCliente, data.datos);
    },
    cargarComboTipoCliente: function (select, data) {
        //debugger;
        for (var i = 0; i < data.length; i++) {
            select.append($('<option>').val(data[i].idTipoCliente).text(data[i].nombre));
        }
        select.material_select();
    },
    cargarTipoDocumento: function () {
        clienteControl.consultarTipoDocumento(thatCliente.callbackCargarTipoDocumento);
    },
    callbackCargarTipoDocumento: function (data) {
        var cboTipoDocumento = $('#cboTipoDocumento');
        thatCliente.cargarComboTipoDocumento(cboTipoDocumento, data.datos);
    },
    cargarComboTipoDocumento: function (select, data) {
        for (var i = 0; i < data.length; i++) {
            select.append($('<option>').val(data[i].idTipoDocumento).text(data[i].nombre));
        }
        select.material_select();
    },
    cargarClientes: function () {
        clienteControl.consultarClientes(thatCliente.callbackCargarClientes);
    },
    callbackCargarClientes: function (data) {
        var tbody = $('#tblCliente tbody');
        for (var i = 0; i < data.datos.length; i++) {
            var fila = $('<tr>');
            fila.append($('<td>').text(data.datos[i].idCliente));
            fila.append($('<td>').text(data.datos[i].nombre));
            fila.append($('<td>').text(data.datos[i].apellido));
            fila.append($('<td>').text(data.datos[i].identificacion));
            fila.append($('<td>').text(data.datos[i].telefono));
            fila.append($('<td>').text(data.datos[i].direccion));
            fila.append($('<td>').text(data.datos[i].usuario));
            fila.append($('<td>').text(data.datos[i].fechaNacimiento));
            fila.append($('<td>').text(data.datos[i].correo));
            fila.append($('<td>').text(data.datos[i].tipoCliente.idTipoCliente));
            fila.append($('<td>').text(data.datos[i].tipoDocumento.idTipoDocumento));
            fila.append($('<td>').text(data.datos[i].estado));
            var celdaBotones = $('<td>');
            celdaBotones.append(
                    $('<a>').addClass("btn red waves-effect waves-light deleteable")
                    .attr('data-id', data.datos[i].idCliente)
                    .html('<i class="material-icons">delete</i>')
            );
            celdaBotones.append(
                    $('<a>').addClass("btn green waves-effect waves-light updateable")
                    .attr('data-id', data.datos[i].idCliente)
                    .html('<i class="material-icons">update</i>')
            );
            fila.append(celdaBotones);
            tbody.append(fila);
        }
    },
    registrarCliente:function(e){
        // Anular el comportamiento por defecto de un formulario
        e.preventDefault();
        var data = {
            nombre:$('#txtNombre').val(),
            apellido:$('#txtApellido').val(),
            identificacion:$('#txtIdentificacion').val(),
            telefono:$('#txtTelefono').val(),
            direccion:$('#txtDireccion').val(),
            usuario:$('#txtUsuario').val(),
            contrasena:CryptoJS.SHA256($('#txtContrasena').val()),
            fechaNacimiento:$('#txtFechaNacimiento').val(),
            correo:$('#txtCorreo').val(),
            tipoCliente:{
                idTipoCliente:_dom.obtenerValorSelect('#cboTipoCliente')
            },
            tipoDocumento:{
                idTipoDocumento:_dom.obtenerValorSelect('#cboTipoDocumento')
            },
            estado:$('#cbxEstado').prop('checked')
        }
        console.log(data);
    }
};
clienteVista.init();