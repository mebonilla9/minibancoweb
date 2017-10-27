var _dom = {
    mostrarCargador: function () {
        // instruccion para mostrar dialogo
    },
    ocultarCargador: function () {
        // instruccion para cerrar dialogo
    },
    mostrarPanelError: function (msg) {
        Materialize.toast(msg, 5000, 'red');
    },
    mostrarDialogo: function (msg) {
        Materialize.toast(msg, 6000, 'green');
    }
};