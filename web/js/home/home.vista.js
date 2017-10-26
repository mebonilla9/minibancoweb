/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var homeThat;
var indexVista = {
    init: function () {
        homeThat = this;
        console.log('Home Cargado');
        $(".button-collapse").sideNav();
        $('.contenedor-principal').load('vistas/cliente.jsp');
    }
};
indexVista.init();

