var thatRegistrar;
var registrarVista = {
    init:function(){
        console.log('registrar cargado');
        thatRegistrar = this;
        // aplicar componente de dialogo a una division
        $('.modal').modal();
        thatRegistrar.cargarTipoCliente();
        thatRegistrar.cargarTipoDocumento();
        thatRegistrar.asignarEventos();
    },
    asignarEventos:function(){
        $('#btnAgregarTipoCliente').on('click',thatRegistrar.registrarNuevoTipoCliente);
        $('#btnAgregarTipoDocumento').on('click',thatRegistrar.registrarNuevoTipoDocumento);
        $('#formRegistrar').on('submit',thatRegistrar.registrarCliente);
    },
    cargarTipoCliente:function(){
        registrarControl.consultarTiposCliente(thatRegistrar.callbackCargarTipoCliente);
    },
    callbackCargarTipoCliente:function(data){
        var cboTipoCliente = $('#cboTipoCliente');
        thatRegistrar.cargarComboTipoCliente(cboTipoCliente, data.datos);
    },
    cargarComboTipoCliente: function (select, data) {
        for (var i = 0; i < data.length; i++) {
            select.append($('<option>').val(data[i].idTipoCliente).text(data[i].nombre));
        }
        select.material_select();
    },
    cargarTipoDocumento: function () {
        registrarControl.consultarTipoDocumento(thatRegistrar.callbackCargarTipoDocumento);
    },
    callbackCargarTipoDocumento: function (data) {
        var cboTipoDocumento = $('#cboTipoDocumento');
        thatRegistrar.cargarComboTipoDocumento(cboTipoDocumento, data.datos);
    },
    cargarComboTipoDocumento: function (select, data) {
        for (var i = 0; i < data.length; i++) {
            select.append($('<option>').val(data[i].idTipoDocumento).text(data[i].nombre));
        }
        select.material_select();
    },
    registrarNuevoTipoCliente:function(){
        registrarModelo.clienteRegistrar.tipoCliente.nombre = $('#txtNuevoTipoCliente').val();
    },
    registrarNuevoTipoDocumento:function(){
        registrarModelo.clienteRegistrar.tipoDocumento.nombre = $('#txtNuevoTipoDocumento').val();
    },
    registrarCliente:function(e){
        e.preventDefault();
        var contrasena = CryptoJS.SHA256($('#txtContrasena').val()).toString();
        var reContrasena = CryptoJS.SHA256($('#txtRecContrasena').val()).toString();
        if (contrasena !== reContrasena) {
            _dom.mostrarPanelError('Las contraseñas no coinciden, intente nuevamente');
            return;
        }
        registrarModelo.clienteRegistrar.nombre = $('#txtNombre').val();
        registrarModelo.clienteRegistrar.apellido = $('#txtApellido').val();
        registrarModelo.clienteRegistrar.usuario = $('#txtUsuario').val();
        registrarModelo.clienteRegistrar.identificacion = $('#txtIdentificacion').val();
        registrarModelo.clienteRegistrar.contrasena = contrasena;
        registrarModelo.clienteRegistrar.telefono = $('#txtTelefono').val();
        registrarModelo.clienteRegistrar.direccion = $('#txtDireccion').val();
        registrarModelo.clienteRegistrar.fechaNacimiento = $('#txtFechaNacimiento').val();
        registrarModelo.clienteRegistrar.correo = $('#txtCorreo').val();
        
        var idTipoCliente = _dom.obtenerValorSelect('#cboTipoCliente');
        if (idTipoCliente > -1) {
            registrarModelo.clienteRegistrar.tipoCliente.idTipoCliente = idTipoCliente;
            registrarModelo.clienteRegistrar.tipoCliente.nombre = '';
        }
        
        var idTipoDocumento = _dom.obtenerValorSelect('#cboTipoDocumento');
        if (idTipoDocumento > -1) {
            registrarModelo.clienteRegistrar.tipoDocumento.idTipoDocumento = idTipoDocumento;
            registrarModelo.clienteRegistrar.tipoDocumento.nombre = '';
        }
        
        console.log(registrarModelo.clienteRegistrar);
        
        registrarControl.registrar(JSON.stringify(registrarModelo.clienteRegistrar),thatRegistrar.callbackRegistrar);
    },
    callbackRegistrar:function(data){
        _dom.mostrarDialogo(data.mensaje);
    }
};
registrarVista.init();


