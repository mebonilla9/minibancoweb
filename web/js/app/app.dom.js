var _dom = {
    mostrarCargador: function () {
        // instruccion para mostrar dialogo
    },
    ocultarCargador: function () {
        // instruccion para cerrar dialogo
    },
    mostrarPanelError: function (msg) {
        Materialize.Toast.removeAll();
        Materialize.toast(msg, 5000, 'red');
    },
    mostrarDialogo: function (msg) {
        Materialize.Toast.removeAll();
        Materialize.toast(msg, 6000, 'green');
    },
    obtenerValorSelect: function (selector) {
        var value = '';
        var cbo = $(selector);
        cbo.material_select('destroy');
        value = cbo.val();
        cbo.material_select();
        return value;
    }
};