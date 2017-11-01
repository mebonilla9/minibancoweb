var clienteControl = {
    consultarTipoCliente: function (callback) {
        return _app.ajax({
            'url': 'http://localhost:8084/minibancoweb/tipocliente/consultar',
            'completado': callback
        });
    },
    consultarTipoDocumento: function (callback) {
        return _app.ajax({
            'url': 'http://localhost:8084/minibancoweb/tipodocumento/consultar',
            'completado': callback
        });
    },
    consultarClientes: function (callback) {
        return _app.ajax({
            'url': 'http://localhost:8084/minibancoweb/cliente/consultar',
            'completado': callback
        });
    },
    registrarCliente:function(data,callback){
        return _app.ajax({
            'url': 'http://localhost:8084/minibancoweb/cliente/insertar',
            'data': data,
            'completado': callback
        });
    }
};