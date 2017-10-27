var clienteControl = {
    consultarTipoCliente:function(callback){
        return _app.ajax({
           'url':'http://localhost:8084/minibancoweb/tipocliente/consultar',
           'completado':callback
        });
    },
    consultarTipoDocumento:function(callback){
        return _app.ajax({
            'url':'http://localhost:8084/minibancoweb/tipodocumento/consultar',
           'completado':callback
        });
    }
};