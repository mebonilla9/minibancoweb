var thatIndex;
var indexVista = {
    init:function(){
        console.log('index cargado');
        thatIndex = this;
        $('#fmIniciar').on('submit',thatIndex.iniciarSesion);
    },
    iniciarSesion:function(e){
        var contrasena = CryptoJS.SHA256($('#txtContrasena').val());
        $('#txtContrasena').val(contrasena);
    }
};
indexVista.init();