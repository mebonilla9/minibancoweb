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
    asignarEventos: function () {
        // Asignacion del evento submit para fomulario de cliente
        $('#formCliente').on('submit', thatCliente.registrarCliente);
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
        tbody.empty();
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
            // Asignacion de evento click para boton .deleteable
            $('#tblCliente tbody')
                    .find('.deleteable')
                    .on('click', thatCliente.eliminarCliente);
            // Asignacion de evento click para boton .updateable
            $('#tblCliente tbody')
                    .find('.updateable')
                    .on('click', thatCliente.modificarCliente);
        }
    },
    registrarCliente: function (e) {
        // Anular el comportamiento por defecto de un formulario
        e.preventDefault();
        clienteModelo.clienteActual.nombre = $('#txtNombre').val();
        clienteModelo.clienteActual.apellido = $('#txtApellido').val();
        clienteModelo.clienteActual.identificacion = $('#txtIdentificacion').val();
        clienteModelo.clienteActual.telefono = $('#txtTelefono').val();
        clienteModelo.clienteActual.direccion = $('#txtDireccion').val();
        clienteModelo.clienteActual.usuario = $('#txtUsuario').val();
        
        clienteModelo.clienteActual.contrasena = 
                (clienteModelo.status!=='upd')
                ?CryptoJS.SHA256($('#txtContrasena').val()).toString()
                :clienteModelo.clienteActual.contrasena;
                
        clienteModelo.clienteActual.fechaNacimiento = $('#txtFechaNacimiento').val();
        clienteModelo.clienteActual.correo = $('#txtCorreo').val();
        clienteModelo.clienteActual.tipoCliente.idTipoCliente = _dom.obtenerValorSelect('#cboTipoCliente');
        clienteModelo.clienteActual.tipoDocumento.idTipoDocumento = _dom.obtenerValorSelect('#cboTipoDocumento');
        clienteModelo.clienteActual.estado = $('#cbxEstado').prop('checked');
        console.log(clienteModelo.clienteActual);
        // evaluar el status del clienteModelo para determinar si se hace una insersion o
        // modificacion
        if (clienteModelo.status === 'upd') {
            clienteControl.modificarCliente(JSON.stringify(clienteModelo.clienteActual),thatCliente.callbackModificarCliente);
            return;
        }
        clienteControl.registrarCliente(JSON.stringify(clienteModelo.clienteActual), thatCliente.callbackRegistrarCliente);
    },
    callbackRegistrarCliente: function (data) {
        _dom.mostrarDialogo(data.mensaje);
        thatCliente.cargarClientes();
        $('#formCliente').trigger('reset');
        $('#cboTipoCliente').prop('selectedIndex', 0);
        $('#cboTipoDocumento').prop('selectedIndex', 0);
    },
    callbackModificarCliente:function(data){
        _dom.mostrarDialogo(data.mensaje);
        thatCliente.cargarClientes();
        $('#formCliente').trigger('reset');
        $('#cboTipoCliente').prop('selectedIndex', 0);
        $('#cboTipoDocumento').prop('selectedIndex', 0);
        clienteModelo.status = '';
    },
    eliminarCliente: function () {
        var id = $(this).attr('data-id');
        clienteModelo.status = 'del';
        thatCliente.buscarCliente(id);
    },
    modificarCliente: function () {
        var id = $(this).attr('data-id');
        clienteModelo.status = 'upd';
        thatCliente.buscarCliente(id);
    },
    buscarCliente: function (id) {
        clienteControl.buscarCliente({id: id}, thatCliente.callbackBuscarCliente);
    },
    callbackBuscarCliente: function (data) {
        console.log(data.datos);
        switch (clienteModelo.status) {
            case 'del':
                thatCliente.continuarBorrado(data.datos);
                break;
            case 'upd':
                thatCliente.continuarModificado(data.datos);
        }
    },
    continuarBorrado: function (data) {
        data.estado = false;
        console.log(data);
        clienteControl.modificarCliente(JSON.stringify(data), thatCliente.callbackEliminarCliente);
    },
    continuarModificado: function (data) {
        clienteModelo.clienteActual = data;
        $("#txtNombre").val(clienteModelo.clienteActual.nombre);
        $("#txtApellido").val(clienteModelo.clienteActual.apellido);
        $("#txtIdentificacion").val(clienteModelo.clienteActual.identificacion).attr('disabled', 'disabled');
        $("#txtTelefono").val(clienteModelo.clienteActual.telefono);
        $("#txtDireccion").val(clienteModelo.clienteActual.direccion);
        $("#txtUsuario").val(clienteModelo.clienteActual.usuario);
        $("#txtUsuario").attr('disabled', 'disabled');
        $("#txtContrasena").val(clienteModelo.clienteActual.contrasena);
        $("#txtContrasena").attr('disabled', 'disabled');
        $("#txtFechaNacimiento").val(clienteModelo.clienteActual.fechaNacimiento);
        $("#txtCorreo").val(clienteModelo.clienteActual.correo);
        $("#txtCorreo").attr('disabled', 'disabled');
        _dom.asignarValorSelect('#cboTipoCliente', clienteModelo.clienteActual.tipoCliente.idTipoCliente);
        _dom.asignarValorSelect('#cboTipoDocumento', clienteModelo.clienteActual.tipoDocumento.idTipoDocumento);
        clienteModelo.clienteActual.estado ? $('#cbxEstado').prop('checked', true) : $('#cbxEstado').prop('checked', false);
        $('#formCliente').find('label').addClass('active');
    },
    callbackEliminarCliente: function (data) {
        _dom.mostrarDialogo(data.mensaje);
        thatCliente.cargarClientes();
    }

};
clienteVista.init();