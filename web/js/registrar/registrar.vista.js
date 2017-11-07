var thatRegistrar;
var registrarVista = {
    init:function(){
        console.log('registrar cargado');
        thatRegistrar = this;
        $('.modal').modal();
        thatRegistrar.cargarTipoCliente();
        thatRegistrar.cargarTipoDocumento();
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
        
    },
    registrarNuevoTipoDocumento:function(){
        
    }
};
registrarVista.init();


