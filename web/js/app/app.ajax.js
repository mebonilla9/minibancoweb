var _app = {
    ajax:function(args){
        if (!args.data) {
            args.data = {};
        }
        var result;
        var defecto = {
            'url':args.url,
            'data':(args.data) ? args.data : null,
            'type':(args.metodo) ? args.metodo: 'POST',
            'async':(args.async !== null || args.async !== undefined) ? args.async : true,
            'dataType':(args.tipo) ? args.tipo : 'json',
            'success':function(data){
                // reemplazar por linea que llama al cargador
                if (data.codigo !== 1) {
                    _dom.mostrarPanelError(data.mensaje);
                    // reemplazar por linea que llama a un dialogo para 
                    // informar del error
                    return;
                }
                if (args.async !== undefined && args.async === false) {
                    result = data;
                } else {
                    // referencia al metodo callback que espera resultado en el 
                    // archivo de vista.js
                    args.completado(data);
                }
            },
            'error':function(err, textStatus, errThrown){
                _app.capturarError(err);
            }
        };
        if (!args.background) { // true - false
            defecto.beforeSend = _dom.mostrarCargador();// mostrar el cargador
        }
        if (args.background && !!args.beforeSend) {
            defecto.beforeSend = args.beforeSend;
        }
        try {
            $.ajax(defecto);
        } catch (err) {
            console.warn(err);
        }
    },
    capturarError:function(err){
        _dom.ocultarCargador();
        // Error al conectar la base de datos o la peticion fue rechazada
        if (err.state() === 'rejected') { 
            _dom.mostrarDialogo(err.responseText);
            return;
        }
        _dom.mostrarPanelError("Error de conexión");
    }
};